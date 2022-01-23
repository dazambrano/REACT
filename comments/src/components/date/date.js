import moment from 'moment';
const Date = ({date}) => {
    return <div className="date">
        {moment(date).fromNow()}
    </div>
}

export default Date;