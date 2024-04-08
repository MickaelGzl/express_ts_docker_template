import { Router } from "express";
import { callApi } from "../../controllers/apiController";

/**
 * Declare each routes of the api
 * logical functions goes to controllers
 * Essentially 1 router and 1 controller for each ressources
 */

export const router = Router();

router.get("/", callApi);
