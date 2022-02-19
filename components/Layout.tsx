import React, { ReactNode, useEffect, useState } from "react";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import Nav from "./Nav";
import Head from "next/head";

type Props = {
  children: ReactNode;
  title: string;
  description: string;
  className?: string;
};

const variants = {
  hidden: { opacity: 0, x: 100, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 100 },
};

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<{
    width: number | undefined;
    height: number | undefined;
  }>({
    width:
      typeof document === "undefined" ? undefined : document.body.clientWidth,
    height: typeof document === "undefined" ? undefined : window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: document.body.clientWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export const useIsMobile = (breakpoint = 1024) => {
  const windowSize = useWindowSize();
  if (!windowSize.width) return true;
  return windowSize?.width && windowSize.width < breakpoint;
};

const Layout = ({ children, title, description, className = "" }: Props) => {
  const isMobile = useIsMobile();

  return (
    <div>
      <Head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨‍💻</text></svg>"
        />
      </Head>
      <NextSeo
        title={title}
        description={description}
        openGraph={{ title, description }}
      />
      <div className="md:flex w-full">
        <Nav />
        {isMobile ? (
          <div className={className}>{children}</div>
        ) : (
          <>
            <motion.div
              initial="hidden"
              animate="enter"
              exit="exit"
              variants={variants}
              transition={{ type: "linear" }}
              className={className}
            >
              {children}
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
};

export default Layout;
