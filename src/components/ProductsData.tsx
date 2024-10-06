import Image from "next/image";

interface Product {
  title: string;
  type: string;
  description: string;
  prices: string;
  image: string;
}

interface ProductData {
  product: Product[];
  service: Product[];
}

const productData: ProductData = {
  product: [
    {
      title: "Handcrafted Wooden Chair",
      type: "product",
      description:
        "A beautifully handcrafted wooden chair made from sustainable pine wood. Perfect for adding a touch of rustic charm to any space.",
      prices: "Rp 700.000,00",
      image:
        "https://images.unsplash.com/photo-1531851243379-1524c00c0545?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Custom Dining Table",
      type: "product",
      description:
        "A custom-made dining table designed to fit your dining area perfectly. Made from high-quality oak wood with a smooth, polished finish.",
      prices: "Rp 4.500.000,00",
      image:
        "https://images.unsplash.com/photo-1560184897-0e5d96d86acd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Wooden Bookshelf",
      type: "product",
      description:
        "A sturdy wooden bookshelf with multiple compartments, perfect for organizing your books and displaying decorative items.",
      prices: "Rp 2.000.000,00",
      image:
        "https://images.unsplash.com/photo-1515542706656-8e6ef17a1521?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Children's Educational Blocks",
      type: "product",
      description:
        "Eco-friendly wooden blocks designed for children. These blocks are safe, durable, and perfect for encouraging creative play.",
      prices: "Rp 500.000,00",
      image:
        "https://images.unsplash.com/photo-1564429238817-393bd4286b2d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
  service: [
    {
      title: "Custom Furniture Creation",
      type: "service",
      description:
        "We offer custom furniture creation services tailored to your specific needs and preferences. From design to finished product, we ensure each piece is crafted with care.",
      prices: "Starts at Rp 2.000.000,00",
      image:
        "https://images.unsplash.com/photo-1560846389-e30cd220c622?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Furniture Repair",
      type: "service",
      description:
        "Our skilled craftsmen can repair your existing wooden furniture, restoring it to its original beauty and functionality. We handle everything from minor fixes to major repairs.",
      prices: "Starts at Rp 500.000,00",
      image:
        "https://images.unsplash.com/photo-1607400201515-c2c41c07d307?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Furniture Modification and Improvement",
      type: "service",
      description:
        "We offer services to modify, improve, or add to your existing furniture. Whether it's adding new features or enhancing the current design, we ensure the modifications meet your expectations.",
      prices: "Starts at Rp 1.000.000,00",
      image:
        "https://images.unsplash.com/photo-1532348260545-b021ade9c70d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
};

function ProductsData({ productType, maxShow }: { productType: keyof ProductData; maxShow: number }) {
  const returnElement = [productData[productType]].slice(0, maxShow === -1 || 0 ? undefined : maxShow)[0];
  return (
    <>
      <div className="w-full flex flex-wrap justify-center">
        {returnElement.map((item, index) => {
          return (
            <div
              key={index}
              className="card md:card-side bg-[#f8f8f8] drop-shadow-lg shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_-10px_15px_-3px_rgba(0,0,0,0.1)] m-6 max-w-full md:min-w-[18rem] items-center justify-center">
              <figure className="w-full md:w-1/3">
                <Image
                  width={1000}
                  height={1000}
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full"
                />
              </figure>
              <div className="card-body md:w-2/3 md:p-4 w-full justify-center  text-justify text-xs md:text-sm leading-loose md:leading-loose">
                <h2 className="card-title md:pt-6">{item.title}</h2>
                <p>{item.description}</p>
                <p>
                  <b>{item.prices}</b>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProductsData;
