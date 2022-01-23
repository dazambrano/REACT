import Actions from "../actions/Actions";
import Date from "../date/date";
import Profile from "../profile/profile";

const Comment = ({comment}) => {
    const {_id, name, email, text, date} = comment;
    return <div className="container__comment" id={_id}>
        <div className='box__comment'>
            <Profile name={name} email={email} />
            <div className="comment">
                <p>
                    {text}
                </p>
                <Date date={date} />
            </div>
        </div>
        <Actions />
    </div>
}

export default Comment;