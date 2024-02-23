import ContentProjectPage from "@/components/common/ContentProjectPage";
import { Layout } from "@/components/layout";
import { usePortfolioContext } from "@/context/dataContext";
import React from "react";

export default function Pagina() {
  const { projectsFromContext } = usePortfolioContext();

  const project = projectsFromContext?.filter(
    (project) => project.title === "codeparty"
  )[0];

  return (
    <>
      <Layout>
        <ContentProjectPage project={project} />
      </Layout>
    </>
  );
}
