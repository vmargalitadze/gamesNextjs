import React from 'react'
import { getLatestProducts } from '@/lib/actions/product.actions'
import ProductList from '@/components/shared/product/ProductList'
async function page() {
  const products = await getLatestProducts()
  
  return (
    <div>
    <ProductList data={ products} title='Newest Arrivals' limit={4} />

    </div>
  )
}

export default page