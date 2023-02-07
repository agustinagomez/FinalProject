import { Request, Response } from "express";
import Notifications from "../../models/Notifications";

const getNotiByUser = async (req: Request, res: Response) => {
    const { _id } = req.params;

    try {
        const notifications = await Notifications.findOne({ _id });


        return res.json(notifications);

    } catch (error) {

        return res.status(500).send(error);
    };
};

export default getNotiByUser;