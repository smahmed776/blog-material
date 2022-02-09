import type { NextPage } from 'next'
import { Fragment } from "react";
import Head from 'next/head'
import Image from 'next/image'
import Typography from "@mui/material/Typography"
import CategoryPage from '@components/category-page/categorypage.tsx'
import dbConnect from "@server/db/db-connect";
import Article from "@server/schemas/articleSchema";
import Category from "@server/schemas/categorySchema";
import {engCategories, categories} from "@components/post/post-constants";

const CategoryPageHandler: NextPage = (props) => {
  
  return (
    <div>
      <Head>
        <title>{props.data.name} | Syed Mahbub's Blog</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

    <CategoryPage articles={props.data.articles} data={props.data} />
    </div>
  )
}



export async function getServerSideProps(context: any) {
  await dbConnect();
  const { name } = context.query;
  const indexOfName = engCategories.indexOf(name);

  const findCategory = await Category.findOne({ name: categories[indexOfName] });
  if(!findCategory){
    return {
      notFound: true,
    }
  }
  const findArticles = await Category.findOne({name:categories[indexOfName]}).populate({
    path: "articles", model: "Article"
  })
  const string = JSON.stringify(findArticles);
  const data = JSON.parse(string)

  return {
    props: {
        data
    }
    ,
  };
}

export default CategoryPageHandler;