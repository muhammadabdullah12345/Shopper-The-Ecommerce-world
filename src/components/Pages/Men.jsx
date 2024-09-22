import { useEffect, useState } from "react";
import MenItem from "../Items/MenItem";
import Loader from "../ui/Loader";

function Men() {
  const [menItems, setMenItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      const res = await fetch(
        "https://fakestoreapi.com/products/category/men's%20clothing"
      );
      const data = await res.json();
      // console.log(data);
      setMenItems(data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="flex items-center justify-center font-bold text-3xl bg-gradient-to-b from-pink-100 via-pink-200 to-pink-100 pt-16">
        {isLoading && <Loader />}
      </div>
      <div className="bg-gradient-to-b from-pink-100 via-pink-200 to-pink-100">
        <div className="grid grid-cols-2 items-center justify-center gap-20 px-16 m-24 ">
          {menItems.map((item) => (
            <MenItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Men;
