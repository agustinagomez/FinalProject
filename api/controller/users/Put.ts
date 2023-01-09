import { Request, Response, Router } from "express";
import Users from "../../models/Users";

const router = Router()

router.put("/set/genres", async (req, res) => {

    const { id, genres } = req.body;

    try {

        const user = await Users.findOne(id);

        console.log(user)
        return res.json(user);

    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});


export default router
