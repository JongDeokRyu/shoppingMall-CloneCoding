import React, { useState, Component, memo } from 'react';
import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { changeName, increase } from '../store/userSlice.js';
import { increaseCount } from '../store.js';


let Child = memo(function () {
    return <div>자식임</div>
    // 재렌더링을 막아줌
    // 무거운 컴포넌트를 막아줌
    // props가 변할 때만 재렌더링됨
    // 기존props 신규 props 계속 비교함
})

function 함수() {
    return 반복문10억번돌린결과
}


function Cart() {

    let result = useMemo(() => { return 함수() }, []) //컴포넌트 렌더링시 1회만 실행해줌

    let state = useSelector((state) => { return state })
    let dispatch = useDispatch()
    let [count, setCount] = useState(0)

    console.log(state)
    return (
        <div>
            {/* <Child count={count}></Child>
            <button onClick={() => setCount(count + 1)}>+</button> */}
            <h6>{state.user.name} {state.user.age}의 장바구니</h6>
            <button onClick={() => {
                dispatch(increase(10))
            }}>버튼</button>
            <Table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>count</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.cart.map((cart, i) =>
                            <tr key={i}>
                                <td>{i}</td>
                                <td>{cart.name}</td>
                                <td>{cart.count}</td>
                                <td>
                                    <button onClick={() => {
                                        dispatch(increaseCount(i))
                                    }}>+</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Cart;