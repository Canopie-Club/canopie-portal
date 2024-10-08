import { PrismaClient } from '@canopie-club/prisma-client'
// TODO: Look at other crypto libraries
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const {email, password} = await readBody(event)

    const user = await prisma.user.findUnique({
        where: {
            email,
        }
    })

    if (!user) return {
        success: false,
        message: 'Username not found',
        user: null,
        session: null
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const passwordCorrect = await bcrypt.compare(password, user.password);
    console.log(hashedPassword, password, passwordCorrect)

    if (!passwordCorrect) return {
        success: false,
        message: 'Password incorrect',
        user: null,
        session: null
    }

    // Expires in 1 hour
    const expiresAt = new Date(Date.now() + 1 * 60 * 60 * 1000)

    const session = await prisma.userSession.create({
        data: {
            userId: user.id,
            expiresAt
        }
    })

    return {
        success: true,
        message: 'Got user',
        session,
        user
    };
})