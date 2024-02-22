import { SectionTitle } from "@/components/common/SectionTitle";
import { Layout } from "@/components/layout";
import React, { useState } from "react";
import { projectsList } from "@/components/sections/HomeProjects";
import Nav from "@/components/layout/Nav";
import ContentProjectPage from "@/components/common/ContentProjectPage";
import { usePortfolioContext } from "@/context/dataContext";

export default function ChokersPage() {
  const { projectsFromContext } = usePortfolioContext();

  const project = projectsFromContext.filter(
    (project) => project.title === "mmchokers"
  )[0];

  return (
    <>
      <Layout>
        <ContentProjectPage project={project} />
      </Layout>
    </>
  );
}
