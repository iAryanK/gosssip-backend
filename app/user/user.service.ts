import { prisma } from '../common/services/database.service'
import { IUser } from './user.dto'

export const createUser = async (data: IUser) => {
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
