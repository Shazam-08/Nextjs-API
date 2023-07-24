import { useState } from "react";

function indexpage() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const fetchComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComments(data);
  };

  const submitComments = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  const deleteComment = async (commentID) => {
    const response = await fetch(`/api/comments/${commentID}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
    fetchComments();
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={submitComments}>Submit Comments</button>
        <br />
        <hr />
        <button onClick={fetchComments}>Load Comments</button>
        {comments.map((comment) => {
          return (
            <div key={comment.id}>
              {comment.id} {comment.text}
              <button onClick={() => deleteComment(comment.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default indexpage;
