import type { NextPage } from "next";
import Nav from "../components/Nav";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex w-full">
        <Nav />
        <main className="bg-black text-white">
          <div className="mt-20 ml-20 hero">
            <h2 className="leading-none">Hello, I'm</h2>
            <h1 className="font-bold leading-tight">Filip Litwora</h1>
            <h2 className="leading-none">A web developer.</h2>
            <h3 className="font-semibold text-lg">
              I'm a full stack web developer with a passion for creating
              beautiful and useful user experiences.
            </h3>

            <button className="bg-purple-500 px-5 py-3 mt-20 font-bold transition-all hover:px-6 hover:py-4">
              Contact Me
            </button>
          </div>
        </main>
        <aside className="bg-purple-500">a</aside>
      </div>
    </>
  );
};

export default Home;
