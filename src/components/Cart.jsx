import { useSelector, useDispatch } from "react-redux"
import { Card } from "react-bootstrap"
import { Button } from "react-bootstrap"
import { remove } from "./cartSlice"

const Cart = () => {
  const products = useSelector(state => state.cart)
  const dispatch = useDispatch()
  

  const removeFromCart = (id) => {
    // dispatch remove action
    dispatch(remove(id))
  }

  const cards = products.map((product) => (
    <div key={product.id} className="col-md-12" style={{ marginBottom: "10px" }}>
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
        <Button onClick={() => removeFromCart(product.id)} variant="danger">
            Remove Item
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ))

  return (
    <>
    <div className="row">
      {cards}
    </div>
    </>
  )
}

export default Cart