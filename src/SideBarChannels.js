import React from 'react'

const SideBarChannel = ({ id,channelName }) => {
  return (
    <div className='sidebarChannel'>
      <h4>
        <span className='sidebarChannel__hash'>{id}</span> {channelName}
      </h4>
    </div>
  )
}

export default SideBarChannel
