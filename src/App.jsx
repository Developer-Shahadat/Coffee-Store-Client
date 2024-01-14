import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";

function App() {
  const allCoffeeData = useLoaderData();
  const [coffees, setCoffees] = useState(allCoffeeData);
  return (
    <div>
      <h1 className="text-4xl text-violet-600 text-center">
        Coffee Store : {coffees.length}
      </h1>
      <div className="grid md:grid-cols-2 gap-6 my-20 m-20">
        {coffees.map((item) => (
          <CoffeeCard
            key={item._id}
            coffee={item}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
