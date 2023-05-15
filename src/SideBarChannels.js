import React from 'react'

const SideBarChannel = ({id,channel}) => {
  return (
    <div className='sidebarChannel'>
      <h4>
        <span className='sidebarChannel__hash'>{id}</span> {channel}
      </h4>
    </div>
  )
}

export default SideBarChannel
