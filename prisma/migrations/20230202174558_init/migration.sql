-- CreateTable
CREATE TABLE "Welcome" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "message" VARCHAR(255) NOT NULL,

    CONSTRAINT "Welcome_pkey" PRIMARY KEY ("id")
);
