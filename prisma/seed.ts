/* eslint-disable prettier/prettier */
import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function loadCategories() {
  const categories = [
    { key: 'sports', name: 'Deportes y Wellness' },
    { key: 'clothing', name: 'Vestuario y Calzado' },
    { key: 'education', name: 'Educación' },
    { key: 'health', name: 'Salud y Belleza' },
    { key: 'apps', name: 'Apps' },
    { key: 'transport', name: 'Transporte' },
    { key: 'cars', name: 'Automotriz' },
    { key: 'entertaiment', name: 'Entretención' },
    { key: 'groceries', name: 'Supermercado' },
    { key: 'kids', name: 'Kids' },
    { key: 'tech', name: 'Tecnología' },
    { key: 'pets', name: 'Mascotas' },
    { key: 'travels', name: 'Viajes' },
    { key: 'home', name: 'Hogar' },
    { key: 'ecommerce', name: 'E-commerce' },
    { key: 'food', name: 'Alimentos y bebidas' },
  ];

  const promises = categories.map(async ({ key, name }) => {
    return await prisma.category.upsert({
      where: { key },
      update: {},
      create: { key, name },
    })
  });
  const results = await Promise.all(promises);

  console.log({ categories: results });
}

async function loadBrands() {
  const brands = [
    { key: 'sports', name: 'Deportes y Wellness' },
  ];

  const promises = brands.map(async (attrs) => {
    return await prisma.brand.upsert({
      where: { key: attrs.key },
      update: {},
      create: { ...attrs },
    })
  });
  const results = await Promise.all(promises);

  console.log({ brands: results });
}

async function main() {
  await loadCategories();
  await loadBrands();
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
