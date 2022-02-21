import type { NextPage } from "next";
import Link from "next/link";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout className="flex w-full" title="Home" description="">
      <main className="bg-black w-full md:w-[60%] text-white">
        <div className="ml-10 mt-5 md:ml-20 md:mt-0 hero h-full flex items-center">
          <div>
            <h2 className="leading-none">Hello, I&apos;m</h2>
            <h1 className="font-bold leading-tight">Filip Litwora</h1>
            <h2 className="leading-none">A web developer.</h2>
            <h3 className="font-semibold text-xl">
              I&apos;m a full stack web developer with a passion for creating
              beautiful and useful user experiences.
            </h3>
            <Link href="/contact">
              <button className="bg-purple-500 px-5 py-3 mt-20 mb-40 font-bold transition-transform transform hover:scale-105">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </main>
      <aside className="bg-purple-500 hidden md:flex p-5 md:w-[40%] h-full flex-col justify-center items-center">
        <div className="bg-gray-100 p-5 rounded-xl">
          <img src="/projects.webp" />
        </div>
        <Link href="/projects">
          <button className="bg-black px-5 py-3 mt-20 mb-40 font-bold text-white transition-transform transform hover:scale-105">
            See my projects
          </button>
        </Link>
      </aside>
    </Layout>
  );
};

export default Home;
