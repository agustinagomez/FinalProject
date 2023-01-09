import { Request, Response, Router } from "express";
import genres from "./Data";

const router = Router()

//ALL GENRES
router.get("/", (_req: Request, res: Response) => {

    try {

        return res.json(genres);

    } catch (error) {

        return res.status(500).send(error);
    }
})

export default router