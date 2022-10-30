import Link from "next/link";
import PngMask from "./PngMask";

export default function PostCard({ post }) {
  return (
    <Link href={'/blog/' + post.slug}>
      <div className="postcard clickable">
        <div className="postcard__img">
          {/* <img src={post.frontmatter.thumbnail} /> */}
          <PngMask
            mask={"url("+post.frontmatter.thumbnail+")"}
          >
          {/* <div className="mask"> */}
            <div className="img-color-box"/>
          {/* </div> */}
          </PngMask>
        </div>
        <div className="postcard__contents">
          <h3 className="postcard__title">{post.frontmatter.title}</h3>
          <p className="postcard__headline">{post.frontmatter.headline}</p>
          <div className="postcard__meta">
            <span className="postcard__date">Posted on {post.frontmatter.date}{' '}</span>
            <span className="postcard__author">by {post.frontmatter.author}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}