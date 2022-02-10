import dbConnect from "@server/db/db-connect";
import Article from "@server/schemas/articleSchema";
import Category from "@server/schemas/categorySchema";
import { NextApiRequest, NextApiResponse } from "next";

export default async function newArticle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();
  if (req.method === "POST") {
    const { title, eng_title, author, translator, markdown, image, tags, cat } =
      req.body;
    if (title && eng_title && author && markdown && tags && cat) {
      const createNewArticle = new Article({
        title,
        slug_title: eng_title,
        markdown,
        author,
        translator: translator ? translator : null,
        image: image && image,
        tags,
        cat,
      });

      await createNewArticle.save(async function (err: any, doc: any) {
        if (err) {
          return res.status(400).json({
            body: req.body,
            query: req.query,
            cookies: req.cookies,
            message: err.message,
          });
        } else if (!doc) {
          return res.status(400).json({
            body: req.body,
            query: req.query,
            cookies: req.cookies,
            message: "failed to save",
          });
        }
        const findCategory = await Category.findOne({ name: cat[0] });
        if (!findCategory) {
          const createCategory = new Category({
            name: cat[0],
            articleIds: [doc._id],
          });
          await createCategory.save();
        } else {
          await Category.findOneAndUpdate(
            { name: cat[0] },
            {
              $push: {
                articleIds: doc._id,
              },
            },
            {
              new: true,
            }
          );
        }
        res.status(201).json({
          body: req.body,
          query: req.query,
          cookies: req.cookies,
          message: "article created successfully!",
          redirect: doc.slug,
        });
        res.end();
      });
    } else {
      res
        .status(403)
        .json({
          body: req.body,
          query: req.query,
          cookies: req.cookies,
          message: "Information missing!",
        });
    }
  }
}
