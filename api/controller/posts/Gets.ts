import { Request, Response, Router } from "express";
import Posts from "../../models/Posts";

const router = Router()

//ALL POSTS
router.get("/", (_req: Request, res: Response) => {
    try {
        const allPosts = Posts.find()

        res.send(allPosts)
    } catch (err) {
        res.send(err)
    }
})

router.get("/:_id", async (req: Request, res: Response) => {

    const { _id } = req.params;

    try {

        const post = await Posts.find({ _id })

        return res.json(post);

    } catch (error) {

        return res.status(500).send(error);
    };
});
export default router