
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Comment from './components/comment/Comment';

const COMMENTS = [
  {
    "_id": 1,
    "name": "Mercedes Tyler",
    "email": "mercedes_tyler@fakegmail.com",
    "text": `Eius veritatis vero facilis quaerat fuga temporibus. Praesentium expedita sequi repellat id. Corporis minima enim ex. Provident fugit nisi dignissimos nulla nam ipsum aliquam.`,
    "date": "2002-08-18T04:56:07.000+00:00"
  },
  {
    "_id": 2,
    "name": "Mercedes Tyler",
    "email": "mercedes_tyler@fakegmail.com",
    "text": `Eius veritatis vero facilis quaerat fuga temporibus. Praesentium expedita sequi repellat id. Corporis minima enim ex. Provident fugit nisi dignissimos nulla nam ipsum aliquam.`,
    "date": "2002-08-18T04:56:07.000+00:00"
  }
]

function App() {
  const [comments, setComents] = useState([])
  useEffect(() => {
    setComents(COMMENTS)
    // getComments();
  });

  const getComments = async () => {
    //let response = await axios.get('/comments');
  }

  return (
    <div className="App">
      <section className="container__comments">
        {
          comments.map((comment) => {
            return <Comment comment={comment}  />
          })
        }
      </section>
    </div>
  );
}

export default App;
