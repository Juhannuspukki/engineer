import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";

// @ts-ignore
const Layout = ({ children }) => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  return (
    <>
      <Head>
        <title>FTL Tools</title>
      </Head>
      <header>
        <button
          aria-label={"Open Main Menu"}
          className={"hamburger"}
          onClick={() => setMenuIsOpen(!menuIsOpen)}
        >
          <img src={"/menu.svg"} alt={"Menu Icon"} className={"Menu Icon"} />
        </button>
      </header>
      <aside className={`${menuIsOpen && "visible"}`}>
        <a
          href={"https://ftl-industries.now.sh"}
          aria-label={"Go to FTL Industries website"}
        >
          <img
            src={"/logo.svg"}
            alt={"FTL Industries Logo"}
            className={`logo`}
          />
        </a>
        <nav>
          <Link href={"/"}>Front Page</Link>
          <hr />
          <Link href={"/research-calculator"}>Research Calculator</Link>
          <hr />
          <Link href={"/reverse-engineering-roi"}>Research ROI</Link>
          <Link href={"/blueprint-finder"}>Blueprint Finder</Link>
          <Link href={"/trade-finder"}>Trade Finder</Link>
        </nav>
      </aside>
      <main>{children}</main>
    </>
  );
};

export default Layout;
