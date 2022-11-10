import "./product.css";
import { useRef, useEffect } from "react";

const Product = ({ img, link, title, code }) => {
  const ref = useRef(null);
  const style = {
    display: "flex",
    flexDisplay: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "90px",
    fontWeight: "Bold",
    color: "#59b256",
  };

  useEffect((e) => {
    const handleHover = (e) => {
      e.target.style.opacity = "0.8";
      e.target.innerText = title;
    };

    const handleOut = (e) => {
      e.target.style.opacity = "1";
    };

    const product = ref.current;
    product.addEventListener("mouseover", handleHover);
    product.addEventListener("mouseout", handleOut);
  });

  return (
    <div className="p" id="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="title-wrapper" style={style} ref={ref}>
          <div className="title">{title}</div>
        </div>
      </div>
      <div className="img">
        <a href={link} target="_blank" rel="noreferrer">
          <img src={img} alt={title} title={title} className="p-img" />
        </a>
        <a href={code} target="_blank" rel="noreferrer">
          <button className="btn">Code</button>
        </a>
      </div>
    </div>
  );
};

export default Product;
