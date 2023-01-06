import { useRouter } from "next/router";
import Link from "next/link";
import BowlingAlley from "./BowlingAlley";

const pages = [
  {href: "/blog", title: "Blog"},
  {href: "/solutions", title: "Solutions"},
]

const NavButton = ({title, route, asPath}) => {
  const extrusionClass = asPath == route ? "semi-extruded" : "extruded";
  const classes = ["user-select-none", extrusionClass];
  const classString = classes.join(" ");
  return (
    <div className="minimal-width">
      <Link href={route}>
        <a>
          <h1 className={classString}>{title}</h1>
        </a>
      </Link>
    </div>
  );
}

const Header = () => {
  const { asPath } = useRouter();
  const isHome = asPath === '/';

  return (
    <header>
      <BowlingAlley 
        className={`size-transition nav-row soft-shadow`}>
          <nav id="greater-nav">
            <div className="site-title">
              <NavButton title="More Generic" route="/" asPath={asPath}/>
            </div>
            <div className="rest-of-pages">
              {pages.map(({href, title}, i) => {
                return (
                  <NavButton key={i} title={title} route={href} asPath={asPath}/>
                  );
                })}
            </div>
          </nav>
      </BowlingAlley>
    </header>
  );
}

export default Header;
