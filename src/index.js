import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
//Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css'

import axios from 'axios';

function DataRender(){

  const [apiData, setApiData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() =>{
    axios.get('https://randomuser.me/api/?results=50').then((response)=>{
       setApiData(response.data.results);
       setFilteredData(response.data.results);
      
    });
  },[]);

 
  return (
   <>
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" >
          <Col>
          <Form className="m-2">
            <InputGroup>
             <InputGroup.Text id="basic-addon1">Посик по имени</InputGroup.Text>
              <Form.Control placeholder="Имя/Фимилия" onChange={(e)=>{setFilteredData(filteredData.filter((element)=> element.name.first.toLowerCase().includes(e.target.value.toLowerCase())))}}/>
            </InputGroup>
          </Form>
          </Col>
          {/* <Col>
          <Form.Select className="m-2" aria-label="Default select example">
            <option value="">Поиск по полу </option>
            <option value="female">Жен</option>
            <option value="male">Муж</option>
          </Form.Select>
          </Col> */}
      </Navbar.Collapse>
    </Container>
  </Navbar>
  <Container>
    
    <Row className="justify-content-center">
   
    {filteredData.map((data) => (
      <Col className="justify-content-center d-flex">
      <Card className="mt-3" style={{ width: '18rem' }}>
      <ListGroup variant="flush">
        <ListGroup.Item>{data.name.first}</ListGroup.Item>
        <ListGroup.Item>{data.name.last}</ListGroup.Item>
        <ListGroup.Item>{data.gender}</ListGroup.Item>
      </ListGroup>
    </Card>
    </Col>
    ))}
    </Row>
  </Container>
   </>
  
  )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <DataRender/>
  </>
 
  
);


// export default HelloWorld;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
