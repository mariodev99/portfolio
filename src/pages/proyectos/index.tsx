import ProjectItem from "@/components/common/ProjectItem";
import { Layout } from "@/components/layout";
import React from "react";
import AnimationWraperPage from "@/components/layout/AnimationWraperPage";
import { usePortfolioContext } from "@/context/dataContext";

export default function ProjectPage() {
  const { projectsFromContext } = usePortfolioContext();

  return (
    <AnimationWraperPage>
      <Layout>
        <div className="py-32 md:py-20">
          <h1 className="text-[10vw] font-semibold">Proyectos</h1>
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
