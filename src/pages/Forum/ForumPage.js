import { React, useContext, useEffect, useState } from 'react'
import forumbanner from '../../assets/forum.jpg'
import vector65 from '../../assets/Vector 65.png'
import vector66 from '../../assets/Vector 66.png'
import vector67 from '../../assets/Vector 67.png'
import vector68 from '../../assets/Vector 68.png'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import PostModal from '../../components/ForumPost/PostModal'
import axios from 'axios'

function ForumPage() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const { token, removeToken } = useContext(AuthContext);
  const accessToken = token?.accessToken;

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  useEffect(() => {
    if (token) {
      axios.get('https://ohecaa.azurewebsites.net/api/Posts/GetPostList', {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      })
      .then(response => {
        const { data } = response.data;
        if (Array.isArray(data)) {
          setPosts(data);
        } else {
          console.error('Expected an array but got:', data);
          setPosts([]);
        }
      })
      .catch(error => {
        console.log(error);
      });
      setRefresh(false);
    }
  }, [refresh, token, accessToken]);

  return (
    <>
      {token ? (
        <div className='relative overflow-hidden'>
          <img src={forumbanner} alt='banner_forum' className='w-full h-full' />
          <div className='absolute top-52 right-32'>
            <div className='w-[600px] h-[400px]'>
              <div className='bg-white opacity-80 w-full h-full'></div>
              <img src={vector65} alt='' className='absolute right-0 top-0 opacity-100' />
              <img src={vector66} alt='' className='absolute left-0 -bottom-[1px] ' />
              <img src={vector67} alt='' className='absolute left-10 top-10' />
              <img src={vector68} alt='' className='absolute right-10 bottom-10' />
            </div>
            <p className='font-allura absolute top-24 right-20 text-7xl text-blue_177f9f'>
              Cùng chia sẽ câu <br /> chuyện của bạn với <br /> mọi người
            </p>
          </div>
          <div className={`bg-blue_6bccde pt-10`}>
            <div className='flex bg-slate-900 w-[40%] mx-auto rounded-xl p-5 '>
              <img src={token?.user?.avatar} alt='avatar' className='w-[80px] h-[80px] rounded-full mx-5' />
              <div onClick={() => setOpenModal(true)} className='rounded-full w-[80%] bg-white cursor-pointer'>
                <p className='ml-10 mt-6 text-2xl'>{`Bạn đang nghĩ gì, ${token?.user?.firstName}?`}</p>
              </div>
            </div>
            {openModal && (<div onClick={() => setOpenModal(false)} className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>)}
            {openModal && <PostModal closeModal={setOpenModal} setRefreshForumPage={setRefresh} />}
            <div>
              <ul>
                {posts.map(post => (
                  <li key={post.id} className='pt-10 pl-28 bg-white'>
                    <p className='text-3xl'>{post.title}</p>
                    <p className='text-xl'>{post.content}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default ForumPage;
