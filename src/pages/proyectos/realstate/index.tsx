import { Layout } from "@/components/layout";
import ContentProjectPage from "@/components/common/ContentProjectPage";
import { usePortfolioContext } from "@/context/dataContext";

export default function RealStatePage() {
  const { projectsFromContext } = usePortfolioContext();

  // const project = projectsFromContext?.filter(
  //   (project) => project.title === "realstate"
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
