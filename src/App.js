import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import QRCode from 'react-qr-code'
import Card from 'react-bootstrap/Card';
import { Text ,Geolocation ,Calendar ,Mail ,Phone ,Sms ,Youtube ,Instagram ,Twitter } from "./components";

function App() {
  const [qrText, setQrText] = useState("");
  return (
      <Container className='justify-content-center align-items-center square border border-warning py-5' style={{marginTop:'100px'}}>
          
		      <h4 className='my-5 '>Choose the type of QRCode</h4>
        <Tab.Container defaultActiveKey="text">
                <Row>
                <Col sm={8}>
                      <Card style={{ width: '100%',padding:'20px'}}>
                <Card.Body>
                  <div className='d-flex bg-light p-4'>
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="text">Text and URLs</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="geo">GeoLocation</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="calendar">Calendar</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="mail">Mail</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="call">Call</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="sms">SMS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="youtube">Youtube</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="instagram">Instagram</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="twitter">Twitter</Nav.Link>
                    </Nav.Item>
                    </Nav>
				         
                  
                    <Tab.Content className='px-5 w-75'>
                      <Tab.Pane eventKey="text">
                        <Text setQrText={setQrText} />
                      </Tab.Pane>
                    <Tab.Pane eventKey="geo">
                        <Geolocation setQrText={setQrText} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="calendar">
                        <Calendar setQrText={setQrText} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="mail">
                        <Mail setQrText={setQrText} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="call">
                        <Phone setQrText={setQrText} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="sms">
                        <Sms setQrText={setQrText} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="youtube">
                        <Youtube setQrText={setQrText} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="instagram">
                        <Instagram setQrText={setQrText} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="twitter">
                        <Twitter setQrText={setQrText} />
                    </Tab.Pane>
                    </Tab.Content>
                  </div>
                </Card.Body>
              </Card>
              </Col>
          <Col sm={4}> 
          <h1 className='d-flex justify-content-center'>Qr Code</h1>
      	  <div className=' d-flex justify-content-center'>{qrText.length > 0 && <QRCode value={qrText} />}</div>
          </Col>

				</Row>
		</Tab.Container>
      </Container>
      
  );
}

export default App;