import { Request, Response, Router } from "express";
import Notifications from "../../models/Notifications";
import Users from "../../models/Users";

const router = Router()

//GET ALL NOTIFICATIONS
router.get("/", async (req: Request, res: Response) => {

    const { title, content, userId, fromUser } = req.body;

    try {
        const notification = await Notifications.create({
            title,
            content,
            fromUser
        });

        const user = await Users.find({ _id: userId });

        return res.json(notification);

    } catch (err) {
        return res.status(500).send(err);
    }
})

//GET NOTIFICATIONS BY ID
router.get("/:_id", async (req: Request, res: Response) => {

    const { _id } = req.params;

    try {
        const notifications = await Notifications.find({ _id });


        return res.json(notifications);

    } catch (error) {

        return res.status(500).send(error);
    };
})


export default router
