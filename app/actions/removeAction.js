"use server"

import { PrismaClient } from "@prisma/client"
import { withAccelerate } from '@prisma/extension-accelerate'
const prisma = new PrismaClient().$extends(withAccelerate());

export const removeStaff = async (id) => {
    try {
        const staffRemoved = await prisma.staffs.delete({
            where: {
                staffId: id
            },
            cacheStrategy: { ttl: 20 },
        });
        return staffRemoved;
    } catch (error) {
        return error;
    }
};

export const removeService = async (id) => {
    try {
        const serviceRemoved = await prisma.services.delete({
            where: {
                serviceId: id
            },
            cacheStrategy: { ttl: 10 },
        });
        return serviceRemoved;
    } catch (error) {
        return error;
    }
}

export const removeToken = async (id) => {
    try {
        const tokenRemoved = await prisma.tokens.delete({
            where: {
                tokenId: id
            },
            cacheStrategy: { ttl: 10 },
        });
        return tokenRemoved;
    } catch (error) {
        return error;
    }
}