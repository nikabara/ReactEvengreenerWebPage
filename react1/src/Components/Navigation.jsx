import { React } from 'react'
import { useState } from 'react'
import '../Components/Navigation.css'

const NavbarRow1 = (props) => {
    const [itemCount, setItemCount] = useState(0);

    return (
        <div className='row-1'>
            <div className='social-medias'>
                <i className='bi bi-tiktok'></i>
                <i className='bi bi-youtube'></i>
                <i className='bi bi-instagram'></i>
                <i className='bi bi-facebook'></i>
                <i className='bi bi-pinterest'></i>
            </div>
                <div className='webpage-logo'></div>
            <div className='user-utilities'>
                <div className='search-div'> <i className='bi bi-search'></i> <p>Search</p> </div>
                <i className='bi bi-heart'></i>
                <i className='bi bi-person'></i>
                <div className='bi-bag-div' onClick={() => itemCount < props.maxAmm ? setItemCount(itemCount + 1) : alert(`${props.message}`)}>
                    <i className='bi bi-bag'></i>
                    <p className='item-count'>{itemCount}</p>
                </div>
            </div>
        </div>
    )
}

const NavbarRow2 = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='search-tabs'>
            <ul className='tabs-ul'>
                <li className="tabs-li">OFFERS</li>
                <li className="tabs-li">MOST WANTED</li>
                <li className="tabs-li">GARDENING</li>
                <li className="tabs-li">COMPOSTING</li>
                <li className="tabs-li">WATER SAVING</li>
                <li className="tabs-li">RECYCLING</li>
                <li className="tabs-li">BRANDS</li>
                <li className="tabs-li">LEARN 📚</li>
                <li className="tabs-li">EARN REWARDS</li>
                <li className="tabs-li">SUPPORT</li>
            </ul>
        </div>
    )
}

export const Navbar = (props) => {
    return (
        <>
        <nav className='navigation-main'>
            <NavbarRow1 maxAmm = {props.maxAmm} message = {props.message}/>
            <NavbarRow2/>
        </nav>
        </>
    )
}