import './style.css'
import Next from '../next'
import Back from '../back'
import Card from './card'

export let Addons = (props) => {
    return (
        <div className="content" id='addons'>
            <div className="text">
                <div className="title">
                    <span>Pick add-ons</span>
                </div>
                <div className="subtitle">
                    <span>Add-ons help enhance your gaming experience</span>
                </div>
            </div>
            <Card />
            <div className="btns">
                <Back back={props.back} />
                <Next next={props.next} text={'Finish'} />
            </div>
        </div>
    )
}


export default Addons