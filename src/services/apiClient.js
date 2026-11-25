import { getToken } from "./authStorage.js";

export const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

let unauthorizedHandler = null;

export function setUnauthorizedHandler(handler) {
  unauthorizedHandler = handler;
}

export class ApiError extends Error {
  constructor(message, status, data = null) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.data = data;
  }
}

async function parseResponseBody(response) {
  const contentType = response.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    return response.json().catch(() => null);
  }
  const text = await response.text().catch(() => "");
  return text ? { message: text } : null;
}

export async function apiRequest(
  path,
  { method = "GET", body, headers = {}, auth = false } = {}
) {
  const requestHeaders = { ...headers };

  if (body !== undefined && !requestHeaders["Content-Type"]) {
    requestHeaders["Content-Type"] = "application/json";
  }

  if (auth) {
    const token = getToken();
    if (token) {
      requestHeaders.Authorization = `Bearer ${token}`;
    }
  }

  let response;
  try {
    response = await fetch(`${API_BASE_URL}${path}`, {
      method,
      headers: requestHeaders,
      body: body !== undefined ? JSON.stringify(body) : undefined,
    });
  } catch {
    throw new ApiError("Unable to connect to the server. Please try again.", 0);
  }

  const data = await parseResponseBody(response);

  if (response.status === 401 && auth && unauthorizedHandler) {
    unauthorizedHandler();
  }

  if (!response.ok) {
    const message = data?.message || data?.error || "Request failed.";
    throw new ApiError(message, response.status, data);
  }

  return data;
}
