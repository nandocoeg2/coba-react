import "../styles/style.css"
import Head from './navigation';
import Summary from "./summary";

function Home() {
    return (
        <div>
            <Head />
            <div className='Homepage'>
                <h1>Fernando Julian</h1>
            </div>
            <Summary />
        </div>
    )
}

export default Home