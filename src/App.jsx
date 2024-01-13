import { useLoaderData } from "react-router-dom"
import CoffeeCard from "./components/CoffeeCard";

function App() {
 const allCoffeeData = useLoaderData();
  return (
    <div>
      
      <h1 className='text-4xl text-violet-600 text-center'>Coffee Store : {allCoffeeData.length}</h1>
      <div className="grid md:grid-cols-2 gap-6 my-20 m-20">
        {
          allCoffeeData.map(item => <CoffeeCard key={item._id} coffee={item}></CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
