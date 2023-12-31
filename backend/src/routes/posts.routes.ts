import { Router } from "express";
const router: Router = Router();

import { deletePost, getPost, getPosts, getSearch, newPost, updatePost } from "../controllers/posts.controller";
import { TokenValidation } from "../libs/verifyToken";

router.get('/:id', getPost);
router.get('/', getPosts);
router.get('/search/:search', getSearch);

router.put('/update', TokenValidation, updatePost);
router.post('/new-post', TokenValidation, newPost);
router.delete('/delete/:id', TokenValidation, deletePost);


export default router;