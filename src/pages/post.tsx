import { Fragment } from "react"
import { articles } from "@components/dump-data/data";
import PostPage from "@components/post/PostPage";
import Head from "next/head"


export default function Post(){
    return (
    <Fragment>
    <Head>
    <title>{articles[0].title} | Syed Mahbub's Blog</title>
    </Head>
        <PostPage data={articles[0]} />
    </Fragment>
    )
}