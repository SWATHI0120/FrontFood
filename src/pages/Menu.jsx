import "../styles/Menu.css";
import foods from "../data/data";
import FoodCard from "../components/FoodCard";

function Menu(){

return(

<div className="menu">

<h1 className="menu-title">Our Menu</h1>

<div className="menu-grid">

{foods.map((food)=>(
<FoodCard key={food.id} food={food}/>
))}

</div>

</div>

)

}

export default Menu