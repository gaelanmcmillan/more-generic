import MaskedImage from "../components/MaskedImage";

export default function AboutPage() {
  return (
    <>
      <MaskedImage
        imageUrl={"url(" + "/images/posts/QueriesPicture.png" + ")"}
        width="300px"
        height="300px"
      />
    </>
  );
}