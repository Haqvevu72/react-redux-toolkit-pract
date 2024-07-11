import React from "react";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";


const Product = () => {

  const dispatch = useDispatch(); 

  const [products, getProducts] = useState([]);
  
  useEffect(() => {
    // api
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => getProducts(result));
  }, []);

  // ~ Cart-a mehsul elave etmek ucun funksiya ..
  const addToCart = (product) => {
      // ~ Burada dispatch metodumuzu cagiriq ki metodu store-a aparsin state-i deyismeye ..
      dispatch(add(product))  // ~ add metodunun parametrinde verilen payload-dur ..
  }

  const cards = products.map((p) => {
    return (
      <div className="col-md-3" key={p.id} style={{ marginBottom: "30px" }}>
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
            <Button variant="primary" onClick={() => addToCart(p)}>Add to cart</Button>
          </Card.Footer>
        </Card>
      </div>
    );
  });

  return (
    <div>
      <h2>Product Dashboard</h2>
      <div className="row">{cards}</div>
    </div>
  );
};

export default Product;
