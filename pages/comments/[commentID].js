import React from "react";
import { comments } from "@/data/comments";

function commentID({ comment }) {
  return (
    <div>
      {comment.id} {comment.text}
    </div>
  );
}

export default commentID;

export async function getStaticProps(context) {
  const { params } = context;
  const { commentID } = params;
  const comment = comments.find(
    (comment) => comment.id === parseInt(commentID)
  );
  console.log(comment);
  return {
    props: {
      comment,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { commentID: "1" } },
      { params: { commentID: "2" } },
      { params: { commentID: "3" } },
    ],
    fallback: false,
  };
}
