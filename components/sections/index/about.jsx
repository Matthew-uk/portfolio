// Core packages
import Image from "next/image";

// Section structure
import Section from "../../structure/section";
import Container from "../../structure/container";

// Section general blocks
import SectionTitle from "../../blocks/section.title.block";
import SectionGridBg from "../../blocks/section.grid.block";

// Section specific blocks
import BadgesBlock from "../../blocks/about.badges.block";
import CopyBlock from "../../blocks/about.copy.block";

// Section scss
import about from "../../../styles/sections/index/about.module.scss";

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 *
 * @returns {jsx} <About />
 */
export default function About() {
  return (
    <Section classProp={about.section}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="About Me"
          preTitle="Synopsis"
          subTitle="With a FrontEnd diverse skill set that includes HTML, CSS, JavaScript, TypeScript, TailwindCSS, NextJS and an average Backend Expertise(NodeJS, Express JS & MongoDB), I'm currently learning UX design, UI design, operational architecture, systems design, photography, and branding, I seek to become a well-rounded digital professional."
        />
        <section className={about.content}>
          <div className={about.image}>
            <Image
              src="/img/profile.JPG"
              alt="Nelson family photo"
              layout="fill"
              //
            />
            {/* <Image src="/img/family-photo.jpg" width={600} height={800}/> */}
          </div>
          <div className={about.copy}>
            <CopyBlock
              title="Softskills that pay the bills"
              containerClass={about.container}
              iconClass={about.icon}
              icon={["fat", "ear-listen"]}
              copy="In addition to my technical expertise—I also have strong leadership, time management, and multitasking skills—honed through my experience as a FrontEnd developer. Outside of work, I enjoy staying active through sports such as basketball and football. I am confident in my ability to bring passion and value to any project."
            />
            <BadgesBlock
              title="Reasearch and planning"
              containerClass={about.container}
              list={methods}
              fullContainer="fullContainer"
              block="methods"
              icon="fingerprint"
              copy="One of my favorite aspects of creating is planning the architecture of a project. From Design Systems to Brand Strategy—I enjoy working with the many touch points of user experience."
              //invertedColor="invertedColor"
              headerIcon={`${about.icon}`}
            />
          </div>
        </section>
      </Container>
    </Section>
  );
}

const methods = [
  { key: "planet-moon", name: "User Research", type: "fad" },
  { key: "qrcode", name: "Digital Strategy", type: "fad" },
  { key: "window", name: "Design Systems", type: "fad" },
  { key: "cubes", name: "Product Strategy", type: "far" },
  { key: "layer-plus", name: "Brand Strategy", type: "fad" },
  { key: "solar-system", name: "Operations", type: "fad" },
];
