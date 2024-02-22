import { SectionTitle } from "@/components/common/SectionTitle";
import { Layout } from "@/components/layout";
import React, { useState } from "react";
import Nav from "@/components/layout/Nav";
import ContentProjectPage from "@/components/common/ContentProjectPage";
import { usePortfolioContext } from "@/context/dataContext";

export default function BitstorePage() {
  const { projectsFromContext } = usePortfolioContext();

  const project = projectsFromContext.filter(
    (project) => project.title === "8bitstore"
  )[0];

  return (
    <>
      <Layout>
        <ContentProjectPage project={project} />
      </Layout>
    </>
  );
}
