import React from "react";
import { useParams } from 'react-router-dom';
import { ProductContext } from '../context/products';
import { useHistory } from 'react-router-dom';
import Loading from '../components/Loading';

export default function ProductDetails() {
  const { id } = useParams();
  const history = useHistory();
  const { products } = React.useContext(ProductContext);
  const product = products.find(item => item.id === parseInt(id));
  if (products.length === 0) {
    return <Loading />
  }
  return <h1>hello from product id : {product.id}</h1>;
}
