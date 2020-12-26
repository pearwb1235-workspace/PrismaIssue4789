const { PrismaClient } = require("@prisma/client");

const client = new PrismaClient({ log: ["query", "info"] });

client.user
    .findFirst()
    .then(() => {})
    .catch((e) => {
        setTimeout(() => client.$disconnect(), 3000);
        throw e;
    });
