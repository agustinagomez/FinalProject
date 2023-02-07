import { Router } from "express"
import createComment from "../controller/comments/createComment";
import deleteComment from "../controller/comments/deleteComment";
import getByPostId from "../controller/comments/getByPostId";
import getByGenre from "../controller/filters/getByGenre";
import getByGenreWithAll from "../controller/filters/getByGenreWithAll";
import getByTime from "../controller/filters/getByTime";
import getPopular from "../controller/filters/getPopular";
import addFollower from "../controller/follows/addFollower";
import removeFollower from "../controller/follows/removeFollower";
import getGenres from "../controller/genres/getGenres";
import changeStatusLike from "../controller/likes/changeStatusLike";
import createLike from "../controller/likes/createLike";
import getLikesByPostandUserId from "../controller/likes/getLikesByPostandUserId";
import getLikesByPostId from "../controller/likes/getLikesByPostId";
import getLikesByUserId from "../controller/likes/getLikesByUserId";
import createNoti from "../controller/notifications/createNoti";
import getNotiByUser from "../controller/notifications/getNotiByUser";
import setNotiDisabled from "../controller/notifications/setNotiDisabled";
import setNotiWatched from "../controller/notifications/setNotiWatched";
import payment from "../controller/pay/payment";
import createPost from "../controller/posts/createPost";
import deletePost from "../controller/posts/deletePost";
import getPosts from "../controller/posts/getPost";
import getPostById from "../controller/posts/getPostById";
import updatePost from "../controller/posts/updatePost";
import createReport from "../controller/reports/createReport";
import getReports from "../controller/reports/getReports";
import createReview from "../controller/reviews/createReview";
import getReview from "../controller/reviews/getReview";
import changePlanUser from "../controller/users/changePlanUser";
import createUser from "../controller/users/createUser";
import deleteUser from "../controller/users/deleteUser";
import downToRegular from "../controller/users/downToRegular";
import getCountUserGraphs from "../controller/users/getCountUserGraphs";
import getUserById from "../controller/users/getUserByIdAdmin";
import getUserByIdGoogle from "../controller/users/getUserByIdGoogle";
import getUsers from "../controller/users/getUsers";
import restoreUser from "../controller/users/restoreUser";
import setUserGenres from "../controller/users/setUserGenres";
import updateBanUser from "../controller/users/updateBanUser";
import updateRoleUser from "../controller/users/updateRoleUser";
import updateUser from "../controller/users/updateUser";
import upToPremium from "../controller/users/upToPremium";


const router = Router();

router.get("/users", getUsers); //user
router.get("/users/:userId", getUserById); //user
router.get("/users/idgoogle/:idgoogle", getUserByIdGoogle); //user
router.get("/posts", getPosts);
router.get("/posts/:_id", getPostById);
router.get("/genres", getGenres);
router.get("/notifications/:_id", getNotiByUser);
router.get("/likes/users/:userId", getLikesByUserId);
router.get("/likes/posts/:postId", getLikesByPostId);
router.get("/likes/:postId/:userId", getLikesByPostandUserId);
router.get("/comments/:idPost", getByPostId);
router.get("/reviews", getReview);
router.get("/reports", getReports); //Only for admin!
router.get("/posts/order/popular", getPopular);
router.get("/users/data/graphs", getCountUserGraphs)
router.get("/posts/genres", getByGenre);
router.get("/posts/genres/with-all", getByGenreWithAll);


router.post("/posts/order", getByTime);
router.post("/posts/genres", getByGenre);
router.post("/users", createUser);
router.post("/posts", createPost);
router.post("/likes", createLike);
router.post("/comments", createComment);
router.post("/users/follow", addFollower);
router.post("/users/unfollow", removeFollower);
router.post('/notifications/create', createNoti);
router.post("/reviews", createReview);
router.post("/reports", createReport);
router.post("/posts/order/popular", getPopular);
router.post("/notifications/create", createNoti);
router.post("/create-checkout-session", payment);
router.post("/reviews", createReview);

router.delete("/users/:_id", deleteUser);
router.delete("/posts/:_id", deletePost);
router.delete("/comments/:_id", deleteComment);

router.put("/users/:_id", updateUser);
router.put("/posts/:_id", updatePost);
router.put("/restore/:_id", restoreUser);
router.put("/users/premium/:_id", upToPremium);
router.put("/users/regular/:_id", downToRegular);
router.put("/notifications/watched/:_id", setNotiWatched);
router.put("/notifications/disabled/:id", setNotiDisabled);
router.put("/likes", changeStatusLike);
router.put("/users/set/plan", changePlanUser);
router.put("/users/set/genres", setUserGenres);
router.put("/users/set/update-ban", updateBanUser);
router.put("/users/set/role", updateRoleUser);

export default router;