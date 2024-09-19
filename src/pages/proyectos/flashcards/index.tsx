import ContentProjectPage from "@/components/common/ContentProjectPage";
import { Layout } from "@/components/layout";
import { usePortfolioContext } from "@/context/dataContext";

export default function FlashcardsPage() {
  const { projectsFromContext } = usePortfolioContext();

  // const project = projectsFromContext?.filter(
  //   (project) => project.title === "flashcards"
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
