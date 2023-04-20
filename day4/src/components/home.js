import "../styles/style.css"
import Head from './navigation';
import Summary from "./summary";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import {FaRegUserCircle, FaFacebook, FaTwitch, FaGithub, FaTwitter} from "react-icons/fa";

function Home() {
    return (
        <div>
            <Head />
            <div className='Homepage'>
                <Container>
                    <Row>
                        <Col>
                        <div>  
                            <h1><FaRegUserCircle/></h1>
                        </div>
                        </Col>
                        <Col>
                            <Stack gap={3}>
                                <div><h1>Fernando Julian</h1></div>
                                <div><h6>Tech Enthusiast</h6></div>
                                <div><FaFacebook/><FaTwitter/><FaGithub/></div>
                            </Stack>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Summary />
        </div>
    )
}

export default Home