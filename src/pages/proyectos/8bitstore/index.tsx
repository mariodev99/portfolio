import { Layout } from "@/components/layout";
import ContentProjectPage from "@/components/common/ContentProjectPage";
import { usePortfolioContext } from "@/context/dataContext";

export default function BitstorePage() {
  const { projectsFromContext } = usePortfolioContext();

  // const project = projectsFromContext?.filter(
  //   (project) => project.title === "8bitstore"
  // )[0];

  return (
    <>
      <Layout>
        {/* <ContentProjectPage project={project} /> */}
        <h1>hola</h1>
      </Layout>
    </>
  );
}
