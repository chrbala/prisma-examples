import { PrismaClient } from '@prisma/client'
import { inspect } from 'util';

const prisma = new PrismaClient();

(async () => {
  /**
   * Only the case sensitive ID match joins with the OtherItem table. The other is null.
   */
  const items = await prisma.item.findMany({
    include: {
      otherItem: true
    }
  });

  /**
   * Querying raw correctly joins both items.
   */
  const rawResult = await prisma.$queryRaw`SELECT * FROM Item INNER JOIN OtherItem ON Item.otherItemId = OtherItem.id`;

  console.log(inspect({items, rawResult}, {depth: null, colors: true}));
})();
