import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


async function main() {
  let gender = await prisma.gender.findFirst();
  if(!gender) {
    await prisma.gender.createMany({
      data:[ 
        {
          name:"Masculino"
        },
        {
          name:"Feminino"
        },        
        {
          name:"Sem Gênero"
        },        
        {
          name:"Prefiro não dizer"
        },
      ]
    })
  }
};

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
})
.finally(async () =>{
  await prisma.$disconnect();
})

