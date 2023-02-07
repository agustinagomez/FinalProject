import { Request, Response } from "express"
import Notifications from "../../models/Notifications"

const getReview = async (_req: Request, res: Response) => {
    try {
        const notifications = await Notifications.find()
        return res.send(notifications)
    } catch (err) {
        return res.send(err)
    }
}
export default getReview