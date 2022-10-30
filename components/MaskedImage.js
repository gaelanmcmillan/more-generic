export default function MaskedImage ({
  imageUrl,
  children,
  id,
  width,
  height,
}) {
  // const imageUrl = `url(${src})`
  console.log(imageUrl);
  return (
    <>
      <div className="masked-image-wrapper" style={{
        width: width,
        height: height,
      }}>
        <div style={{
          WebKitMaskImage: imageUrl,
          imageMask: imageUrl,
          width: "inherit",
          height: "inherit",
        }}>
          {/* <img src={src} /> */}
          <div className="masked-image-color-box" />
          {children}
        </div>
      </div>
    </>
  )
}