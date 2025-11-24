import Head from "next/head";
// import styles from "../styles/Home.module.css";
import "./globals.css";
import ContainerBlock from "@components/ContainerBlock";
import FavouriteProjects from "@components/FavouriteProjects";
import LatestCode from "@components/LatestCode";
import Hero from "@components/Hero";
import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";
import Skills from "@components/Skills";

async function getGitHubData() {
  console.log(process.env.GITHUB_AUTH_TOKEN);
  let token = process.env.GITHUB_AUTH_TOKEN;

  // Use your existing getLatestRepos function
  const repositories = await getLatestRepos(userData, token);
  return repositories || [];
}

export default async function Home() {
  const repositories = await getGitHubData();

  return (
    <>
      <Hero />
      <Skills />
      <FavouriteProjects />
      <LatestCode repositories={repositories} />
    </>
  );
}