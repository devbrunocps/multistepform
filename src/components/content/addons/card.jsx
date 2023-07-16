import { useEffect, useState } from "react"

let Card = () => {
    let [state, setState] = useState({
        monthly: [
            { title: "Online service", subtitle: 'Access to multiplayer games', price: '+$1/mo' },
            { title: "Larger storage", subtitle: 'Extra 1TB of cloud save', price: '+$2/mo' },
            { title: "Customizable profile", subtitle: 'Custom theme on your profile', price: '+$2/mo' }
        ],

        yearly: [
            { title: "Online service", subtitle: 'Access to multiplayer games', price: '+$10/yr' },
            { title: "Larger storage", subtitle: 'Extra 1TB of cloud save', price: '+$20/yr' },
            { title: "Customizable profile", subtitle: 'Custom theme on your profile', price: '+$20/yr' }
        ]
    })

    let check = (ev) => {
        if (ev.target.checked == true) {
            ev.target.parentNode.parentNode.classList.add('active')
        } else {
            ev.target.parentNode.parentNode.classList.remove('active')
        }
    }

    if (document.getElementById('switch-plan').checked == false) {
        return (
            <div className="cards">
                {state.monthly.map((element, index) => {
                    return (
                        <div className="card" key={index}>
                            <div className="check">
                                <input type="checkbox" name="" id="" onClick={check} />
                            </div>
                            <div className="text">
                                <div className="title">
                                    <span>{element.title}</span>
                                </div>
                                <div className="subtitle">
                                    <span>{element.subtitle}</span>
                                </div>
                            </div>
                            <div className="price">
                                <span>{element.price}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    } else {
        return (
            <div className="cards">
                {state.yearly.map((element, index) => {
                    return (
                        <div className="card" key={index}>
                            <div className="check">
                                <input type="checkbox" name="" id="" onClick={check} />
                            </div>
                            <div className="text">
                                <div className="title">
                                    <span>{element.title}</span>
                                </div>
                                <div className="subtitle">
                                    <span>{element.subtitle}</span>
                                </div>
                            </div>
                            <div className="price">
                                <span>{element.price}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Card