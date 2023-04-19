import "../styles/style.css"
import Head from './navigation';
import Summary from "./summary";
import Button from 'react-bootstrap/Button';


function Home() {
    return (
        <div>
            <Head />
            <div className='Homepage'>
                <h1>Fernando Julian</h1>
                <Button variant="outline-dark">Ini Button</Button>
            </div>
            <Summary />
        </div>
    )
}

export default Home