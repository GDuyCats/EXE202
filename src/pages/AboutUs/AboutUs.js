import React from 'react'
import WithSlogan from '../../assets/With slogan.png'
import infor from '../../assets/Screenshot 2024-05-24 205833.png'
import Pic1 from '../../assets/Pic (1).jpg'
import Pic2 from '../../assets/Pic (2).jpg'
import Pic3 from '../../assets/Pic (3).jpg'
import vector1 from '../../assets/Vector 1.png'
import vector2 from '../../assets/Vector 2.png'
import Subtract from '../../assets/Subtract.png'
import Rectangle from '../../assets/Rectangle.png'
import Danh from '../../assets/Screenshot 2024-05-25 200721.png'
import Manh from '../../assets/Screenshot 2024-05-25 200743.png'
import Chau from '../../assets/Screenshot 2024-05-25 200753.png'
import Hien from '../../assets/Screenshot 2024-05-25 200806.png'
import Luan from '../../assets/Screenshot 2024-05-25 200827.png'
import Hieu from '../../assets/Screenshot 2024-05-25 200850.png'

function AboutUs() {
  return (
    <>
      <div className='w-full h-full mt-36 bg-gradient-to-b from-white to-blue_c0foff py-20'>
        <img src={WithSlogan} alt='Slogan' className='w-[500px] h-[500px] mx-auto' />
      </div>
      <div>
        <img src={infor} alt='' className='w-full' />
      </div>
      <div className='w-full h-full bg-blue_c0foff relative'>
        <div className='pt-20'>
          <div className='w-full h-full pt-10 bg-gradient-to-r from-blue_c0foff to-blue_buy flex rounded-r-full relative'>
            <div>
              <div className='mr-0 ml-auto translate-x-[60%] relative'>
                <img src={Subtract} className='h-[120px] w-[800px] ' />
                <div>
                  <p className='absolute top-[5%] right-[40%] font-semibold text-6xl text-blue_177f9f'>Về OHECA</p>
                </div>
                <div>
                  <p className='text-center text-4xl text-blue_073d4d mt-10'>
                    OHeCa được lập ra để phân phối
                    <br /> các sản phẩm chất lượng cao
                    <br /> cho người cao tuổi. Các sản phẩm được
                    <br /> chúng tôi phân phối đều có giấy tờ
                    <br /> thẩm định và được chọn lựa từ các
                    <br /> nhà sản xuất hàng đầu để quý
                    <br />khách có thể yên tâm khi lựa chọn
                    <br /> sản phẩm cho người thân của mình.
                    <br />Ngoài ra, OHeCa còn có 1 diễn
                    <br />đàn người dùng để quý khách
                    <br />có thể chia sẻ với nhau.
                  </p>
                </div>
              </div>
            </div>
            <div className='ml-auto mr-5 -mt-5 pb-3'>
              <img src={Pic1} alt='' className='rounded-full w-[650px] h-[650px] ' />
            </div>
          </div>
        </div>
        <div className='pb-20'>
          <div className='w-full h-full mt-20 bg-gradient-to-r from-blue_buy to-blue_c0foff flex rounded-l-full relative'>
            <div className='mr-auto ml-5 mt-5 pb-3'>
              <img src={Pic2} alt='' className='rounded-full w-[650px] h-[650px] ' />
            </div>
            <div className='mt-10 relative'>
              <img src={Subtract} className='h-[120px] w-[800px] -scale-x-100 -translate-x-[60%]' />
              <div>
                <p className='absolute top-[5%] -left-[40%] font-semibold text-6xl text-blue_177f9f'>SỨ MỆNH CỦA OHECA</p>
              </div>
              <div>
                <p className='text-center text-4xl text-blue_073d4d mt-10 -translate-x-[60%]'>
                  “Uống nước nhớ nguồn” đã từ
                  <br /> lâu đã là truyền thống đáng
                  <br /> quý của người dân Việt Nam
                  <br /> ta. Theo đúng tinh thần đó,
                  <br /> những sản phẩm OHeGa cung
                  <br /> cấp cam kết luôn đặt sức khỏe
                  <br /> của người thân quý khách lên
                  <br /> trên hết.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img src={vector1} className='absolute left-5 top-20' />
        <img src={vector2} className='absolute left-16 top-10' />
        <img src={vector1} className='absolute right-20 bottom-8 -scale-x-100 -scale-y-100' />
        <img src={vector2} className='absolute right-1 bottom-24 rotate-90 -scale-x-100' />
      </div>
      <div className='w-full h-full'>
        <img src={Pic3} className='w-full h-full' />
      </div>
      <div className='w-full h-full'>
        <div className='relative'>
          <img src={Rectangle} className='w-full h-full' />
          <div className='w-[1300px] h-[130px] text-blue_073d4d absolute top-5 left-1/2 -translate-x-[50%]'>
             <p className='text-5xl text-center mt-10'>NHÓM PHÁT TRIỂN OHECA</p>
             <div className='grid grid-cols-3 gap-32 pt-36'>
              <div>
                <img src={Danh} className='rounded-full'/>
                <div>
                  <p className='text-center text-blue_073d4d text-4xl font-medium mt-10'>ĐẶNG CÔNG DANH<br/><span className='font-thin'>CEO</span></p>
                </div>
              </div>
              <div>
                <img src={Manh} className='rounded-full'/>
                <div>
                  <p className='text-center text-blue_073d4d text-4xl font-medium mt-10'>NGUYỄN ĐỨC MẠNH<br/><span className='font-thin'>CFO</span></p>
                </div>
              </div>
              <div>
                <img src={Chau} className='rounded-full'/>
                <div>
                  <p className='text-center text-blue_073d4d text-4xl font-medium mt-10'>HUỲNH MÌNH CHÂU<br/><span className='font-thin'>CTO</span></p>
                </div>
              </div>
              <div>
                <img src={Hien} className='rounded-full'/>
                <div>
                  <p className='text-center text-blue_073d4d text-4xl font-medium mt-10'>DƯƠNG THI HIỀN<br/><span className='font-thin'>CTO</span></p>
                </div>
              </div>
              {/* <div>
                <img src={Luan} className='rounded-full'/>
              </div> */}
              <div>
                <img src={Hieu} className='rounded-full'/>
                <div>
                  <p className='text-center text-blue_073d4d text-4xl font-medium mt-10'>VŨ TRẦN TRUNG HIẾU<br/><span className='font-thin'>CMO</span></p>
                </div>
              </div>
          </div>
          </div>
          
        </div>
      </div>
    </>

  )
}

export default AboutUs