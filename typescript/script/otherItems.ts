import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

(async () => {
  /**
   * This causes a panic:
   * thread 'tokio-runtime-worker' panicked at 'Expected parent IDs to be set when ordering by parent ID.', query-engine/core/src/interpreter/query_interpreters/inmemory_record_processor.rs:71:18
      note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
      /Users/chris/prisma-examples/typescript/script/node_modules/@prisma/client/runtime/index.js:38692
                throw new PrismaClientUnknownRequestError(message, this.prisma._clientVersion);
                      ^
      PrismaClientUnknownRequestError: 
      Invalid `prisma.otherItem.findMany()` invocation in
      /Users/chris/prisma-examples/typescript/script/script.ts:12:45

        9   }
        10 });
        11 
      → 12 const otherItems = await prisma.otherItem.findMany(
        Expected parent IDs to be set when ordering by parent ID.
          at cb (/Users/chris/prisma-examples/typescript/script/node_modules/@prisma/client/runtime/index.js:38692:17) {
        clientVersion: '3.7.0'
   */

  const otherItems = await prisma.otherItem.findMany({
    include: {
      item: true
    }
  })

  console.log({otherItems});
})();
