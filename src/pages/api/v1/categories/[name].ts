import dbConnect from "@server/db/db-connect";
import Category from "@server/schemas/categorySchema";
import { NextApiRequest, NextApiResponse } from "next";

export default async function categoryHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    await dbConnect();
    const { name } = req.query;
    const findCategory = await Category.findOne({ name: name });
    if (!findCategory) {
      return res.status(404).json({
        body: req.body,
        query: req.query,
        cookies: req.cookies,
        message: "category not found!",
      });
    }
    await Category.findOne({ name: name })
      .clone()
      .populate({
        path: "articles",
        model: "Article",
      })
      .then((cat) =>
        res.status(200).json({
          body: req.body,
          query: req.query,
          cookies: req.cookies,
          cat,
        })
      )
      .catch((error) =>
        res.status(400).json({
          body: req.body,
          query: req.query,
          cookies: req.cookies,
          message: error.message,
        })
      );
  }
}
