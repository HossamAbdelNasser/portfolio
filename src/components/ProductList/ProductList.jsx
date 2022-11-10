import "./productList.css";
import Product from "../Product/Product";
import { products } from "../../data";

import React from "react";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Projects</h1>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product
            key={item.id}
            img={item.img}
            link={item.link}
            title={item.title}
            code={item.code}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
