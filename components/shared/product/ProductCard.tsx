import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Price from './Price'
import { Product } from '@/types'
function ProductCard({product} : {product:Product} ) {
  return (
   <>
   <Card className='w-full max-w-sm' >
<CardHeader className='p-0 items-center gap-3'>
<Link href={`/product/${product.slug}`} > <Image src={product.images[0]} height={300} width={300} priority alt='image' /> </Link>
</CardHeader>
<CardContent >
  <div className="text-xs">

{product.developer}
  </div>
  <Link href={`/product/${product.slug}`} > <h2 className='text-sm font-medium' > {product.name} </h2> </Link>
  <div className="flex-between gap-4">
    <p> {product.rating} Stars </p>
    <Price value={Number(product.price)} />

  </div>
</CardContent>
   </Card>
   </>
  )
}

export default ProductCard