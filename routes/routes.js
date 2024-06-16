import express from "express";
import { decodebody } from "../controllers/decodebody.js";
import { encodebody } from "../controllers/encodebody.js";
const router = express.Router();
router.post("/decode", decodebody);
router.post('/encode',encodebody);
export default router;
