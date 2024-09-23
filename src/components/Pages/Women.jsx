import { useEffect, useState } from "react";
import WomenItem from "../Items/WomenItem";
import Loader from "../ui/Loader";

function Women() {
  const [womenItems, setWomenItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      const res = await fetch(
        "https://fakestoreapi.com/products/category/women's%20clothing"
      );
      const data = await res.json();
      setWomenItems(data);
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
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-10 px-4 md:px-8 lg:px-16 m-4 md:m-12">
          {womenItems.map((item) => (
            <WomenItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Women;
