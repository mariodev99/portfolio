import ProjectItem from "@/components/common/ProjectItem";
import { Layout } from "@/components/layout";
import React from "react";
import AnimationWraperPage from "@/components/layout/AnimationWraperPage";
import { usePortfolioContext } from "@/context/dataContext";
import Head from "next/head";

export default function ProjectPage() {
  const { projectsFromContext } = usePortfolioContext();

  return (
    <AnimationWraperPage>
      <Head>
        <title>Projects / Mariodev </title>
      </Head>
      <Layout>
        <div className="py-32 md:py-20">
          <h1 className="text-[50px] md:text-[100px] lg:text-[200px] font-semibold">
            Projects
          </h1>
          <div className="mt-10 grid md:grid-cols-2 gap-10">
            {projectsFromContext.map((project, index) => (
              <ProjectItem key={project.title} {...project} />
            ))}
          </div>
        </div>
      </Layout>
    </AnimationWraperPage>
  );
}
