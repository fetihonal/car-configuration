import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import {MENUITEMS} from './constant/step'
import logo from '../assets/img/logo.svg'
import allActions from './actions'


function Guide() {
	const [mainmenu, setMainMenu] = useState(MENUITEMS);
	const dispatch = useDispatch();
	useEffect(() => {
        var currentUrl = window.location.pathname;
        mainmenu.filter(items => {
            if (items.path === currentUrl)
				setNavActive(items)
        })
        return () => {
        }
	}, []);
	const setNavActive = (item) => {
        MENUITEMS.filter(menuItem => {
			dispatch(allActions.userActions.readMenu(MENUITEMS[1].title,MENUITEMS[1].path));
            if (menuItem !== item)
                menuItem.active = false
        })
        item.active = !item.active
        setMainMenu({ mainmenu: MENUITEMS })
	}
	// Click menu
	const toggletNavActive = (item,i) => {
		if (!item.active) {
			MENUITEMS.forEach(a => {
				if (MENUITEMS.includes(item))
					a.active = false
			});
		}
		item.active = !item.active
		setMainMenu({ mainmenu: MENUITEMS })
	}    
	return(
		<header>
			<nav>
				<div className="logo">
					<Link to="/">
						<img className="img-fluid" src={logo} alt="" />
					</Link>
				</div>
				<ul>
					{
						MENUITEMS.map((menuItem, i) =>
						<li className={`${menuItem.active ? 'active' : ''}`} key={i}>
							<Link
								to={`${process.env.PUBLIC_URL}${menuItem.path}`}
								className={`${menuItem.active ? 'active' : ''}`}
								onClick={() => toggletNavActive(menuItem,i)}>
								{menuItem.title}           
							</Link>
						</li>
						)
					}
				</ul>
			</nav>
		</header>
	)
}
export default Guide