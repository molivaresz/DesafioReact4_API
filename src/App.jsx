import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MiApi from './Components/MiApi';


function App() {

  return (
    <>
    <Container fluid>
      <Row className='bg-danger'>
        <Col className='text-light p-2'>
          <h1>Encuentra tu Universidad</h1>
        </Col>
      </Row>
      <Row className='bg-danger'>
        <Col className='text-light p-2 text-center'>
          <h2>¿Cómo escoger una universidad?</h2>
          <h5>A la hora de escoger un centro universitario es importante plantearse una serie de aspectos. En este buscador puedes encontrar lo que necesitas</h5>
        </Col>
      </Row>
      <Row className='bg-light'>
        <Col className='text-center p-2'>
          <MiApi />
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default App
