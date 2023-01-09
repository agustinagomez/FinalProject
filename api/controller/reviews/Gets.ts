import { Request, Response, Router } from "express";
import Notifications from "../../models/Notifications";

const router = Router()

//ALL NOTIFICATIONS
router.get("/", async (req: Request, res: Response) => {
    try {
        const notifications = await Notifications.find()
        res.send(notifications)
    } catch (err) {
        res.send(err)
    }
})

export default router
