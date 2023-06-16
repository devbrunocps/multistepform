import { useState } from 'react'
import Next from '../next'
import Back from '../back'
import Cards from './cards'
import './style.css'

export let Plan = (props) => {
    return (
        <div className="content">
            <div className="text">
                <div className="title">Select your plan</div>
                <div className="subtitle">You have the option of monthly or yearly billing.</div>
            </div>
            <div className="plans">
                <Cards />
            </div>
            <div className="time">
                <label className="switch">
                    <span className="switch-text">Monthly</span>
                    <div className="switch-wrapper">
                        <input type="checkbox" id='switch-plan' />
                        <span className="switch-button"></span>
                    </div>
                    <span className="switch-text">Yearly</span>
                </label>
            </div>

            <div className="btns">
                <Back back={props.back} />
                <Next next={props.next} />
            </div>
        </div>
    )
}

export default Plan