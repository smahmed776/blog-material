import dbConnect from "@server/db/db-connect";
import Article from "@server/schemas/articleSchema";
import Category from "@server/schemas/categorySchema"

export default async function newArticle(req, res){
    await dbConnect()
    if(req.method === 'POST'){
        const {
           title, eng_title, author, translator, markdown, image, tags, cat, 
        } = req.body;
        if(title && eng_title && author && markdown && tags && cat ){
            const createNewArticle = new Article({
                title,
                slug_title: eng_title,
                markdown,
                author,
                translator: translator ? translator : null,
                image: image && image,
                tags,
                cat
            })

            await createNewArticle.save(async function(err, doc){
                if(err){
                   return res.status(400).json({message: err.message})
                } else if(!doc){
                    return res.status(400).json({message: "failed to save"})
                }
                const findCategory = await Category.findOne({name: cat[0]});
                if(!findCategory){
                    const createCategory = new Category({
                        name: cat[0],
                        articles: [doc._id]
                    })
                    await createCategory.save();
                } else {
                    await Category.findOneAndUpdate(
                        {name: cat[0]},
                        {
                            $push : {
                                "articles": doc._id
                            }
                        },
                        {
                            new: true
                        }
                    )
                }
                res.status(201).json({message: "article created successfully!", redirect: doc.slug,})
                res.end();
            })
        } else {
            res.status(403).json({message: "Information missing!"})
        }
    }
}