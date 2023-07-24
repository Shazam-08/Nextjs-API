import { useState } from "react";

function indexpage() {
  const [comments, setComments] = useState([]);
  //   const [comment, setComment] = useState("");
  const fetchComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComments(data);
  };

  return (
    <>
      <div>
        {/* <input type='text'
     value={comment}
     onChange={(e)=>setComment(e.target.value)}/>
     <button>Submit Comments</button>
     <hr/> */}
        <button onClick={fetchComments}>Load Comments</button>
        {comments.map((comment) => {
          return (
            <div key={comment.id}>
              {comment.id} {comment.text}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default indexpage;
