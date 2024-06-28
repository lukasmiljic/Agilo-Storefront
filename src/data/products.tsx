const products = [
  {
    id: 1,
    title: "Backpack",
    price: "150,00 kr",
    description: "This is a description of Product 1",
    image: "/images/products/backpack.png",
    stock: 10,
    colors: ["black", "blue"],
    details: { title: "Materials", description: "Cotton 90% Polyester 10%" },
    category: "bags",
  },
  {
    id: 2,
    title: "Baseball Cap",
    price: "100,00 kr",
    description: "This is a description",
    image: "/images/products/cap.png",
    stock: 10,
    colors: ["black", "blue"],
    details: { title: "Materials", description: "Cotton 90% Polyester 10%" },
    category: "accessories",
  },
  {
    id: 3,
    title: "Mug",
    price: "100,00 kr",
    description: "This is a description",
    image: "/images/products/mug.png",
    stock: 10,
    colors: ["black", "blue"],
    details: { title: "Materials", description: "Cotton 90% Polyester 10%" },
    category: "accessories",
  },
  {
    id: 4,
    title: "Phonecase",
    price: "100,00 kr",
    description: "This is a description",
    image: "/images/products/phonecase.png",
    stock: 10,
    colors: ["black", "blue"],
    details: { title: "Materials", description: "Cotton 90% Polyester 10%" },
    category: "accessories",
  },
  {
    id: 5,
    title: "Socks",
    price: "100,00 kr",
    description: "This is a description",
    image: "/images/products/sock.png",
    stock: 10,
    colors: ["black", "blue"],
    details: { title: "Materials", description: "Cotton 90% Polyester 10%" },
    category: "clothing",
  },
  {
    id: 6,
    title: "T-shirt",
    price: "100,00 kr",
    description: "This is a description",
    image: "/images/products/shirt.png",
    stock: 10,
    colors: ["black", "blue"],
    details: { title: "Materials", description: "Cotton 90% Polyester 10%" },
    category: "clothing",
  },
  {
    id: 7,
    title: "Sticker",
    price: "100,00 kr",
    description: "This is a description",
    image: "/images/products/sticker.png",
    stock: 10,
    colors: ["black", "blue"],
    details: { title: "Materials", description: "Cotton 90% Polyester 10%" },
    category: "accessories",
  },
  {
    id: 8,
    title: "Sweater",
    price: "100,00 kr",
    description: "This is a description",
    image: "/images/products/sweater.png",
    stock: 10,
    colors: ["black", "blue"],
    details: { title: "Materials", description: "Cotton 90% Polyester 10%" },
    category: "clothing",
  },
  {
    id: 9,
    title: "Tote bag",
    price: "100,00 kr",
    description: "This is a description",
    image: "/images/products/tote.png",
    stock: 10,
    colors: ["black", "blue"],
    details: { title: "Materials", description: "Cotton 90% Polyester 10%" },
    category: "bags",
  },
  {
    id: 10,
    title: "Water bottle",
    price: "100,00 kr",
    description: "This is a description",
    image: "/images/products/waterbottle.png",
    stock: 10,
    colors: ["black", "white"],
    details: { title: "Materials", description: "Aluminum" },
    category: "accessories",
  },
];

export const categories = [
  ...new Set(
    products
      .filter((product) => product.category)
      .map((product) => product.category),
  ),
];

export default products;
