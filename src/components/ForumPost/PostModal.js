import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import React, { useState, useContext } from 'react'
function PostModal({ closeModal, setRefreshForumPage}) {
 
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const { token } = useContext(AuthContext);
  const [error, setError] = useState(false)
  const [createPostSuccess, setCreatePostSuccess] = useState(false)
  const accessToken = token?.accessToken

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('Title', title);
    formData.append('Content', content);

    try {
      const config = {
        headers: {
          'Authorization': `Bearer ${accessToken}`,// Thêm token vào headers
          'Content-Type': 'multipart/formdata'
        }   
      }
     
      const response = await axios.post('https://ohecaa.azurewebsites.net/api/Posts/CreatePost', formData, config)
      console.log('Tạo bài viết thành công', response.data)
      setCreatePostSuccess(true) 
      setError(false)  
      closeModal(false)
      setRefreshForumPage(true)
      setTitle('')
      setContent('')
    }
    catch (error) {
      setError(true)  
      console.log(error)
    }
  }
  // onClick={() => closeModal(false)}
  return (
    <div className=' fixed inset-[36%] z-50 w-[500px] h-[425px] bg-black_242526 rounded-2xl'>
      <div className='text-gray_b0b3b8 font-bold text-2xl ml-[32%] p-5'>Create Post</div>
      <div className='border-b border-gray_b0b3b8'></div>
      <form onSubmit={handleSubmit} className='p-5'>
        <div className='flex'>
          <img src={token?.user?.avatar} className='w-[50px] rounded-full' alt='avatar'/>
          <p className='text-white ml-2 font-bold'>{token?.user?.lastName} {token?.user?.firstName}</p>
        </div>
        <div className='mt-2'> 
          <input
            type="text"
            value={title}
            placeholder='Tiêu đề'
            className="bg-transparent border-none text-gray_b0b3b8 placeholder:text-gray_A9ACB1 placeholder:text-2xl"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <textarea
            type='text'
            value={content}
            placeholder='Bạn đang nghĩ gì ?'
            className="overflow-visible bg-transparent border-none text-gray_b0b3b8 placeholder:text-gray_A9ACB1 placeholder:text-2xl w-full"
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        {createPostSuccess && <div><p>Tạo bài viết thành công</p></div>}
        {error && <div><p className='text-red-700 text-3xl ml-2'>Bạn không thể để trống tựa đề hoặc bài viết !</p></div>}
        <button type="submit" className='w-full text-white rounded-3xl bg-blue_177f9f p-2 mt-11'>Tạo bài viết</button>
      </form>
    </div>
  )
}

export default PostModal
