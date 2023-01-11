import { useRouter } from "next/router";
import Link from "next/link";
import BowlingAlley from "./BowlingAlley";
import { navbar,  } from "../styles/Header.module.scss";

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

  return (
    <header>
      <BowlingAlley 
        className={`size-transition nav-row soft-shadow`}>
          <nav className={navbar}>
            <div>
              <NavButton title="More Generic" route="/" asPath={asPath}/>
            </div>
            <div>
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
