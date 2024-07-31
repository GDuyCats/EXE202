import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';

function CommentModal({ postId, closeModal, refreshPosts }) {
  const [comment, setComment] = useState('');
  const { token } = useContext(AuthContext);
  const accessToken = token?.accessToken;

  const handleCommentSubmit = () => {
    axios.post(`https://ohecaa.azurewebsites.net/api/Comment/CreateCommentWithPostId?postId=${postId}`, {
      content: comment
    }, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
      .then(response => {
        refreshPosts();  // Refresh the posts to update the comment count
        closeModal();  // Close the modal after comment is submitted
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-md w-1/3">
        <h2 className="text-xl mb-4">Add a Comment</h2>
        <textarea
          className="w-full p-2 border rounded-md"
          rows="4"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <div className="flex justify-end mt-4">
          <button onClick={closeModal} className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2">Cancel</button>
          <button onClick={handleCommentSubmit} className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default CommentModal;
