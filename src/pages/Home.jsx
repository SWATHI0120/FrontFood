import "../styles/Home.css";
import { Link } from "react-router-dom";

function Home(){

return(

<div className="home">

<h1 className="home-title">
Delicious Food Delivered Fast
</h1>

<p className="home-text">
Order your favourite meals anytime
</p>

<Link to="/menu">
<button className="home-button">
Explore Menu
</button>
</Link>

</div>

)

}

export default Home