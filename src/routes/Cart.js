import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { changeName, increase } from '../store/userSlice.js';
import { increaseCount } from '../store.js';

function Cart() {

    let state = useSelector((state) => { return state })
    let dispatch = useDispatch()

    console.log(state)
    return (
        <div>
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