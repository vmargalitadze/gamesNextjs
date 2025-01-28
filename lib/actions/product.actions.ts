'use server'


import { convertToPlainObject } from "../utils"
import { LATEST_PRODUCT_LIMIT } from "../constants/index"
import { prisma } from "@/components/db/prisma"
export async function getLatestProducts() {
    const data = await prisma.product.findMany({
      take: LATEST_PRODUCT_LIMIT,
      orderBy: { createdAt: 'desc' },
    });
  
    return convertToPlainObject(data);
  }

export async function getSingleProduct(slug:string) {
    return await prisma.product.findFirst({
        where: { slug: slug },
      });
}