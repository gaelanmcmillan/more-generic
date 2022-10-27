export default function PngMask ({ mask, children, size, repeat }) {
  return (
  <div className="mask"
    style={{
      WebkitMaskImage: mask,
      // WebKitMaskSize: "size",
      // WebKitMaskRepeat: "no-repeat",
      maskImage: mask,
      // maskSize: size,
      // maskRepeat: repeat,
    }}>
      {children}
    </div>
  );
}