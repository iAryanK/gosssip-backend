import { Request, Response } from "express";
import { createResponse } from "../common/helper/response.helper";
import asyncHandler from "express-async-handler";
// import * as userService from "./user.service";

export const getAllUser = asyncHandler(async (req: Request, res: Response) => {
  //   const result = await userService.getAllUser();
  //   res.send(createResponse(result));
});
