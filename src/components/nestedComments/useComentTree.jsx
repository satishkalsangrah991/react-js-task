import React, { useState } from 'react'

const useComentTree = (initialComments) => {
    const [comments, setComments] = useState(initialComments);
    const insertNode = (tree, commentId, content) => {
      console.log(tree)
        return tree.map((comment) => {
          console.log(comment.id , "commentId" ,commentId)
          if (comment.id === commentId) {
            return {
              ...comment,
              replies: [...comment.replies, content],
            };
          } else if (comment.replies && comment.replies.length > 0) {
            return {
              ...comment,
              replies: insertNode(comment.replies, commentId, content),
            };
          }
          console.log(comment)
          return comment;
        });
      };

    const insertComment = (commentId, content) => {
      console.log(commentId)
        const newComment = {
          id: Date.now(),
          content,
          votes: 0,
          timestamp: new Date().toISOString(),
          replies: [],
        };
    
        if (commentId) {
          setComments((prevComments) =>
            insertNode(prevComments, commentId, newComment)
          );
        } else {
          setComments((prevComments) => [newComment, ...prevComments]);
        }
      };

      // const deleteNode = (tree, nodeId) => {
      //   return tree.reduce((acc, node) => {
      //     console.log(acc)
      //     console.log(node)
      //     if (node.id === nodeId) {
      //       return acc;
      //     } else if (node.replies && node.replies.length > 0) {
      //       node.replies = deleteNode(node.replies, nodeId);
      //     }
      //     return [...acc, node];
      //   }, []);
      // };
    
      // const deleteComment = (commentId) => {
      //   setComments((prevComments) => deleteNode(prevComments, commentId));
      // };


      const deleteNode = (tree, nodeId) => {
        return tree.filter(node => {
          // console.log(node)
          if (node.id === nodeId) {
            console.log(node)
            return false;
          }
          if (node.replies && node.replies.length > 0) {
            // console.log("hellojjj")
            node.replies = deleteNode(node.replies, nodeId);
          }

          return true;
        });
       
      };
      
      const deleteComment = (commentId) => {
        setComments((prevComments) => deleteNode(prevComments, commentId));
      };

  return {comments,insertComment,deleteComment}
}

export default useComentTree