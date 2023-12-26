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
    {
      key: 'santander',
      name: 'Banco Santander',
      url: 'https://banco.santander.cl/beneficios',
      logo: 'https://banco.santander.cl/uploads/000/003/697/9c2347b3-ca36-4f53-9f65-5cd6bdabf0d2/original/logo_santander_new.svg',
    },
    {
      key: 'bancochile',
      name: 'Banco de Chile',
      url: 'https://portales.bancochile.cl/personas/beneficios',
      logo: 'https://portales.bancochile.cl/uploads/000/035/565/2ca8e2c5-606c-47f4-80ef-03bec528775d/original/bch-inverse.svg',
    },
    {
      key: 'bci',
      name: 'Banco BCI',
      url: 'https://www.bci.cl/beneficios',
      logo: 'https://cdn3.bci.cl/uploads/e682d72b-13b1-49a3-93ce-20f6252e1d17/original/logo_bci_negro.svg',
    },
    {
      key: 'dunkin',
      name: 'Dunkin\'',
      url: 'https://dunkin.cl',
      logo: 'https://dunkin.cl/wp-content/uploads/2022/03/Logo-Dunkin-Chile-2023.png',
      alias: ['dunkin donuts'],
    },
    {
      key: 'copec',
      name: 'COPEC',
      url: 'https://ww2.copec.cl/personas',
      logo: 'https://d33d0wsrjjxvsf.cloudfront.net/uploads/d5c1aec2-afa1-44b0-b378-44e41c1005fa/original/logo-copec-2023.svg',
    },
    {
      key: 'cinepolis',
      name: 'Cinepolis',
      url: 'https://cinepolischile.cl',
      logo: 'https://static.cinepolis.com/img/lg-cinepolis-new.png',
      alias: ['hoyts', 'cine hoyts'],
    },

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
