import React, { ReactNode } from "react";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import Nav from "./Nav";

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

const Layout = ({
  children,
  title,
  description,
  className = "",
}: Props): JSX.Element => (
  <div>
    <NextSeo
      title={title}
      description={description}
      openGraph={{ title, description }}
    />
    <div className="md:flex w-full">
      <Nav />
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
    </div>
  </div>
);

export default Layout;
