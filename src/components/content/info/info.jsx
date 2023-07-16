import './style.css'
import Next from '../next'

let Info = (props) => {
    return (
        <div className="content" id='info'>
            <div className="text">
                <div className="title">
                    <span>Personal Info</span>
                </div>
                <div className="subtitle">
                    <span>Please provide your name, email adress and phone number.</span>
                </div>
            </div>
            <form action="">
                <div className="name">
                    <div className="title">
                        <label htmlFor="">
                            <span>Name</span>
                            <span className='error'>This field is required</span>
                        </label>
                    </div>
                    <div className="field">
                        <input type="text" placeholder='e.g. Stephen King' />
                    </div>
                </div>

                <div className="email">
                    <div className="title">
                        <label htmlFor="">
                            <span>Email Address</span>
                            <span className='error'>This field is required</span>
                        </label>
                    </div>
                    <div className="field">
                        <input type="email" placeholder='e.g. stephenking@lorem.com' />
                    </div>
                </div>

                <div className="phone">
                    <div className="title">
                        <label htmlFor="">
                            <span>Phone Number</span>
                            <span className='error'>This field is required</span>
                        </label>
                    </div>
                    <div className="field">
                        <input type="tel" placeholder='e.g. +1 234 567 890' />
                    </div>
                </div>
            </form>
            <div className="btn">
                <Next next={props.next} text={'Next Step'} />
            </div>
        </div>
    )
}

export default Info