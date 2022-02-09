import { Fragment } from "react";
import { articles } from "@components/dump-data/data";
import PostPage from "@components/post/PostPage";
import Head from "next/head";
import { NextPage } from "next";
import dbConnect from "@server/db/db-connect";
import Article from "@server/schemas/articleSchema";

const ArticlePage: NextPage = (props: any) => {
  return (
    <Fragment>
      <Head>
        <title>{props.data.title} | Syed Mahbub's Blog</title>
      </Head>
      <PostPage article={props.data} />
    </Fragment>
  );
}

export async function getServerSideProps(context: any) {
  await dbConnect();
  const { slug } = context.query;

  const findArticle = await Article.findOne({ slug: slug });
  const string = JSON.stringify(findArticle);
  const data = JSON.parse(string)
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
        data
    }
    ,
  };
}

export default ArticlePage;