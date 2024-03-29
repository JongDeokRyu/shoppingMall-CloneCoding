import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import bg from './image/bg.png';
import React, { lazy, Suspense, Component, useEffect, useState } from 'react';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
// import Detail from './routes/Detail.js'
// import Cart from './routes/Cart.js'
import About from './pages/About';
import axios from 'axios';
import { useQuery } from 'react-query'


const Detail = lazy(() => import('./routes/Detail.js'))
const Cart = lazy(() => import('./routes/Cart.js'))
// 단점 : Cart , Detail 컴포넌트 로딩시간 발생

function App() {

  // TODO: 이미 localstorage에 데이터가 있으면 초기화 ㄴㄴ
  // TODO: 상품 클릭시 디테일 페이지 navigate

  let [shoes, setShoes] = useState(data)
  let [newShoes, setNewShoes] = useState('');
  let navigate = useNavigate();


  let result = useQuery('작명', () =>
    axios.get('https://codingapple1.github.io/userdata.json')
      .then((a) => {
        console.log('요청됨')
        return a.data
      }),
    { startTime: 2000 }
  )


  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('detail') }}>Detail</Nav.Link>
            {/* <Link to="/">홈</Link>
            <Link to="/detail" style={{ paddingLeft: '10px' }}>상세페이지</Link> */}
          </Nav>
          <Nav className="ms-auto">
            {result.isLoading ? '로딩중' : result.data.name}
          </Nav>
        </Container>
      </Navbar>

      <Suspense fallback={<div>로딩중임</div>}>
        <Routes>
          <Route path="/" element={
            <>
              <div className='main-bg' style={{ backgroundImage: `url(${bg})` }}></div>
              <div className="container">
                <div className="row">
                  {
                    shoes.map((shoe) => {
                      return (
                        <Card key={shoe.id} shoes={shoe} i={shoe.id}></Card>
                      )
                    })}
                </div>
              </div>
              <button onClick={() => {
                axios.get('https://codingapple1.github.io/shop/data2.json')
                  .then((data) => {
                    setShoes([...shoes, ...data.data])
                  })
                  .catch(() => {
                    console.log('실패')
                  })

                // Promise.all([ axios.get('/url1' , axios.get('/url2'))])
                // .then(() => {

                // })

                // fetch('https://codingapple1.github.io/shop/data2.json')
                // JSON -> array / object 변환 필요 <---> axios는 자동으로 변환해줌

              }}>서버 요청 버튼</button>
            </>} />
          <Route path="/detail/:id" element={<Detail shoes={shoes}></Detail>} />
          <Route path="/about" element={<About></About>}>
            <Route path="member" element={<div>멤버임</div>}></Route>
            <Route path="location" element={<div>위치정보임</div>}></Route>
          </Route>
          <Route path="*" element={<div>없는 페이지</div>} />
          <Route path="/cart" element={<Cart></Cart>}></Route>
        </Routes>
      </Suspense>
    </div >
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