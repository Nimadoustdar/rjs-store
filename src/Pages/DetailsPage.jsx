import styles from "./DetailsPage.module.css";

import { Link, useParams } from "react-router-dom";

import { useProductDetails } from "../context/ProductContext";

import Loader from "../components/Loader";

import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";

const DetailsPage = () => {
  const { id } = useParams();
  const productsDetails = useProductDetails(+id);
  if (!productsDetails) return <Loader />;
  const { image, title, description, category, price } = productsDetails;
  return (
    <div className={styles.container}>
      <img src={image} alt={title} />
      <div className={styles.information}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.category}>
          <SiOpenproject />
          {category}
        </p>
        <div>
          <span className={styles.price}>
            <IoMdPricetag />
            {price}$
          </span>
          <Link to="/products">
            <FaArrowLeft />
            <span>Back to shop</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
