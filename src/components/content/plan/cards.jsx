import { useState } from "react"

let Cards = (props) => {
    let [plans, setPlans] = useState({
        monthly: [
            {
                icon: "", name: "Arcade", price: "$9/mo"
            },
            {
                icon: "", name: "Advanced", price: "$12/mo"
            },
            {
                icon: "", name: "Pro", price: "$15/mo"
            }
        ],

        yearly: [
            {
                icon: "", name: "Arcade", price: "$90/yr", free: "2 months free"
            },
            {
                icon: "", name: "Advanced", price: "$120/yr", free: "2 months free"
            },
            {
                icon: "", name: "Pro", price: "$150/yr", free: "2 months free"
            }
        ]
    })

    let checkbox = document.getElementById('switch-plan')
    console.log(checkbox)

    if (checkbox.checked) {
        {plans.monthly.map(element => {
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
    } else {
        {plans.yearly.map(element => {
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
    }

}

export default Cards