export default function StorylaneTour({ id, height = '500px' }) {
  return (
    <iframe
      src={`https://app.storylane.io/share/${id}`}
      allow="fullscreen"
      style={{ width: '100%', height, border: 'none', borderRadius: '8px' }}
    />
  );
}
