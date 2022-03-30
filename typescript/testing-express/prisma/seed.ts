import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const input: Prisma.OneCreateInput[] = [
  {
    next: {
      create: {
        next: {
          create: {
            next: {
              create: {
                next: {
                  create: {
                    next: {
                      create: {
                        next: {
                          create: {
                            next: {
                              create: {
                                next: {
                                  create: {
                                    next: {
                                      create: {
                                        value: 'Hello world!'
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  },
]

async function main() {
  console.log(`Start seeding ...`)
  for (const data of input) {
    const item = await prisma.one.create({
      data,
    })
    console.log(`Created item with id: ${item.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
