import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  // Create products
  const products = [
    {
      name: 'Lopasupa Premium Arabica',
      description: 'Kopi Arabika premium dari dataran tinggi dengan aroma yang kuat dan rasa yang halus',
      price: 75000,
      category: 'Arabica',
      stock: 50,
      rating: 5,
      imageUrl: '/product-1.png'
    },
    {
      name: 'Lopasupa Robusta Gold',
      description: 'Kopi Robusta pilihan dengan kandungan kafein tinggi dan rasa yang bold',
      price: 65000,
      category: 'Robusta',
      stock: 75,
      rating: 4,
      imageUrl: '/product-2.png'
    },
    {
      name: 'Lopasupa Espresso Blend',
      description: 'Blend sempurna Arabika dan Robusta untuk espresso yang kaya rasa',
      price: 85000,
      category: 'Blend',
      stock: 40,
      rating: 5,
      imageUrl: '/product-1.png'
    },
    {
      name: 'Lopasupa House Special',
      description: 'Racikan kopi spesial Lopasupa dengan resep rahasia yang unik',
      price: 95000,
      category: 'Special',
      stock: 30,
      rating: 5,
      imageUrl: '/product-2.png'
    },
    {
      name: 'Lopasupa Decaf Delight',
      description: 'Kopi tanpa kafein dengan rasa tetap nikmat dan aroma yang memikat',
      price: 80000,
      category: 'Decaf',
      stock: 25,
      rating: 4,
      imageUrl: '/product-1.png'
    },
    {
      name: 'Lopasupa Single Origin Toraja',
      description: 'Kopi Single Origin dari Toraja dengan karakteristik unik dan eksklusif',
      price: 120000,
      category: 'Single Origin',
      stock: 20,
      rating: 5,
      imageUrl: '/product-2.png'
    }
  ]

  for (const product of products) {
    const existingProduct = await prisma.product.findFirst({
      where: { name: product.name }
    })

    if (!existingProduct) {
      await prisma.product.create({
        data: product
      })
      console.log(`Created product: ${product.name}`)
    } else {
      // Update existing product with imageUrl
      await prisma.product.update({
        where: { id: existingProduct.id },
        data: { imageUrl: product.imageUrl, description: product.description }
      })
      console.log(`Updated product with image: ${product.name}`)
    }
  }

  console.log('Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
