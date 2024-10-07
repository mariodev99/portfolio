import { Layout } from "@/components/layout";
import ContentProjectPage from "@/components/common/ContentProjectPage";
import { usePortfolioContext } from "@/context/dataContext";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";

interface Params extends ParsedUrlQuery {
  id: string;
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as Params;
  return { props: { id } };
};

export default function ProjectSinglePage({ id }: { id: string }) {
  const { projectsFromContext } = usePortfolioContext();

  const project = projectsFromContext?.filter(
    (project) => project.title === id
  )[0];

  return (
    <>
      <Layout>
        <ContentProjectPage project={project} />
      </Layout>
    </>
  );
}
