import './style.scss'

export function TodoItem(props) {
    return(
        <div className="todo-item">
            <div className='order' style={{opacity:props.opacity}}>{props.order}
            </div>

            <div className="layout-left">
                <img src={props.img} alt="" />
                <div className="list-view">
                    <p className="comment">{props.comment}</p>
                    <p className="view">{props.view}K</p>
                    <p className="day">{props.day}</p>
                </div>
            </div>

            <div className="layout-right">
                <h1>{props.title}</h1>
                <p>By <b className='author'>{props.author}</b> </p>
                <span className='context'>{props.context}</span>
            </div>
        </div>
    );
}