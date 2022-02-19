import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeUp } from "../components/FadeUp";
import Layout from "../components/Layout";
import projects from "../public/projects.webp";

const Home: NextPage = () => {
  return (
    <Layout className="w-full" title="Home" description="">
      <div className="flex flex-col md:flex-row h-full">
        <main className="bg-white w-full md:w-[50%] xl:w-[40%] text-white">
          <div className="ml-10 mt-5 md:ml-20 md:mt-0 hero h-full flex items-center">
            <FadeUp>
              <div>
                <h2 className="leading-none">Hello, I&apos;m</h2>
                <h1 className="font-bold leading-tight text-black">
                  Filip Litwora
                </h1>
                <h2 className="leading-none">I make websites.</h2>
                <h3 className="font-semibold text-xl text-black">
                  I&apos;m a full stack web developer. I enjoy using using all
                  modern web technologies, especially React, Node.js and
                  TypeScript.
                </h3>
                <Link href="/contact">
                  <button className="bg-black px-5 py-3 mt-20 font-bold transition-transform transform hover:scale-105 mb-16 md:mb-0">
                    Contact Me
                  </button>
                </Link>
              </div>
            </FadeUp>
          </div>
        </main>
        <aside className="bg-black flex p-5 md:w-[50%] xl:w-[60%] h-full flex-col justify-center items-center">
          <Link href="/projects">
            <div className="bg-gray-100 transition-all max-w-[700px] p-5 hover:p-3 rounded-xl">
              <Image src={projects} />
            </div>
          </Link>
          <Link href="/projects">
            <button className="bg-white px-5 py-3 mt-20 font-bold transition-transform transform hover:scale-105">
              See My Projects
            </button>
          </Link>
        </aside>
      </div>
    </Layout>
  );
};

export default Home;
