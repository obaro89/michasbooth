const { uuid } = require("uuidv4");
import img1 from "../public/img/1.jpg";
import img2 from "../public/img/2.jpg";
import img3 from "../public/img/3.jpg";
import img4 from "../public/img/4.jpg";
// import img5 from "../public/img/5.jpg";
// import img6 from "../public/img/6.jpg";
// import img7 from "../public/img/7.jpg";

export const cartData = [
  {
    name: "Relaxer",
    id: "e770ad36-d1a9-4685-becd-c52f4db3ae5c",
    quantity: 1,
    discount: 5,
    amount: 35,
    quantityInStock: 4,
    image: img1.src,
    maxQty: false,
  },
];

export const productsData = [
  {
    image: img1.src,
    name: "Relaxer",
    description: "This product is a good product",
    brand: "@bkristastucchio",
    id: "e770ad36-d1a9-4685-becd-c52f4db3ae5c",
    quantityInStock: 4,
    rating: 4,
    category: "Hair Accessories",
    numReviews: 12,
    video: "https://youtu.be/JyUEgH5T-jo",
    discount: 5,
    price: 35,
  },
  {
    image: img2.src,
    name: "Curly Human Hair",
    brand: "rollelflex_graphy726",
    id: "e770ad36-d1a9-4685-becd-c52f4db3ae5e",
    description: "This product is a good product",
    quantityInStock: 5,
    rating: 4,
    category: "Hair",
    numReviews: 2,
    video: "https://www.youtube.com/embed/HqUZgLUqi1s",
    discount: 5,
    price: 20,
  },
  {
    image: img3.src,
    name: "Air Conditioner",
    brand: "helloimnik",
    id: "e770ad36-d1a9-4685-becd-c52f4db3ae3e",
    description: "This product is a good product",
    quantityInStock: 3,
    rating: 3,
    category: "Hair Treatment",
    numReviews: 9,
    video: "https://www.youtube.com/embed/HqUZgLUqi1s",
    discount: 5,
    price: 15,
  },
  {
    image: img4.src,
    name: "Hair cream",
    brand: "nolanissac",
    id: "e770ad36-d1a9-4685-becd-c52f4db3arf3",
    description: "This product is a good product",
    quantityInStock: 15,
    rating: 2,
    category: "Hair Treatment",
    numReviews: 2,
    video: "https://www.youtube.com/embed/HqUZgLUqi1s",
    discount: 5,
    price: 5.99,
  },
];
