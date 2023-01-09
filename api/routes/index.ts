import "dotenv/config";
import express from "express";
import cors from "cors";
import userPosts from "../controller/users/Posts"
import userGets from "../controller/users/Gets"
import genresGet from "../controller/genres/Gets";
import postsPost from "../controller/posts/Post"
import getPost from "../controller/posts/Gets"
import reviewsGet from "../controller/reviews/Gets"
import notificationsGet from "../controller/notifications/Gets";
const app = express();

app.use(cors());
app.use(express.json());

app.use("/genres", genresGet)

app.use("/post", postsPost)
app.use("/posts", getPost)

app.use("/users", userGets)
app.use("/users", userPosts)

app.use("/reviews", reviewsGet)

app.use("/notifications", notificationsGet)

export default app;