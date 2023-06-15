import { useState } from 'react'
import Next from '../next'
import Back from '../back'
import './style.css'

export let Plan = (props) => {
    let [plans, setPlans] = useState([
        {
            icon: "",
            name: "Arcade",
            price: "$9/mo"
        },
        {
            icon: "",
            name: "Advanced",
            price: "$12/mo"
        },
        {
            icon: "",
            name: "Pro",
            price: "$15/mo"
        }
    ])

    return (
        <div className="content">
            <div className="text">
                <div className="title">Select your plan</div>
                <div className="subtitle">You have the option of monthly or yearly billing.</div>
            </div>
            <div className="plans">
                {plans.map(element => {
                    return (
                        <div className="card-plan">
                            <div className="icon">
                                {element.icon}
                            </div>
                            <div className="title">
                                <span>{element.name}</span>
                            </div>
                            <div className="price">{element.price}</div>
                        </div>
                    )
                })}
            </div>
            <div className="time">
                <label className="switch">
                    <span className="switch-text">Monthly</span>
                    <div className="switch-wrapper">
                        <input type="checkbox" />
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