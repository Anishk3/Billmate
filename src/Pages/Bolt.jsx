import '../Styles/bolt.css'
import bolt from "../assets/bolt.mp4";

function Bolt() {
return (
    <div className='bolt'>
    <div className="overlay"></div>
<video src={bolt} autoPlay loop/>
    <div className="content">
    </div>
</div>
    )
}

export default Bolt