import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Créer & inspirer</h1>
        <p className="pl-desc">
           c'est un portfolio créatif lorem ipsuim alors vite.
           De belles maisons, de superbes styles de portefeuille et bien plus encore vous attendent
           à l'intérieur.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          //  console.log(item.img)
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
