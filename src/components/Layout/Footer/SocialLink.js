import React from 'react'
import { SocialIcon } from 'react-social-icons'
function SocialLink() {
    return (
        <div className='ml-20 m-auto flex space-x-5 items-center'>
            <div className='space-x-5 mb-5'>
                <SocialIcon url="https://www.youtube.com/channel/UCRv3kzozLdAWDexsv-3L3Fg" />
                <SocialIcon url="https://www.facebook.com/profile.php?id=61559928926173" />
                <SocialIcon url="https://www.instagram.com/gduycats" />
                <SocialIcon url='https://x.com/gduycat' />
            </div>
            <p className='text-blue_6bccde text-2xl mb-8 m-auto'>© 2024-2034 FPT University. All rights reserved.</p>
        </div>
    )
}

export default SocialLink