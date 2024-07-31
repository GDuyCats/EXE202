import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import React, { useState, useContext, useEffect } from 'react';
import classNames from 'classnames';

function PostModal({ closeModal, setRefreshForumPage }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { token } = useContext(AuthContext);
  const [error, setError] = useState(false);
  const [createPostSuccess, setCreatePostSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const accessToken = token?.accessToken;

  useEffect(() => {
    const savedTitle = localStorage.getItem('postTitle');
    const savedContent = localStorage.getItem('postContent');
    if (savedTitle) setTitle(savedTitle);
    if (savedContent) setContent(savedContent);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    console.log('Title:', title);
    console.log('Content:', content);

    if (!title.trim() || !content.trim()) {
      setError(true);
      setIsLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append('Title', title);
    formData.append('Content', content);

    try {
      const config = {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'multipart/form-data',
        },
      };

      const response = await axios.post('https://ohecaa.azurewebsites.net/api/Posts/CreatePost', formData, config);
      console.log('Tạo bài viết thành công', response.data);
      setCreatePostSuccess(true);
      setError(false);
      closeModal(false);
      setRefreshForumPage(true);
      setTitle('');
      setContent('');
      localStorage.removeItem('postTitle');
      localStorage.removeItem('postContent');
    } catch (error) {
      setError(true);
      console.log(error.response ? error.response.data : error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    localStorage.setItem('postTitle', e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
    localStorage.setItem('postContent', e.target.value);
  };

  return (
    <div className='fixed inset-1/3 ml-8 z-50 w-[600px] h-[600px] bg-black_242526 rounded-2xl overflow-auto'>
      <div className='text-gray_b0b3b8 font-bold text-2xl text-center p-5'>Create Post</div>
      <div className='border-b border-gray_b0b3b8'></div>
      <form onSubmit={handleSubmit} className='p-5'>
        <div className='flex items-center mb-4'>
          <img src={token?.user?.avatar} className='w-12 h-12 rounded-full' alt='avatar' />
          <p className='text-white ml-2 font-bold'>{token?.user?.lastName} {token?.user?.firstName}</p>
        </div>
        <div className='mb-4'>
          <input
            type="text"
            value={title}
            placeholder='Tiêu đề'
            className="bg-transparent border-none text-gray_b0b3b8 placeholder:text-gray_A9ACB1 placeholder:text-2xl w-full"
            onChange={handleTitleChange}
          />
        </div>
        <div className='mb-4'>
          <textarea
            value={content}
            placeholder='Bạn đang nghĩ gì ?'
            className={classNames(
              'bg-transparent border-none text-gray_b0b3b8 placeholder:text-gray_A9ACB1 placeholder:text-2xl w-full transition-all duration-300 resize-none',
              {
                'text-2xl': content.length <= 100,
                'text-xl h-48': content.length > 100,
              }
            )}
            onChange={handleContentChange}
            style={{ maxHeight: '200px', overflowY: 'auto' }}
          />
        </div>
        {createPostSuccess && <div className='text-green-500 mt-2'>Tạo bài viết thành công</div>}
        {error && <div className='text-red-700 text-xs ml-2'>Bạn không thể để trống tựa đề hoặc bài viết !</div>}
        <button
          type="submit"
          className='w-[300px] p-2 text-white rounded-3xl bg-blue_177f9f flex items-center justify-center absolute bottom-5 left-[50%] -translate-x-1/2'
          disabled={isLoading}
        >
          {isLoading ?
            <div className='flex items-center justify-center'>
              <p className='text-xl font-bold'>Vui lòng chờ&nbsp;&nbsp;</p>
              <span className='animate-bounce text-xl font-bold'>.</span>
              <span className='text-xl font-bold animate-bounce [animation-delay:-0.15s]'>.</span>
              <span className='[animation-delay:-0.3s] animate-bounce text-xl font-bold'>.</span>
            </div>
            : 'Tạo bài viết'}
        </button>
      </form>
    </div>
  );
}

export default PostModal;
