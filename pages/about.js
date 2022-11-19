import BowlingAlley from "../components/BowlingAlley";
import styled from "styled-components";
import Link from "next/link";

const ProfilePicture = styled.div`
  float: left;
  width: 33%;
  max-width: 90vw;
  overflow: hidden;
  margin-right: 1rem;
  > img {
    width: 100%;
    size: 100%;
  }
`

const socialsLinks = [
  {
    href: "/pdfs/resume.pdf",
    title: "Resume",
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/gaelan-mcmillan/",
    title: "LinkedIn",
    external: true,
  },
  {
    href: "https://github.com/gaelanmcmillan",
    title: "GitHub",
    external: true,
  },
  {
    href: "https://codeforces.com/profile/gaelanmcm",
    title: "Codeforces",
    external: true,
  },
];

export default function AboutPage() {
  return (
    <BowlingAlley>
      <div className="info-block soft-shadow soft-radius-outer">
        <div className="info-header"><h2>Thanks for stopping by!</h2></div>
        <ProfilePicture className="soft-radius soft-shadow">
          <img src="/images/ProfilePicture.JPG" />
        </ProfilePicture> 
        <p>
          My name is Gaelan McMillan.<br/>
          I am an avid programmer and professional musician based in Toronto.<br/>
          I currently study Computer Science at Toronto Metropolitan University.
        </p>
        <p>
          I love exploring the many ways a problem can be solved, as well as finding the common throughlines between different problems.
          I created this site as a place to amalgamate my notes on specific algorithms and share solutions to various coding challenges.
        </p>
        <p>
          I don't purport to be an expert on the topics I write about, especially programming!
          If you have any feedback on my writing, please don't hesitant to contact me!
        </p>
      </div>

      <div className="info-block soft-shadow soft-radius-outer">
        <div className="info-header"><h2>Let's connect!</h2></div>

        <div id="about-nav">
          {socialsLinks.map(({href, title, external}, i) => {
            return (
              <Link href={href} key={i}>
                <div className="outgoing-link">
                  <a>
                    <h4>{title}{external ? " ⧉" : ""}</h4>
                  </a>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </BowlingAlley>
  );
}