import { Request, Response } from 'express'
import { createResponse } from '../common/helper/response.helper'
import asyncHandler from 'express-async-handler'
import * as userService from './user.service'
import passport from 'passport'
import { IUser } from './user.dto'
import { createUserTokens } from '../common/services/passport-jwt.service'

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

export const login = asyncHandler(async (req: Request, res: Response) => {
    passport.authenticate(
        'login',
        (
            err: { status: any; message: any },
            user: Omit<IUser, 'password'>,
            info: { message: any }
        ) => {
            if (err)
                return res
                    .status(err.status || 500)
                    .json({ message: err.message })

            const tokens = createUserTokens(user)

            res.status(200).json({ message: info?.message, user, tokens })
        }
    )(req, res)
})
