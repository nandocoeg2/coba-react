import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import "../styles/style.css";
import { AiOutlineFileSearch, AiOutlineCheckSquare} from "react-icons/ai";
import { GiArrowFlights } from "react-icons/gi";

function Summary() {
  return (
    <div className="about-me">
    <Container>
      <Row>
        <Col>
        <div>
            <p>Hi there! I'm Fernando Julian. This is simple landing page profile web, Enjoy!</p>
        </div>
        </Col>
      </Row>
      <Row>
        <Col>
        <div className='projects'>
            <h3><AiOutlineFileSearch /> Projects</h3>
            <div className='project-section'>
            <p><AiOutlineCheckSquare/>Here are some of my projects</p>
            </div>
            <div className='project-section'>
            <p><AiOutlineCheckSquare/>Here are some of my projects</p>
            </div>
            <div className='project-section'>
            <p><AiOutlineCheckSquare/>Here are some of my projects</p>
            </div>
        </div>
        </Col>
        <Col>
        <div className='skills'>
            <h3><GiArrowFlights/> Skills</h3>
                <div className='skill-section'>
                    <p>Here are some of my skills</p>
                        <ProgressBar animated now={60} />
                </div>
                <div className='skill-section'>
                    <p>Here are some of my skills</p>
                        <ProgressBar animated now={60} />
                </div>
                <div className='skill-section'>
                    <p>Here are some of my skills</p>
                        <ProgressBar animated now={60} />
                </div>      
        </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Summary;