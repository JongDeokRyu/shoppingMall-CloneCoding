import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import React, { Component, useState  , useEffect} from 'react';

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
        </div>
    )
}

export default Detail;


    // useEffect(() => { })     1.재렌더링마다 코드실행하고 싶으면
    // useEffect(() => { },[])  2.mount시 1회 코드 실행하고 싶으면 
    // useEffect(() => { 
    //     return () => {

    //     }
    // },[])                    3.unmount시 1회 코드 실행하고 싶으면 