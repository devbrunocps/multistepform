import React, { useState } from 'react'
import Next from '../next'
import Back from '../back'
import Cards from './cards'
import './style.css'

export let Plan = (props) => {
    let [state, setState] = useState([
        { show: true, plan: 'monthly' },
        { show: false, plan: "yearly" }
    ])

    let changePlan = (ev) => {
        if (ev.target.checked) {
            setState([
                { show: false, plan: 'monthly' },
                { show: true, plan: "yearly" }
            ])
        } else {
            setState([
                { show: true, plan: 'monthly' },
                { show: false, plan: "yearly" }
            ])
        }
    }

    function checkCard(ev) {
        let card = ev.currentTarget
        console.log(card)
        card.classList.toggle("active")
    }

    return (
        <div className="content" id='plan'>
            <div className="text">
                <span className="title">Select your plan</span>
                <span className="subtitle">You have the option of monthly or yearly billing.</span>
            </div>
            <div className="plans">
                {state.map((element, index) => {
                    if (element.show == true) {
                        return <Cards key={index} plan={element.plan} checkCard={checkCard} />
                    }
                })}
                <div className="time">
                    <label className="switch">
                        <span className={state[0].show == true ? 'switch-text active' : 'switch-text'}>Monthly</span>
                        <div className="switch-wrapper">
                            <input type="checkbox" id='switch-plan' onChange={changePlan} />
                            <span className="switch-button"></span>
                        </div>
                        <span className="switch-text">Yearly</span>
                    </label>
                </div>
            </div>

            <div className="btns">
                <Back back={props.back} />
                <Next next={props.next} text={'Next Step'} />
            </div>
        </div>
    )
}

export default Plan