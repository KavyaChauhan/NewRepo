import React from 'react';
import './sidebar.scss';
import { SidebarData } from './sidebarData';

export const Sidebar=()=>{
    return(
        <div className="Sidebar">
            <ul className="SidebarList">
            {SidebarData.map((val,key)=>{
            return(
                
                    <li key={key} className="row">
                        <div className="title">{val.title}</div>
                        <div className="icon">{val.icon}</div>
                    </li>
               
            )
        })}
         </ul>
         </div>
    )
}
