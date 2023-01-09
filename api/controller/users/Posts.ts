import { Request, Response, Router } from "express";
import Users from "../../models/Users";
import { bcryptFunction } from "../../utils/userCreate";

const router = Router()


//CREATE USER
router.post("/create", async (req: Request, res: Response) => {
    const { name, role, plan, email, password, username, avatar, banner, idgoogle } =
        req.body;
    if (!name || !role || !plan || !email || !password || !username || !avatar || !banner || !idgoogle) return res.send("Empty Body")
    try {

        const pass = bcryptFunction(password)
        let user = await Users.create({
            name,
            role,
            plan,
            email,
            password: pass,
            username,
            avatar,
            banner,
            idgoogle
        });



        return res.json(user);

    } catch (error) {

        return res.status(500).send(error);
    }
});



export default router;
