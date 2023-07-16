import './style.css'

let Next = (props) => {
    return <button className="btn-next" onClick={props.next}>{props.text}</button>
}

export default Next