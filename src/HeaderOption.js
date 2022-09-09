import React from 'react';
import './HeaderOption.css';
import { Avatar } from "@material-ui/core"

function HeaderOption({avatar, icon, title}) {
  return (
    <div className='headerOption'>
        {icon && <i className='headerOption__icon'>{icon}</i>}
        {avatar && <Avatar className="headerOption__icon" src={avatar} /> }
        <h3 className='headerOption__title'>{title}</h3>
    </div>
  )
}

export default HeaderOption