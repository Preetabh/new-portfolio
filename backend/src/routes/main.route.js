import express from 'express';


const router =express.Router();
import {postMessage} from "../controllers/main.controllers.js"

router.post("/",postMessage)
export default router;
