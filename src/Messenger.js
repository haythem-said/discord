import { Avatar } from '@mui/material'
import React from 'react'

const Messenger = () => {
  return (
    
      <div className='message'> 
      
      <Avatar src='/images/user.jpg'/>
      <div className='messengerInfo'>
        <h4>hello</h4>
        <span className='messageTimes'>{'16'+'mai'+'23:42'}</span>
      </div>
      </div>
    
  )
}

export default Messenger
