import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className='bg-linen text-raisinBlack'>
			<section className='getStarted [&:>*]:m-3'>
				<h1 className='text-5xl font-display center'>
					Manage
					<br /> money
					<br /> in house{" "}
				</h1>
				<div>
					<img src='/images/home-illustration.jpeg' alt='illustration' />
					<button type='button' className='bg-middleBlueGreen h-12 w-12 rounded-full'>
						{`->`}
					</button>
					<span className='ml-2 text-xl font-body'> Get Started </span>
				</div>
			</section>
		</div>
	);
}
