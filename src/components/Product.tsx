

interface ProductProps {
    title: string;
    image: string;
    price: number;
    rating?: number;
}

export default function Product({title, image, price}: ProductProps) {


  return (
    <article className="border-4 w-96 p-4">
       <p>{title}</p>
       <div>
          <b>{price}</b>
       </div>
       <div>
        <img src={image} alt={"Carreagndo..."} />
       </div>

       <div>
         <button className="border-4 p-2">Add to cart</button>
       </div>
    </article>
  )
}
