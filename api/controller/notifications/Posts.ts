
import { Request, Response, Router } from "express";
import Notifications from "../../models/Notifications";
const router = Router()

//CREATE POST
router.post("/create", async (req: Request, res: Response) => {

    const { title, content, userId, fromUser } = req.body;

    try {
        const notification = await Notifications.create({
            title,
            content,
            fromUser
        });


       /*  const user = await Users.findByPk(userId);
        await notification.setUser(user) */;

        return res.json(notification);

    } catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
})

export default router