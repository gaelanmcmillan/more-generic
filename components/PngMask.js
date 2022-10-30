export default function PngMask ({ mask, children }) {
  return (
  <div className="mask"
    style={{
      WebkitMaskImage: mask,
      maskImage: mask,
    }}>
      {children}
    </div>
  );
}