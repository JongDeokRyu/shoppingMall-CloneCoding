/* eslint-disable jsx-a11y/alt-text */
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import bg from './image/bg.png';
import { useState } from 'react';
import data from './data.js';

function App() {

  let [shoes] = useState(data)
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg' style={{ backgroundImage: `url(${bg})` }}></div>
      <div className="container">
        <div className="row">
          {
            shoes.map((shoe) => {
              return (
                <Card shoes={shoe} i={shoe.id}></Card>
              )
            })}
        </div>
      </div>
    </div>
  );
}


function Card(props) {
  return (
    <div>
      <div className="col-md-4">
        <img src={"https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"} width="80%" />
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.content}</p>
        <p>{props.shoes.price}</p>
      </div>
    </div>
  )
}
export default App;