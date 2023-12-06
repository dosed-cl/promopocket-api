/* eslint-disable prettier/prettier */
import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  const categories = [
    { name: 'deportes', displayName: 'Deportes y Wellness' },
    { name: 'entretencion', displayName: 'Entretención' },
    { name: 'viajes', displayName: 'Viajes' },
    { name: 'alimentos', displayName: 'Alimentos y bebidas' },
    { name: 'apps', displayName: 'Apps' },
    { name: 'hobbies', displayName: 'Hobbies' },
    { name: 'salud', displayName: 'Salud y Belleza' },
    { name: 'supermercado', displayName: 'Supermercado' },
    { name: 'transporte', displayName: 'Transporte' },
    { name: 'e-commerce', displayName: 'E-commerce' },
    { name: 'automotriz', displayName: 'Automotriz' },
    { name: 'hogar', displayName: 'Hogar' },
    { name: 'vestuario', displayName: 'Vestuario y Calzado' },
    { name: 'accesorios', displayName: 'Accesorios' },
    { name: 'educacion', displayName: 'Educación' },
    { name: 'kids', displayName: 'Kids' },
    { name: 'mascotas', displayName: 'Mascotas' },
    { name: 'tecno', displayName: 'Tecnología' },
    { name: 'otros', displayName: 'Otros' },
  ];

  const promises = categories.map(async ({ name, displayName }) => {
    return await prisma.category.upsert({
      where: { name },
      update: {},
      create: { name, displayName },
    })
  })

  const results = await Promise.all(promises);

  console.log({ results });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })

  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
