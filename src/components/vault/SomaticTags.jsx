import styles from './Vault.module.css';

export default function SomaticTags({ selectedTag, setSelectedTag }) {
    const tags = [
        { name: 'Anxiety', color: 'var(--accent-teal)' },
        { name: 'Exhaustion', color: '#8A9BA8' },
        { name: 'Frustration', color: '#FF5722' },
        { name: 'Overthinking', color: '#FFB74D' },
        { name: 'Grief', color: '#64B5F6' }
    ];
    return (
        <div className={styles.somaticContainer}>
            <div className={styles.somaticHeader}>
                <span className={styles.somaticLabel}>SOMATIC WEIGHT TAG</span>
                <span className={styles.somaticHint}>Select to focus frequency</span>
            </div>

            <div className={styles.somaticTagsList}>
                {tags.map((tag) => {
                    const isSelected = selectedTag === tag.name;
                    return (
                        <button
                            key={tag.name}
                            onClick={() => setSelectedTag(tag.name)}
                            className={styles.somaticTagBtn}
                            style={{
                                backgroundColor: isSelected ? 'rgba(53, 198, 178, 0.12)' : 'transparent',
                                border: `1px solid ${isSelected ? tag.color : 'var(--border-strong)'}`,
                                color: isSelected ? tag.color : 'var(--text-muted)'
                            }}
                        >
                            <span className={styles.somaticTagDot} style={{ backgroundColor: tag.color }}></span>
                            {tag.name}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}