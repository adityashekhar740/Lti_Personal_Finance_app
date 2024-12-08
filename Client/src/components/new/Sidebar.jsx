import React from 'react'
import {
    BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,
    BsListCheck, BsMenuButtonWideFill, BsFillGearFill, BsArrowDownSquareFill
}
    from 'react-icons/bs'
import { MdFace6, MdHexagon } from 'react-icons/md'
import { IoIosHelpCircle } from 'react-icons/io'

function Sidebar({ openSidebarToggle, OpenSidebar }) {
    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <div >
                <div className='sidebar-title'>
                    <div className='sidebar-brand'>
                        <MdHexagon className='icon_header' /> Dashboard
                    </div>
                    <span className='icon close_icon' onClick={OpenSidebar}>X</span>
                </div>

                <ul className='sidebar-list'>
                    <li className='sidebar-list-item'>
                        <a href="">
                            <BsGrid1X2Fill className='icon' /> Dashboard
                        </a>
                    </li>
                    <li className='sidebar-list-item'>
                        <a href="">
                            <BsFillArchiveFill className='icon' /> Income
                        </a>
                    </li>
                    <li className='sidebar-list-item'>
                        <a href="">
                            <BsPeopleFill className='icon' /> Budget
                        </a>
                    </li>
                    <li className='sidebar-list-item'>
                        <a href="">
                            <BsListCheck className='icon' /> Investment
                        </a>
                    </li>
                    <li className='sidebar-list-item'>
                        <a href="">
                             <BsFillGrid3X3GapFill className='card_icon' /> Spent
                        </a>
                    </li>
                    <li className='sidebar-list-item'>
                        <a href="">
                            <IoIosHelpCircle className='icon' /> Help 
                        </a>
                    </li>
                </ul>
            </div>


            <div className='btm-btm'>
                <div className='btm-1'>
                    {/* <div className='btm-icon'>
                        <MdFace6 style={{ height: "40px" }} />
                    </div> */}
                    <div className="btm-name">
                        <h1>Yash</h1>
                        <span>PennyPilot</span>
                    </div>

                </div>
                {/* <div className='btm-arrow'>
                    <BsArrowDownSquareFill style={{ height: "40px" }} />
                </div> */}
            </div>

        </aside>
    )
}

export default Sidebar