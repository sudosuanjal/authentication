export default function Loader() {
  return (
    <div className="inline-flex items-center gap-2">
      <div
        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
        style={{
          animation: "spin 1s linear infinite",
        }}
      ></div>

      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
