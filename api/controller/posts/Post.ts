import { Request, Response, Router } from "express";
import Genres from "../../models/Genres";
import Posts from "../../models/Posts";
import Users from "../../models/Users";

const router = Router()

//POST ONE POST 
router.post("/", async (req: Request, res: Response) => {
    const { description, title, content, idUser, genres, type, cover, idShared } =
        req.body;
    if (!description || !title || !content || !idUser || !genres || !type || !cover || !idShared) return res.send("Empty body")
    try {
        console.log(req.body)
        const arrGenres = await Genres.find()
        const post = await Posts.create({
            description,
            title,
            content,
            type,
            cover,
            idShared,
        });

        const user = await Users.find({ id: idUser });



        return res.json(post);
    } catch (err) {
        return res.status(500).send(err);
    }
})

export default router