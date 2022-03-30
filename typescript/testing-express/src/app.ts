import { PrismaClient } from '@prisma/client'
import express from 'express'

export const prisma = new PrismaClient()
export const app = express()

app.use(express.json())

const shallow = () => prisma.one.findFirst()

const deep = () =>
  prisma.one.findFirst({
    include: {
      next: {
        include: {
          next: {
            include: {
              next: {
                include: {
                  next: {
                    include: {
                      next: {
                        include: {
                          next: {
                            include: {
                              next: {
                                include: {
                                  next: {
                                    include: {
                                      next: true,
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  })

app.get(`/test`, async (_req, res) => {
  const startShallow = Date.now()
  const shallowRes = await shallow()
  console.log('shallow', Date.now() - startShallow)

  const startDeep = Date.now()
  const deepRes = await deep()
  console.log('deep', Date.now() - startDeep)

  res.send({ shallowRes, deepRes })
})
