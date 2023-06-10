import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { add } from "./cartSlice";

const Product = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch()

  useEffect(() => {
    // Call api
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => setProducts(result));
  }, []);

  const addToCart = (product) => {
    //  dispatch an action
    dispatch(add(product))
  };

  const cards = products.map((product) => (
    <div key={product.id} className="col-md-3" style={{ marginBottom: "10px" }}>
      <Card style={{ width: "18rem" }} className="h-100 pt-4">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "130px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>Price : ${product.price}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ background: "white" }}>
          <Button onClick={() => addToCart(product)} variant="primary">
            Add to Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <h1>Product Dashboard</h1>
      <div className="row">{cards}</div>
    </>
  );
};

export default Product;
