import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const cartProducts = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    dispatch(remove(id))
  };

  const cards = cartProducts.map((p) => {
    return (
      <div className="col-md-3" key={p.id} style={{ margin: "20px 10px" }}>
        <Card
          key={p.id}
          className="h-100"
          style={{ width: "18rem", marginBottom: "1rem" }}
        >
          <div className="text-center">
            <Card.Img variant="top" src={p.image} style={{ width: "150px" }} />
          </div>
          <Card.Body>
            <Card.Title>{p.title}</Card.Title>
            <Card.Text>${p.price}</Card.Text>
          </Card.Body>

          <Card.Footer style={{ background: "white", border: "none" }}>
            <Button variant="danger" onClick={() => removeFromCart(p.id)}>
              Remove from cart
            </Button>
          </Card.Footer>
        </Card>
      </div>
    );
  });

  return <div className="row">{cards}</div>;
};

export default Cart;
