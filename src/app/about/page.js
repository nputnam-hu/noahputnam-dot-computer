import Image from "next/image";
import Link from "next/link";
import styles from "../portfolio/portfolio.module.css";
import Topbar from "../portfolio/Topbar";

import BusinessCard from "/public/businesscard.png";

export const metadata = {
  title: "About | noahputnam.computer",
  description: "A computer owned by Noah Putnam",
};

const About = () => {
  return (
    <main style={{ paddingTop: 20, paddingLeft: 14, maxWidth: 580 }}>
      <div
        className={styles.row}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          // marginBottom: 12,
          zIndex: 10,
        }}
      >
        <Link href="/" style={{ padding: 4, width: 36, height: 36 }}>
          <Image
            src="/nporb.png"
            alt="Icon of an orb"
            width={36}
            height={36}
            priority
            loading="eager"
          />
        </Link>
        <div style={{ width: 6 }} />
      </div>
      <div style={{ height: 8 }} />
      <div style={{ marginLeft: 4,  }} className="about-content">
        <h2
          style={{
            fontWeight: "400",
            fontSize: 40,
            fontFamily: "HelveticaNeue-Medium",
            // margin: "16px 0 12px",
            margin: 0,
          }}
          className="about"
        >
          About
        </h2>
        <p
          style={{ fontFamily: "HelveticaNeue", fontSize: 17, lineHeight: '130%', marginRight: '14px' }}
        >
        Hi, my name is Noah. I work as lead of the deployment engineering team at <Link href="https://norm.ai" target="_blank">Norm Ai</Link>. Before that I did independent research on Human-Computer Interaction between internet users and AI, and before that I worked at <Link href="https://palantir.com" target="_blank">Palantir</Link>. I don't keep public social media accounts due to <Link href="https://arxiv.org/abs/2208.04040" target="_blank">general</Link> <Link href="https://arxiv.org/abs/2106.06415" target="_blank">privacy</Link> <Link href="https://www.wired.com/story/ai-tools-are-secretly-training-on-real-childrens-faces/?utm_source=chatgpt.com" target="_blank">concerns</Link>, but I promise I'm a real person.
        </p>
        <p
          style={{ fontFamily: "HelveticaNeue", fontSize: 17, lineHeight: '130%', marginRight: '14px' }}
        >
	My general goal with my work is to critically engage with the psychological relationship between humans and computers. I believe computers, despite their many merits and wonders, inflict wide-scale affective damage on people today. I believe this is far from inevitable.
        </p>
        <p
          style={{ fontFamily: "HelveticaNeue", fontSize: 17, lineHeight: '130%', marginRight: '14px' }}
        >
As computers become increasingly dominant in our society, critical engagement with computing must not be limited to a purely technical lens. The technology of modern computing both shapes and is shaped by the <Link href="https://en.wikipedia.org/wiki/Political_economy" target="_blank">political economy</Link> and <Link href="https://en.wikipedia.org/wiki/Legal_realism" target="_blank">legal realism</Link> of our times. That is why I am enthusiastic about my current work at Norm, which I believe has—in addition to an impressive technological and business vision—an importantly differentiated philosophical vision for how AI should be implemented in civil society (see: <Link href="https://arxiv.org/abs/2209.13020" target="_blank">Law Informs Code [arXiv:2209.13020]</Link>)
	</p>
        <p
          style={{ fontFamily: "HelveticaNeue", fontSize: 17, lineHeight: '130%', marginRight: '14px' }}
        >
Feel free to reach out to me with any questions or criticisms of
            my ideas or writings, or writing/ideas of your own. I
            always enjoy getting messages, and almost always reply.
	</p>
        <div style={{ height: 12 }} />
      </div>
<div style={{marginLeft: "-14px", display: 'flex', justifyContent: 'center', width: 'calc(100vw-14px'}}>
        <Image
          src={BusinessCard}
          placeholder="blur"
          height={550 / 1.75}
          width={850 / 1.75}
          alt="Noah Putnam | Technologist. Critical Theorist. | email: noahputnam@gmail.com"
          style={{
            // boxShadow: "4px 4px 4px 1px rgba(0, 0, 0, 0.2)",
            border: "1px solid rgba(0,0,0,0.2)",
          }}
          className="businesscard"
          priority
        />
</div>
        <div style={{ height: 48 }} />
    </main>
  );
};

export default About;
