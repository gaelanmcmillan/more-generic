import MaskedImage from "../components/MaskedImage";

export default function AboutPage() {
  return (
    <>
      <h1>Gaelan McMillan</h1>
      <MaskedImage
        imageUrl={"url(" + "/images/posts/QueriesPicture.png" + ")"}
        width="300px"
        height="300px"
        id="pic"
      />
    </>
  );
}