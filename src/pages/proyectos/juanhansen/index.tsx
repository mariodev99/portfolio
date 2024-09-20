import { Layout } from "@/components/layout";
import ContentProjectPage from "@/components/common/ContentProjectPage";
import { usePortfolioContext } from "@/context/dataContext";

export default function JuanHansenPage() {
  const { projectsFromContext } = usePortfolioContext();

  const project = projectsFromContext?.filter(
    (project) => project.title === "juanhansen"
  )[0];

  return (
    <>
      <Layout>
        <ContentProjectPage project={project} />
      </Layout>
    </>
  );
}
