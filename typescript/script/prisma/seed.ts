import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

(async () => {
    await prisma.otherItem.createMany({
        data: [
            {id: 'ID', value: Math.random()}
        ]
    })
    await prisma.item.createMany({
        data: [
            /**
             * Correctly has relationship with its associated Item
             */
            {otherItemId: 'ID'},

            /**
             * Does not have an associated Item.
             */
            {otherItemId: 'id'}
        ]
    });
})()