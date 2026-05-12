// components/ResponsiveYouTube.jsx
export default function YouTube({ videoId }) {
  return (
    <div className="w-[700px] h-[500px] rounded-[10%] overflow-hidden">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        className="w-full h-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}