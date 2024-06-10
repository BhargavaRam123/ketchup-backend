import express from "express";
import { decodebody } from "../controllers/decodebody.js";
const router = express.Router();
router.post("/decode", decodebody);
export default router;
