import './Vault.css';

export default function SomaticTags({ selectedTag, setSelectedTag }) {
    const tags = [
        { name: 'Anxiety', color: 'var(--accent-green)' },
        { name: 'Exhaustion', color: '#8A9BA8' },
        { name: 'Frustration', color: '#FF5722' },
        { name: 'Overthinking', color: '#FFB74D' },
        { name: 'Grief', color: '#64B5F6' }
    ];
    return (
        <div className="somatic-container">
            <div className="somatic-header">
                <span className="somatic-label">SOMATIC WEIGHT TAG</span>
                <span className="somatic-hint">Select to focus frequency</span>
            </div>

            <div className="somatic-tags-list">
                {tags.map((tag) => {
                    const isSelected = selectedTag === tag.name;
                    return (
                        <button
                            key={tag.name}
                            onClick={() => setSelectedTag(tag.name)}
                            className="somatic-tag-btn"
                            style={{
                                backgroundColor: isSelected ? 'rgba(0, 230, 118, 0.1)' : 'transparent',
                                border: `1px solid ${isSelected ? tag.color : 'rgba(255, 255, 255, 0.15)'}`,
                                color: isSelected ? tag.color : 'var(--text-muted)'
                            }}
                        >
                            <span className="somatic-tag-dot" style={{ backgroundColor: tag.color }}></span>
                            {tag.name}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}