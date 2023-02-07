import { Request, Response } from "express"
import Users from "../../models/Users"

const getUserByIdGoogle = async (req: Request, res: Response) => {
    const { idgoogle } = req.params
    try {
        const users = await Users.findOne({ idgoogle })

        return res.send(users)
    } catch (err) {
        return console.log(err)
    }
}
export default getUserByIdGoogle