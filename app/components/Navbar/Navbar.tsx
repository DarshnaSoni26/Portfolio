import React from "react";
import Nav from "./Nav";
import Image from "next/image";
import img from "../Navbar/Icon.png";

export default function Navbar() {
	return (
		<>
			<div className={`fixed top-0 right-0 w-1/6 h-screen bg-gray-950 `}>
				<div className='flex justify-center items-center mt-6'>
					<Image
						src={img}
						width={50}
						height={50}
						alt='Darshna Soni'
					/>
				</div>
				<Nav
					name='Home'
					link='/'
				/>
				<Nav
					name='About'
					link='#about'
				/>
				<Nav
					name='Skills'
					link='#skills'
				/>
				<Nav
					name='Projects'
					link='#projects'
				/>
				<Nav
					name='Contacts'
					link='#contact'
				/>
				<Nav
					name='Resume'
					link='../../Resume'
				/>
			</div>
		</>
	);
}
