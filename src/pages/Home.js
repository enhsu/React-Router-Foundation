import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()

    return (
        <div>
            <h1>Home</h1>
            <button onClick={() => navigate('/about')}>Go to About</button>
        </div>
    );
}
 
export default Home;