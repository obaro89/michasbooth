import { useRouter } from "next/router";
import { useEffect } from "react";
import Viewproduct from "../../components/Viewproduct";

export const getServerSideProps = (context) => {
  const productId = context.params.productId;
  return {
    props: { productId },
  };
};

const Product = ({ productId }) => {
  return <Viewproduct productId={productId} />;
};

export default Product;
