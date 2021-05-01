import React, { createContext, useState } from 'react';
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';
import './Header.css';
// import '../../css/responsive.css';

const Header = () => {
	return (

		<div className="bg">
			<Navbar></Navbar>
			<Banner></Banner>
		</div>
	);
};

export default Header;