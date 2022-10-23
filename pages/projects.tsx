import type { NextPage } from "next";
import Image from "next/image";
import { FadeUp } from "../components/FadeUp";
import Layout from "../components/Layout";
import woo from "../public/woo.webp";
import ghast from "../public/ghast.webp";
import hone from "../public/hone.webp";
import mpl from "../public/mpl.webp";

const ProjectCard = ({
  number,
  title,
  firstHeader,
  technologies,
  secondHeader,
  link,
  imagePath,
}: any) => {
  return (
    <div className="sm:flex mb-28">
      <div className="sm:w-[60%] pl-5 sm:pl-10 md:pl-20">
        <div className="flex">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold ml-[-1rem] sm:ml-[-2rem]">
            {number}
          </h2>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold ml-[1rem] sm:ml-[2rem]">
            {title}
          </h2>
        </div>
        <div className="mt-10 ml-[2rem] md:ml-[4.5rem]">
          <h3 className="text-xl max-w-full sm:max-w-[300px] font-semibold">
            {firstHeader}
          </h3>
          <p className="text-gray-300 sm:max-w-[400px]">
            <span className="font-semibold">Tech Stack: </span>
            {technologies}
          </p>
          <h4 className="text-lg max-w-[500px] mt-16">{secondHeader}</h4>
          <a href={link} target="__blank">
            <button className="bg-purple-500 mb-10 px-5 py-3 mt-20 font-bold transition-transform transform hover:scale-105">
              See Website
            </button>
          </a>
        </div>
      </div>
      <div className="sm:w-[40%] p-5 flex flex-col justify-center">
        <a href={link} target="__blank">
          <div className="bg-gray-100 transition-all p-5 hover:p-3 rounded-xl">
            <Image src={imagePath} alt="project image" className="w-full" />
          </div>
        </a>
      </div>
    </div>
  );
};

const Projects: NextPage = () => {
  return (
    <Layout
      title="Projects"
      description=""
      className="bg-in-half text-white overflow-x-hidden ml-5 sm:ml-0"
    >
      <h1 className="w-full sm:ml-10 mt-5 md:ml-20 md:mt-20 font-bold text-6xl sm:text-8xl mb-[10%]">
        Projects
      </h1>

      <ProjectCard
        number="01."
        title="woo.itv.com - e-commerce website"
        firstHeader="A website made for British media company ITV"
        technologies="React,
            Typescript, Next.js, TailwindCSS, Strapi"
        secondHeader="This project was developed by me and 3 other devs. As I joined the team a bit later, my role was to code 20% of the frontend."
        link="https://woo.itv.com/"
        imagePath={woo}
      />

      <FadeUp>
        <div className="flex items-center justify-center sm:w-[55%] ml-[2.5%] my-8">
          <div className="h-[1px] w-[80%] bg-gray-300"></div>
          <h3 className="mx-2 text-2xl font-semibold">2021</h3>
          <div className="h-[1px] w-[80%] bg-gray-300"></div>
        </div>
        <ProjectCard
          number="02."
          title="Hone.gg - Product website"
          firstHeader="A website where you can buy a program that improves performance of your PC."
          technologies="React,
            Typescript, Next.js, TailwindCSS, Node.js, Nest.js, PostgreSQL"
          secondHeader="
            My role in this project was to code 30% of frontend along with
            Xsolla integration, implement 90% of the backend, and to deploy it
            to the cloud."
          link="https://hone.gg/"
          imagePath={hone}
        />
        <ProjectCard
          number="03."
          title="MPL.gg - Minecraft server website"
          firstHeader="A website for a fun minecraft server."
          technologies="React,
            Typescript, Next.js, TailwindCSS"
          secondHeader="
            My role in this project was to code 100% of frontend and to deploy it
            to the cloud."
          link="https://mpl.gg/"
          imagePath={mpl}
        />
        <div className="flex items-center justify-center sm:w-[55%] ml-[2.5%] mb-8">
          <div className="h-[1px] w-[80%] bg-gray-300"></div>
          <h3 className="mx-2 text-2xl font-semibold">2020</h3>
          <div className="h-[1px] w-[80%] bg-gray-300"></div>
        </div>
        <ProjectCard
          number="04."
          title="Ghast.io - Product website"
          firstHeader="A website where you can buy a program that decreases lag and improves your internet connection."
          technologies="React,
            Typescript, Next.js, TailwindCSS, Node.js, Nest.js, PostgreSQL"
          secondHeader="
            My role in this project was to code 100% of frontend and 90% of backend, along with paymentwall integration."
          link="https://ghast.io/"
          imagePath={ghast}
        />
      </FadeUp>
    </Layout>
  );
};

export default Projects;
