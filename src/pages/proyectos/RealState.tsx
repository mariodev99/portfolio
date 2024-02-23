import { Layout } from "@/components/layout";
import React from "react";
import ContentProjectPage from "@/components/common/ContentProjectPage";
import { usePortfolioContext } from "@/context/dataContext";

export default function RealStatePage() {
  const { projectsFromContext } = usePortfolioContext();

  const project = projectsFromContext?.filter(
    (project) => project.title === "realstate"
  )[0];

  return (
    <>
      <Layout>
        <ContentProjectPage project={project} />
      </Layout>
    </>
  );
}
