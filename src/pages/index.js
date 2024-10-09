import Head from "next/head";
import BowlingAlley from "../components/BowlingAlley";

import styled from "styled-components";
import { AnimationLayout } from "../components/Transition";
import {
  info_block
} from "../styles/Index.module.scss";

const ProfilePicture = styled.div`
  max-width: 250px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 100%;
  overflow: hidden;
  > img {
    width: 100%;
    size: 100%;
  }
`;

const socialsLinks = [
  {
    href: "/pdfs/resume.pdf",
    title: "résumé",
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/gaelan-mcmillan/",
    title: "linkedin",
    external: true,
  },
  {
    href: "https://github.com/gaelanmcmillan",
    title: "github",
    external: true,
  },
  {
    href: "https://codeforces.com/profile/gaelanmcm",
    title: "codeforces",
    external: true,
  },
];

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Gaelan McMillan's Website</title>
      </Head>
      <AnimationLayout>
        <BowlingAlley>
          <ProfilePicture>
            <img src="/images/ProfilePicture.JPG" />
          </ProfilePicture>
          <div className={`${info_block}`} style={{ marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
            <p >
              <h2>Hi, I'm Gaelan</h2>
              + computer science student<br />
              + favourite software: <i>Vim</i>, <i>Google Maps</i>, <i>Ableton Live</i><br />
              + hobbies: running; <a className="outgoing-link" href={"/solves"}>programming puzzles</a><br />
              + music lover; <a className="outgoing-link" href={"/music"}>bassist for 10+ years</a><br />
            </p>
            <p>
              <h2>Find me on the web</h2>
              {socialsLinks.map(({ href, title, external }, i) => {
                return (
                  <div key={i}>
                    <a className="outgoing-link" href={href} >
                      {title}
                      {external ? " ⧉" : ""}
                    </a>
                  </div>
                );
              })}
            </p>
          </div>


        </BowlingAlley>
      </AnimationLayout>
    </>
  );
}
