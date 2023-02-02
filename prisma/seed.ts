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

  let welcomes = await prisma.welcome.findFirst();
  if(!welcomes) {
    await prisma.welcome.createMany({
      data:[
        {
          title:"Bem vindo ao GottaFeeling, venha desabafar com a gente",
          message: "GottaFeeling é um site onde as pessoas podem se expressar e falar o que estão sentindo"
        },
        {
          title:"Como está se sentindo hoje ?",
          message: "Não precisa se preocupar, voce pode conversar de forma anônima. Venha desabafar."
        },
        {
          title:"Que tal compartilhar algo interessante ?",
          message: "GottaFeeling também foi feito para compartilhar histórias engraçadas, bons momentos e coisas boa que estão acontecendo na sua vida."
        }
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

