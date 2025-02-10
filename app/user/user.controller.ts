import { Request, Response } from 'express'
import { createResponse } from '../common/helper/response.helper'
import asyncHandler from 'express-async-handler'
import * as userService from './user.service'

export const createUser = asyncHandler(async (req: Request, res: Response) => {
    const result = await userService.createUser(req.body)
    res.send(createResponse(result, 'User created successfully'))
})

export const getUserById = asyncHandler(async (req: Request, res: Response) => {
    const result = await userService.getUserById(req.params.id)
    res.send(createResponse(result))
})

export const getUserByEmail = asyncHandler(
    async (req: Request, res: Response) => {
        const result = await userService.getUserByEmail(req.params.email)
        res.send(createResponse(result))
    }
)
