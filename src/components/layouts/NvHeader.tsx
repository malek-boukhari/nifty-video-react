import React from 'react'

import { useAppSelector, useAppDispatch } from '../../hooks'

import { increment } from '../../store/counterSlice'
import '../../scss/layouts/_nv-header.scoped.scss'

function NvHeader() {
    const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch()
    return (
        <header className="header">
            <div className="showcase-top">
                <h1>NiftyVideo</h1>
            </div>
            <div>{{ count }}</div>
            <button type="submit" onClick={dispatch(increment)}>Increment</button>
            <div className="showcase-content">
                <h2>
                    No idea what to watch?
                </h2>
                <h2>We got you covered</h2>
                <p>
                    Discover our carefully selected movie list
                </p>
            </div>
        </header>
    )
}

export default NvHeader
