import styles from "./CheckoutPage.module.css";

import { useCart } from "../context/CartContext";

import { useNavigate } from "react-router-dom";

import BasketCart from "../components/BasketCart";
import BasketSideBar from "../components/BasketSideBar";

const CheckoutPage = () => {
  const [state, dispatch] = useCart();

  const clickHandler = (type, payload) => {
    dispatch({ type, payload });
  };
  const navigate = useNavigate();

  if (!state.itemsCounter) {
    return (
      <div className={styles.container}>
        <p>Empty Cart</p>
        <button onClick={() => navigate("/products")}>Back To Shop</button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <BasketSideBar state={state} clickHandler={clickHandler} />
      <div className={styles.products}>
        {state.selectedItems.map((product) => (
          <BasketCart
            key={product.id}
            data={product}
            clickHandler={clickHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default CheckoutPage;
