import { Router } from "express";
import { router as apiRoute } from "./api/apiRoute";

/**
 * Here the declaration of the routes that can be reached by frontSide
 * router.use('/api') will be use for each routes that start with /api
 */
export const router = Router();

router.use("/api", apiRoute);

router.get("/ping", (req, res) => {
  res.send("pong");
});

router.use("*", (req, res) => {
  res.status(404).json({ message: "no route corresponding" });
});
