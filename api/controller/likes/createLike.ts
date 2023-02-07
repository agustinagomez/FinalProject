import { Request, Response } from "express"
import Likes from "../../models/Likes";
import Users from "../../models/Users";

const createLike = async (req: Request, res: Response) => {
    const { idPost, idUser } = req.body;

    try {
        const newLike = await Likes.create({});

        const user = await Users.findById({ _id: idUser });

        //const post = await Posts.findByPk(idPost);

        return res.json(newLike);

    } catch (error) {

        return res.json(error);
    }
}

export default createLike