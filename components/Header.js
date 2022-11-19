import { useRouter } from "next/router";
import Link from "next/link";
import BowlingAlley from "./BowlingAlley";

const pages = [
  {href: "/about", title: "About"},
  {href: "/blog", title: "Blog"},
  {href: "/solutions", title: "Solutions"},
]

const Header = () => {
  const { asPath } = useRouter();
  const isHome = asPath === '/';

  return (
    <header>
      <BowlingAlley lg={10} md={10} sm={12} xs={12}
        className={`size-transition nav-row soft-shadow`}>
        <nav id="greater-nav"  className={`${isHome ? "my-fd-col" : "my-fd-row"}`}>
          <div id="nav-logo" className={`${isHome ? "big-logo" : "small-logo"}`}>
            <Link href="/">
              <a>
                <h1 className={`extruded ${isHome ? "selected-page" : "unselected-page"}`}>More Generic</h1>
              </a>
            </Link>
          </div>
          <div className={isHome ? "revealed" : "hidden"}>
          </div>
          <div id="nav-buttons" className={`${isHome ? "displaced" : "nondisplaced"}`}>
            {pages.map(({href, title}, i) => {
              return (
                <Link href={href} key={i}>
                  <a>
                    <h2 className={`extruded ${asPath == href ? "selected-page" : "unselected-page"}`}>{title}</h2>
                  </a>
                </Link>
              );
            })}
          </div>
        </nav>
      </BowlingAlley>
    </header>
  );
}

export default Header;


/**
 * <Link style={{float: "left"}} href="/about">
            <NavTitle><h2>About</h2></NavTitle>
          </Link>
          <Link style={{float: "left"}} href="/blog">
            <NavTitle><h2>Blog</h2></NavTitle>
          </Link>
 */


          /*
           <nav id="home-nav">
          <Link href="/">
            <a>
              <h1 style={{fontSize: "100px"}} className="extruded">More Generic</h1>
            </a>
          </Link>
            <pre>
              1. A blog about generic programming.<br/>
              2. A generic blog about programming.<br/>
              3. A blog about all things generic.<br/>
              4. A generic blog about all things.<br/>
            </pre>
          <Link href="/about">
            <a>
              <h2 className="extruded">About</h2>
            </a>
          </Link>
          <Link href="/blog">
            <a>
              <h2 className="extruded">Blog</h2>
            </a>
          </Link>
          <Link href="/solutions">
            <a>
              <h2 className="extruded">Problem Solutions</h2>
            </a>
          </Link>
        </nav>
          */