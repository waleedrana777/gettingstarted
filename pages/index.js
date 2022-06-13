import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className='bg-linen h-screen text-raisinBlack'>
			<section className='getStarted flex flex-col'>
				<h1 className={`${styles.gettingStartedHeading} text-6xl tracking-wider px-12 pt-20 pb-4 font-display center z-0`}>
					Manage
					<br /> money
					<br /> in house{" "}
				</h1>
				<img className='w-full' src='/images/home-illustration.jpeg' alt='illustration' />
				<div className='flex content-center justify-center py-4'>
					<button type='button' className='text-2xl bg-middleBlueGreen h-12 w-12 rounded-full'>
						<i class='fa-solid fa-arrow-right'></i>
					</button>
					<span className='ml-2 text-xl font-body self-center'> Get Started </span>
				</div>
				<div className='bg-raisinBlack h-2 w-20 self-center rounded-full'></div>
			</section>
		</div>
	);
}
