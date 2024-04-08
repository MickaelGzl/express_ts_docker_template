import { Request, Response } from "express";

export const callApi = (req: Request, res: Response) => {
  //Here goes all logical make by the endpoint
  //database call goes to the folder queries
  return res.json({ message: "Hello /api routes" });
};
