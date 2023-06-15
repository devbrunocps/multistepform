import React, { useState } from "react";
import './style.css'

let Sidebar = (props) => {
    let [step, setStep] = useState([
        { name: "STEP 1", number: "1", title: "YOUR INFO", func: props.showInfo },
        { name: "STEP 2", number: "2", title: "SELECT PLAN", func: props.showPlan },
        { name: "STEP 3", number: "3", title: "ADD-ONS", func: props.showAddons },
        { name: "STEP 4", number: "4", title: "SUMMARY", func: props.showSummary }
    ])

    return (
        <nav className="sidebar">
            <ul className="steps">
                {step.map((element, index) => {
                    return (
                        <li className="step" onClick={element.func} key={index}>
                            <div className="number">
                                <span className={element.number == "1" ? "active" : ""}>{element.number}</span>
                            </div>
                            <div className="text">
                                <span className="text_name">{element.name}</span>
                                <span className="text_title">{element.title}</span>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Sidebar