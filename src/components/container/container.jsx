import React, { useState } from "react";
import Sidebar from "../sidebar/sidebar";
import Info from "../content/info/info";
import { Plan } from "../content/plan/plan";
import { Addons } from "../content/addons/addons";
import { Summary } from "../content/summary/summary";
import './style.css'

let Container = () => {
    let [screen, setScreen] = useState([
        { show: true },
        { show: false },
        { show: false },
        { show: false }
    ])

    let next = () => {
        let index = screen.findIndex(element => element.show === true)

        screen.map(element => {
            element.show = false
        })

        let newState = [...screen]

        newState[index + 1].show = true
        setScreen(newState)

        let step = document.querySelectorAll("li.step")
        step[0].children[0].children[0].classList.remove("active")
        step[1].children[0].children[0].classList.remove("active")
        step[2].children[0].children[0].classList.remove("active")
        step[3].children[0].children[0].classList.remove("active")

        step[index + 1].children[0].children[0].classList.add("active")
    }

    let back = () => {
        let index = screen.findIndex(element => element.show === true)

        screen.map(element => {
            element.show = false
        })

        let newState = [...screen]

        newState[index - 1].show = true
        setScreen(newState)

        let step = document.querySelectorAll("li.step")
        step[0].children[0].children[0].classList.remove("active")
        step[1].children[0].children[0].classList.remove("active")
        step[2].children[0].children[0].classList.remove("active")
        step[3].children[0].children[0].classList.remove("active")

        step[index - 1].children[0].children[0].classList.add("active")
    }



    if (screen[0].show === true) {
        return (
            <div className="container">
                <Sidebar />
                <Info next={next} back={back}/>
            </div>
        )
    } else if (screen[1].show === true) {
        return (
            <div className="container">
                <Sidebar />
                <Plan next={next} back={back} />
            </div>
        )
    } else if (screen[2].show === true) {
        return (
            <div className="container">
                <Sidebar />
                <Addons next={next} back={back} />
            </div>
        )
    } else if (screen[3].show === true) {
        return (
            <div className="container">
                <Sidebar />
                <Summary next={next} back={back} />
            </div>
        )
    }
}


export default Container