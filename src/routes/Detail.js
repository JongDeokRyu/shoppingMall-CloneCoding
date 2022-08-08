import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import React, { Component, useState  , useEffect} from 'react';
import { Nav } from 'react-bootstrap';
import  '../App.css';

let Btn = styled.button`
    background : ${props => props.bg};
    color : black;
    padding : 10px;
`

// let NewBtn = styled.button(Btn)``

function Detail(props) {
    let { id } = useParams();
    let [alert, setAlert] = useState(true)
    let [count, setCount] = useState(0);
    let [num, setNum] = useState('');
    let [tab, setTab] = useState(0);


    useEffect(() => {
        let 꺼낸거 = localStorage.getItem('watched')
        꺼낸거 = JSON.parse(꺼낸거)
        꺼낸거.push(findProduct.id);
        꺼낸거 = new Set(꺼낸거)
        꺼낸거 = Array.from(꺼낸거)
        localStorage.setItem('watched' , JSON.stringify(꺼낸거))
    },[])
    
    useEffect(() => {
        let a = setTimeout(() => {
            setAlert(false);
        }, 2000)

        return () => {
            clearTimeout(a)
        }
        // useEffect 동작 전에 실행된다 
    }, [])

    useEffect(() => {
        if (isNaN(num) == true) {
            console.log('ㅎㅇㅎㅇㅎㅇ');
        }
    }, [num])


    let findProduct = props.shoes.find((shoe) => {
        return shoe.id == id;
    })
    return (
        <div className="container">
            {
                alert == true ? <div className='alert alert-warning'>
                    2초이내 구매시 할인
                </div>
                    : null
            }
            <Btn bg="red" onClick={() => { setCount(count + 1) }}>버튼</Btn>
            <div className="row">
                <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6">
                    <input onChange={(e) => {
                        setNum(e.target.value)
                    }}></input>
                    <h4 className="pt-5">{findProduct.title}</h4>
                    <p>{findProduct.content}</p>
                    <p>{findProduct.price}원</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>

            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link eventKey="link0" onClick={() => { setTab(0)}}>버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link1" onClick={() => { setTab(1)}}>버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link2" onClick={() => { setTab(2)}}>버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent tab={tab}></TabContent>
        </div>
    )
}

function TabContent(props){
    // if(props.tab == 0){
    //     return <div>내용0</div>
    // }
    // else if(props.tab == 1){
    //     return <div>내용1</div>
    // }
    // else if(props.tab == 2){
    //     return <div>내용2</div>
    // }
    
    let [fade , setFade] = useState('');
    let [fade2 , setFade2] = useState('');
    useEffect(() => {
        let a = setTimeout(() => {
            setFade('end');
            setFade2('container')
            //automatic batching 기능
            //state 변경함수가 가까이 있을 때 state가 다 바뀌어야 재렌더링 된다
        }, 100)
        return (() => {
            setFade('')
            setFade2('');
        })
    },[props])
    
    return (
    <div className={`start  ${fade}`}>
        {[<div>내용0</div>, <div>내용1</div> , <div>내용2</div>][props.tab]}
    </div>)
}


export default Detail;


    // useEffect(() => { })     1.재렌더링마다 코드실행하고 싶으면
    // useEffect(() => { },[])  2.mount시 1회 코드 실행하고 싶으면 
    // useEffect(() => { 
    //     return () => {

    //     }
    // },[])                    3.unmount시 1회 코드 실행하고 싶으면 