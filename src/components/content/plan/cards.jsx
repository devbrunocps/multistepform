import { useState } from "react"

let Cards = (props) => {
    let [plans, setPlans] = useState({
        monthly: [
            {
                icon: '../../../assets/images/icon-arcade.svg', name: "Arcade", price: "$9/mo"
            },
            {
                icon: '../../../assets/images/icon-advanced.svg', name: "Advanced", price: "$12/mo"
            },
            {
                icon: '../../../assets/images/icon-pro.svg', name: "Pro", price: "$15/mo"
            }
        ],

        yearly: [
            {
                icon: '../../../assets/images/icon-arcade.svg', name: 'Arcade', price: "$90/yr", free: "2 months free"
            },
            {
                icon: '../../../assets/images/icon-advanced.svg', name: "Advanced", price: "$120/yr", free: "2 months free"
            },
            {
                icon: '../../../assets/images/icon-pro.svg', name: "Pro", price: "$150/yr", free: "2 months free"
            }
        ]
    })


    if (props.plan == "monthly") {
        return (
            <div className="cards">
                {
                    plans.monthly.map((element, index) => {
                        return (
                            <div className="card-plan" id={`card-plan-${index + 1}`} key={index} onClick={props.checkCard}>
                                <div className="icon">
                                    <img src={element.icon} alt="" width={60} height={60} />
                                </div>
                                <div className="content-card">
                                    <div className="title">
                                        <span>{element.name}</span>
                                    </div>
                                    <div className="price">
                                        <span>{element.price}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div >
        )
    } else {
        return (
            <div className="cards">
                {
                    plans.yearly.map((element, index) => {
                        return (
                            <div className="card-plan" id={`card-plan-${index + 1}`} key={index} onClick={props.checkCard}>
                                <div className="icon">
                                    <img src={element.icon} alt="" width={60} height={60} />
                                </div>
                                <div className="content-card">
                                    <div className="title">
                                        <span>{element.name}</span>
                                    </div>
                                    <div className="price">
                                        <span>{element.price}</span>
                                    </div>
                                    <div className="free">
                                        <span>{element.free}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div >
        )
    }


}

export default Cards