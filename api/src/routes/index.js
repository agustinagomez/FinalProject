const { Router } = require("express");
const express = require('express');
const createUser = require("../Controller/Users/createUser.js");
const getByGenre = require("../Controller/Filters/getByGenre.js");
const createPost = require("../Controller/Posts/createPost.js");
const deleteUser = require("../Controller/Users/deleteUser.js");
const deletePost = require("../Controller/Posts/deletePost.js");
const deleteComment = require("../Controller/Comments/deleteComment.js");
const getUsers = require("../Controller/Users/getUsers.js");
const getPosts = require("../Controller/Posts/getPosts.js");
const createComment = require("../Controller/Comments/createComment.js");
const createLike = require("../Controller/Likes/createLike.js");
const getByTime = require("../Controller/Filters/getByTime.js");
const getUserById = require("../Controller/Users/getUserById.js");
const getGenres = require("../Controller/Genres/getGenres.js");
const updateUser = require("../Controller/Users/updateUser.js");
const updatePost = require("../Controller/Posts/updatePost.js");
const getUserByIdGoogle = require("../Controller/Users/getUserByIdGoogle.js");
const createNoti = require("../Controller/Notifications/createNoti.js");
const getNotiByUser = require("../Controller/Notifications/getNotiByUser");
const restoreUser = require("../Controller/Users/restoreUser.js");
const postWebhook = require("../Controller/webhook.js");
const payment = require("../Controller/payment.js");
const upToPremium = require("../Controller/Users/upToPremium.js");
const downToRegular = require("../Controller/Users/downToRegular.js");



// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
//se instancia a la clase, y devuelve un objeto de stripe, que tiene metodos para registrar un pago

const router = Router();

router.get("/users", getUsers);
router.get("/users/:userId", getUserById);
router.get("/users/idgoogle/:idgoogle", getUserByIdGoogle);
router.get("/posts", getPosts);
router.get("/posts/order/:order", getByTime);
router.get("/genres", getGenres);
router.get("/notifications/:userId", getNotiByUser);

router.post("/posts/genres", getByGenre);
router.post("/users", createUser);
router.post("/posts", createPost);
router.post("/likes", createLike);
router.post("/comments", createComment);
router.post("/posts/genres", getByGenre);

router.post('/notifications/create', createNoti);
router.post('/create-checkout-session', payment);
router.post('/webhook', express.raw({ type: 'application/json' }), postWebhook);


router.delete("/users/:id", deleteUser);
router.delete("/posts/:id", deletePost);
router.delete("/comments/:id", deleteComment);

router.put("/users/:id", updateUser);
router.put("/posts/:id", updatePost);
router.put("/restore/:id", restoreUser);
router.put("/users/premium/:id", upToPremium);
router.put("/users/regular/:id", downToRegular);



module.exports = router;
