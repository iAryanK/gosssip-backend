import bcrypt from 'bcryptjs'
import { prisma } from '../common/services/database.service'
import { IUser } from './user.dto'

export const createUser = async (data: IUser) => {
    // encrypt password with bcrypt
    const saltRounds = 10
    const password = data.password
    const hash = await bcrypt.hash(password, saltRounds)
    data.password = hash

    const result = prisma.user.create({
        data,
    })
    return result
}

export const getUserByEmail = async (email: string) => {
    const result = prisma.user.findFirst({
        where: {
            email,
        },
    })

    return result
}

export const getUserById = async (id: string) => {
    const result = prisma.user.findUnique({
        where: {
            id,
        },
    })
    return result
}
