
"use client";

import React from "react";
import Head from "next/head";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ContainerBlock({ children, ...customMeta }) {
  const pathname = usePathname();

  const meta = {
    title: "Aboaba Akorede - Blockchain Developer, Frontend Engineer",
    description: `A citizen of the web3 metaverse`,
    image: "/Me2.jpg",
    type: "website",
    ...customMeta,
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://yourwebsite.com${pathname}`}
        />
        <link
          rel="canonical"
          href={`https://yourwebsite.com${pathname}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Aboaba Akorede" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tame_nation" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <main className="">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}