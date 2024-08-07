import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import DefaultProfilePicture from '../../assets/profile-default-icon-2048x2045-u3j7s5nj.png';

function CommentModal({ postId, closeModal, refreshPosts }) {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const { token } = useContext(AuthContext);
  const accessToken = token?.accessToken;

  console.log(accessToken);
  useEffect(() => {
    console.log('Fetching comments for post ID:', postId);
    axios.get(`https://ohecaa.azurewebsites.net/api/Comment/GetCommentByPostId?postId=${postId}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        console.log('Comments fetched:', response.data);
        if (response.data.success) {
          const commentsData = response.data.data;
          const userPromises = commentsData.map(comment => 
            axios.get(`https://ohecaa.azurewebsites.net/api/User/GetAccountById/${comment.userId}`, {
              headers: {
                'Authorization': `Bearer ${accessToken}`
              }
            })
          );

          Promise.all(userPromises)
            .then(userResponses => {
              const commentsWithUserData = commentsData.map((comment, index) => ({
                ...comment,
                user: userResponses[index].data.data
              }));
              console.log('Comments with user data:', commentsWithUserData);
              setComments(commentsWithUserData);
            })
            .catch(error => {
              console.error('Error fetching user data:', error);
            });
        }
      })
      .catch(error => {
        console.error('Error fetching comments:', error);
      });
  }, [postId, accessToken]);

  const handleCommentSubmit = () => {
    console.log('Submitting comment:', comment);
    const formData = new FormData();
    formData.append('Content', comment);
  
    axios.post(`https://ohecaa.azurewebsites.net/api/Comment/CreateCommentWithPostId?postId=${postId}`, formData, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(response => {
        console.log('Comment submission response:', response);
        if (response.status === 200 || response.status === 201) {
          refreshPosts();  // Refresh the posts to update the comment count
          closeModal();  // Close the modal after comment is submitted
        } else {
          console.error('Comment submission failed:', response.data.message);
        }
      })
      .catch(error => {
        console.error('Error submitting comment:', error.response ? error.response.data : error.message);
      });
  };
  

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-md w-2/5">
        <h3 className="text-lg mt-4">Bình Luận</h3>
        <ul className="mt-2">
          {comments?.map(comment => (
            <li key={comment?.id} className="border-b py-2 flex items-start">
              <img 
                src={comment?.user?.avatar || DefaultProfilePicture}
                alt={`${comment?.user?.firstName} ${comment?.user?.lastName}`}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <p className="font-bold">{`${comment?.user?.firstName} ${comment?.user?.lastName}`}</p>
                <p>{comment?.content}</p>
              </div>
            </li>
          ))}
        </ul>
        <textarea
          placeholder='Thêm bình luận'
          className="w-full p-2 border rounded-md resize-none"
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
