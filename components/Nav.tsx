import Link from "next/link";
import { useRouter } from "next/router";

const L = ({ children, className = "", href, ...props }: any) => {
  const router = useRouter();

  const isCurrentPath = router.pathname.split("/")[1] === href.split("/")[1];

  return (
    <li className={`${className} ${isCurrentPath ? "font-bold" : ""}`}>
      <Link href={href} {...props}>
        {children}
      </Link>
    </li>
  );
};

const Nav = () => {
  return (
    <>
      <nav className="bg-purple-500 sticky top-0 w-full h-[64px] md:w-[64px] md:h-screen flex md:flex-col justify-between">
        <ul className="list-style-none p-0 mx-5 md:mx-8 md:mt-11 flex items-center md:justify-center">
          <L href="/">Home</L>
          <L href="/projects">Projects</L>
          <li>
            <a href="/resume.pdf" rel="noreferrer" target="_blank">
              Resume
            </a>
          </li>
          <L href="/contact">Contact</L>
        </ul>
        <div className="flex md:flex-col mb-2 mr-5 sm:mr-10 md:mr-0 md:mb-0 items-center md:justify-center">
          <a
            rel="noreferrer"
            href="https://github.com/filiplitwora"
            className="md:mb-4 mr-2 sm:mr-4 md:mr-0"
            target="_blank"
          >
            <svg
              className="w-8 h-8"
              viewBox="0 0 1024 1024"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49
11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                transform="scale(64)"
                fill="#FFFFFF"
              />
            </svg>
          </a>
          <a
            className="md:mb-8"
            rel="noreferrer"
            href="mailto:filiplitwora@protonmail.com"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
              />
            </svg>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Nav;
