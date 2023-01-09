import { Request, Response, Router } from "express";
import Users from "../../models/Users";


const router = Router()

//FIND ONE USER
router.get("/:_id", async (req: Request, res: Response) => {
    const { _id } = req.params;
    try {
        const user = await Users.findOne({ _id })
        res.send(user)
    } catch (error) {

        return res.status(500).send(error);

    }
});

//FIND AND COUNT USERS BY BAN, PREMIUM, REGULAR
router.get("/data/graphs", async (_req: Request, res: Response) => {
    try {
        const bannedCount = await Users.count({ isBanned: true })

        const premiumCount = await Users.count({ plan: "Premium" })

        const regularCount = await Users.count({ plan: "Regular" })

        res.send({ bannedCount, premiumCount, regularCount })
    } catch (err) {
        console.log(err)
    }
})

//ALL USERS
router.get("/", async (_req: Request, res: Response) => {
    try {
        const users = await Users.find()
        res.send(users)
    } catch (err) {
        console.log(err)
    }
})

//GET USER BY IDGOOGLE
router.get("/idgoogle/:idgoogle", async (req: Request, res: Response) => {
    const { idgoogle } = req.params
    try {
        const users = await Users.find({ idgoogle })

        res.send(users)
    } catch (err) {
        console.log(err)
    }
})
export default router