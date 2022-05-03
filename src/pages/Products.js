import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to={"/products/Toyota/Camry"}>A Car</Link>
        </li>
        <li>
          <Link to={"/products/Toshiba/T55UHD"}>A Television Set</Link>
        </li>
        <li>
          <Link to={"/products/Mitsubishi/MX512"}>A Fridge</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
