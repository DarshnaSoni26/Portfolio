import Image from "next/image";
import React from "react";

interface project {
	Title: string;
	Desc: string;
	Picture1: string | any;
	Picture2: string | any;
}
export default function Projects() {
	const ProjectItems: project[] = [
		{
			Title: "The Experts",
			Desc: "It is a dummy website created for a company, encompassing the essential elements typically found in an organizational website. It has been developed using vanilla HTML and CSS.",
			Picture1: "/Images/project/p-1.png",
			Picture2: "/Images/project/P-1.1.png",
		},
		{
			Title: "Linuji",
			Desc: "It is a dummy website created for a company, encompassing the essential elements typically found in an organizational website. It has been developed using vanilla HTML and CSS.",
			Picture1: "/Images/project/P-2.png",
			Picture2: "/Images/project/p-2.1.png",
		},
		{
			Title: "True North Aviation",
			Desc: "It is a mock helicopter website created with a single-page layout. It features navigation targets that provide smooth transitions within the same page, and it was developed using vanilla HTML and CSS.",
			Picture1: "/Images/project/P-3.png",
			Picture2: "/Images/project/p-3.1.png",
		},
		{
			Title: "AdminPanel",
			Desc: "This admin panel serves as a specialized tool designed with the primary purpose of establishing connections and interactions between databases and websites. It is specifically tailored to facilitate a seamless and controlled integration process, ensuring that data from databases is effectively linked and utilized within websites according to predefined configurations and requirements.",
			Picture1: "/Images/project/P-4.png",
			Picture2: "/Images/project/p-4.1.png",
		},
		{
			Title: "Random Quote Generator",
			Desc: "It is a web application that presents random quotes on a webpage, with fresh quotes generated daily. The   application was created using React JS, REST API, and Bootstrap to establish the design framework.",
			Picture1: "/Images/project/P-5.png",
			Picture2: "/Images/project/p-5.1.png",
		},
		{
			Title: "Monthly Activity Tracker",
			Desc: "It is a web application that allows you to log your activities and track them on a monthly basis. It utilizes React JS and the Local Storage API for implementation, and the structural design is based on code from Bootstrap's documentation.",
			Picture1: "/Images/project/P-6.png",
			Picture2: "/Images/project/p-6.1.png",
		},
	];
	return (
		<>
			<div
				id='projects'
				className=' bg-orange-50 md:w-5/6 md:h-auto p-5 md:px-5 px-0'>
				<h1 className='md:text-4xl text-3xl text-red-950 font-bold text-center uppercase'>
					Projects
				</h1>
				<div className='flex flex-wrap justify-center'>
					{ProjectItems.map((project, index) => (
						<div
							className='card md:w-2/5 bg-orange-100 shadow-xl md:m-10 md:ml-14 md:inline-block md:flex-grow m-6 sm:w-2/3 '
							key={index}>
							<figure className='md:px-10 md:pt-10 md:p-0 p-4'>
								<div className='carousel carousel-center md:max-w-md max-h-48 bg-neutral rounded-box '>
									<div className='carousel-item'>
										<Image
											src={project.Picture1}
											alt={project.Title}
											width={400}
											height={400}
											className='rounded-xl'
										/>
									</div>
									<div className='carousel-item'>
										<Image
											src={project.Picture2}
											alt={project.Title}
											width={400}
											height={400}
											className='rounded-xl'
										/>
									</div>
								</div>
							</figure>
							<div className='card-body items-center text-center pt-0 md:pt-8'>
								<h2 className='card-title'>{project.Title}</h2>
								<p>{project.Desc}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
