import { Request, Response } from "express";
import Posts from "../../models/Posts";
import Users from "../../models/Users";


const createPost = async (req: Request, res: Response) => {
    const { description, title, content, idUser, genres, type, cover, idShared } =
        req.body;
    if (!description || !title || !content || !idUser || !genres || !type || !cover || !idShared) return res.send("Empty body")
    try {
        const arrGenres = Object.values(genres)
        const post = await Posts.create({
            description,
            title,
            content,
            type,
            cover,
            idShared,
            genres: arrGenres
        });

        const user = await Users.find({ _id: idUser });



        return res.json(post);
    } catch (err) {
        return res.status(500).send(err);
    }
}

export default createPost;