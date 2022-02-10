import dbConnect from "@server/db/db-connect";
import Category from "@server/schemas/categorySchema";
import { engCategories, categories } from "@components/post/post-constants";
import { NextApiRequest, NextApiResponse } from "next";

export default async function categoryHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    await dbConnect();
    const { name } = req.query;
    const indexOfName = engCategories.indexOf(name as string);
    const findCategory = await Category.findOne({
      name: categories[indexOfName],
    });
    if (!findCategory) {
      return res.status(404).json({
        body: req.body,
        query: req.query,
        cookies: req.cookies,
        message: "category not found!",
      });
    }
    const getArticles = await Category.findOne({
      name: categories[indexOfName],
    }).populate({path: "articleIds", model:"Article"})
    if (getArticles) {
      return res.status(200).json({
        body: req.body,
        query: req.query,
        cookies: req.cookies,
        getArticles,
      });
    }

    res.status(400).json({
      body: req.body,
      query: req.query,
      cookies: req.cookies,
      message: "error ocurred",
    });
  }
}
