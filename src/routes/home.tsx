import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Product from "../components/Product";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  rating: number;
}


export default function Home() {
  const [products, setProducts] = useState<Product[]>([])

  console.log(products);

  const getData = async (): Promise<void> => {
    try {
      const res = await fetch("/db.json");
      const data = await res.json();

      setProducts(data)
      console.log(data);
    
    } catch (error) {

      console.log(error);

    }
  };

  useEffect(() => {
    getData();
  }, []);


  
  if (products.length === 0) {
    return <div>Loading...</div>
  }
  return (
    <main className="m-auto max-w-[1200px]" >
      <Banner />
      <div className="flex flex-wrap gap-4 ">
      {products.map((product) => (
        <Product
          key={product.id}
          title={product.title}
          image={product.image}
          price={product.price}
        />
      ))}
      </div>
    </main>
  );
}
// import HomeIcon from "@mui/icons-material/Home";
