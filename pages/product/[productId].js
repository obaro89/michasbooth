import { useRouter } from "next/router";
import Viewproduct from "../../components/Viewproduct";

const Product = () => {
  const router = useRouter();
  const { productId } = router.query;

  return <Viewproduct productId={productId} />;
};

export default Product;
