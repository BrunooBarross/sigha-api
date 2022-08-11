import { Router } from "express";
import documentRouter from "./documentRouter.js";
import userRouter from "./userRouter.js";

const router = Router();

router.use(userRouter);
router.use(documentRouter);

export default router;