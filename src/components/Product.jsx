import { useState, useEffect } from "react"

const Product = () => {
  const [products, setProducts] = useState([])


  useEffect(() => {
    // Call api
    fetch('https://fakestoreapi.com/products')
    .then(data => data.json())
    .then(result => setProducts(result))
  }, [])

  console.log(products)

  return (
    <>

    <h1>Product</h1>
    </>
  )
}

export default Product