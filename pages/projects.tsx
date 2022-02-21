import type { NextPage } from "next";
import Link from "next/link";
import { FadeUp } from "../components/FadeUp";
import Layout from "../components/Layout";
import Nav from "../components/Nav";

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
      <div className="w-[60%] pl-5 sm:pl-10 md:pl-20">
        <div className="flex">
          <h2 className="text-[2.8vw] font-semibold ml-[-2rem]">{number}</h2>
          <h2 className="text-[2.8vw] font-semibold ml-[2rem]">{title}</h2>
        </div>
        <div className="mt-10 md:ml-[5.5rem]">
          <h3 className="text-lg max-w-[300px] font-semibold">{firstHeader}</h3>
          <p className="text-gray-300 max-w-[400px]">
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
      <div className="w-[40%] p-5 flex flex-col justify-center">
        <a href={link} target="__blank">
          <div className="bg-gray-100 p-5 rounded-xl">
            <img
              src={imagePath}
              alt="project image"
              className="w-full transform  transition hover:translate-y-[-5px]"
            />
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
      className="bg-in-half text-white overflow-x-hidden"
    >
      <h1 className="w-full ml-10 mt-5 md:ml-20 md:mt-20 font-bold text-8xl mb-[10%]">
        Projects
      </h1>
      <ProjectCard
        number="01."
        title="Hone.gg - Product website"
        firstHeader="A website where you can buy a program that improves performance of your PC."
        technologies="React,
            Typescript, Next.js, TailwindCSS, Node.js, Nest.js, PostgreSQL"
        secondHeader="
            My role in this project was to code 30% of frotnend along with
            Xsolla integration, implement 90% of the backend, and to deploy it
            to the cloud."
        link="https://hone.gg/"
        imagePath="/hone.webp"
      />
      <FadeUp>
        <ProjectCard
          number="02."
          title="MPL.gg - Minecraft server website"
          firstHeader="A website for a fun minecraft server."
          technologies="React,
            Typescript, Next.js, TailwindCSS"
          secondHeader="
            My role in this project was to code 100% of frotnend and to deploy it
            to the cloud."
          link="https://mpl.gg/"
          imagePath="/mpl.webp"
        />
        <ProjectCard
          number="03."
          title="Ghast.io - Product website"
          firstHeader="A website where you can buy a program that decreases lag and improves your internet connection."
          technologies="React,
            Typescript, Next.js, TailwindCSS, Node.js, Nest.js, PostgreSQL"
          secondHeader="
            My role in this project was to code 100% of frotnend and 90% of backend."
          link="https://dev.ghast.io/"
          imagePath="/ghast.webp"
        />
      </FadeUp>
    </Layout>
  );
};

export default Projects;
