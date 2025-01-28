import { getSingleProduct } from '@/lib/actions/product.actions'
import { notFound } from 'next/navigation'
import React from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Price from '@/components/shared/product/Price'
import ProductImages from '@/components/shared/product/ProductImages'
const Detailpage = async(props: {
    params:Promise< {slug:string} >
}) => {
    const {slug} = await props.params
    const product = await getSingleProduct(slug);
    if (!product)  notFound()
  return (
    <>
   <section>
    <div className="grid grid-cols-1 md:grid-cols-5 ">
        <div className="col-span-2">
           <ProductImages images={product.images} />
        </div>

        <div className="col-span-2 p-5 ">
           <div className="flex flex-col gap-6">
            <p>
                {product.developer} {product.category}
            </p>
            <h1 className="h3-bold"> {product.name} </h1>
            <p> {product.rating} of {product.numReviews} Reviews </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center ">
                <Price value={Number(product.price)} className='w-24 rounded-full bg-green-100 text-green-700 px-5 py-2 ' />
            </div>
           </div>
           <div className="mt-10">
            <p className="font-semibold">Description</p>
            <p className=""> {product.description} </p>
           </div>
        </div>

<div className="">
    <Card>
        <CardContent className='p-4' >
            <div className="flex mb-2 justify-between ">
                <div className=""> Price </div>
                <Price value={Number(product.price)} className='w-24 rounded-full bg-green-100 text-green-700 px-5 py-2 ' />
            </div>
            <div className="flex-center">
                <Button className='w-full'>Add</Button>
            </div>
        </CardContent>
    </Card>
</div>
    </div>
   </section>
    </>
  )
}

export default Detailpage