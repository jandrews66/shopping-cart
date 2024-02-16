import { Button } from '../components/Buttons'
import { useNavigate } from "react-router-dom";


export default function Home(){
    const navigate = useNavigate();

    function handleClick(){
        navigate(`/shop/`)
    }
    return (
        <>
            <div id="homeMessage">
                <h1>Hot Offers All Summer!</h1>
                <Button $invert onClick={handleClick}>Shop Now</Button>
            </div>

        </>
    )
}