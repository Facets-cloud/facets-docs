export default function StorylaneTour({ id }) {
  return (
    <div style={{ position: 'relative', paddingBottom: 'calc(55.02% + 25px)', width: '100%', height: 0 }}>
      <iframe
        loading="lazy"
        src={`https://app.storylane.io/demo/${id}`}
        name="sl-embed"
        allow="fullscreen"
        allowFullScreen
        style={{
          position: 'absolute', top: 0, left: 0,
          width: '100%', height: '100%',
          border: '1px solid rgba(63,95,172,0.35)',
          boxShadow: '0px 0px 18px rgba(26,19,72,0.15)',
          borderRadius: '10px',
          boxSizing: 'border-box',
        }}
      />
    </div>
  );
}
