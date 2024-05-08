import Content from "./components/Content";
import Navbar from "./components/Navbar/Navbar";

export default function Home() {
	return (
		<main>
			<Content />
			<div className='hidden md:block'>
				<Navbar />
			</div>
		</main>
	);
}
