import './style.css'
import { BsCheck2Circle } from "react-icons/bs";

export let Summary = () => {
    return (
        <div className="content" id='summary'>
            <div className="finished">
                <BsCheck2Circle className='icon' />
                <span>Thank you!</span>
                <p>Thanks for confirming your subscription! We hope you have
                    fun using our platform. If you ever need support, please feel
                    free to email us at support@loremgaming.com.</p>
            </div>
        </div>
    )
}