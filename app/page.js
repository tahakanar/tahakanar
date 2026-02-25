import Arrow from '@/components/icons/Arrow';
import GithubIcon from '@/components/icons/Github';
import LinkedInIcon from '@/components/icons/LinkedIn';
import Mail from '@/components/icons/Mail';

import TwitterIcon from '@/components/icons/Twitter';
import ThemeSwitch from '@/components/ThemeSwitch';
import Image from 'next/image';
import Link from 'next/link';

import { getAllPosts } from '@/lib/mdx';

export default async function Home() {
	const posts = getAllPosts();

	return (
		<main className='min-h-screen max-w-5xl mx-auto flex flex-col font-montserrat p-6 sm:p-24'>
			<div className='flex justify-end mb-12'>
				<ThemeSwitch />
			</div>
			<div className='text-black dark:text-primary'>
				<h1 className='text-4xl font-bold'>Taha Mutlu Kanar</h1>
				<p className='text-xl'>Software Developer</p>
			</div>

			<div className='flex flex-col sm:flex-row items-start sm:items-center my-5'>
				<Image
					src='/profile.png'
					width='100'
					height='100'
					className='rounded-full bg-black saturate-0 dark:saturate-100 transition-all duration-700 hover:saturate-100'
					priority
					alt='Taha Mutlu Kanar Profile Image'
				/>
				<p className='mt-3 sm:mt-0 sm:ml-3'>
					Hey, I&apos;m Taha, a software developer residing in Izmir. I&apos;m
					currently working at Akinon.
				</p>
			</div>
			<hr className='h-1 block sm:hidden mb-3' />

			<p className='mb-2'>
				I specialize in building scalable, user-centric web applications. Driven
				by a passion for clean code and modern frontend architecture, I thrive
				in collaborative environments where complex problems meet elegant
				solutions.
			</p>
			<p>
				Whether it&apos;s crafting intuitive interfaces or optimizing
				performance, I&apos;m always eager to push the boundaries of what&apos;s
				possible on the web. You can always reach me via{' '}
				<Link
					className='font-medium text-blue-600 dark:text-blue-400 hover:underline'
					href='mailto:tahakanar@gmail.com'
				>
					email
				</Link>
				.
			</p>
			<div className='flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-2 mt-4'>
				<Link
					className='border border-1 flex-1 p-3 rounded-md flex justify-between items-center border-black dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-900/50 transition-colors'
					href='mailto:tahakanar@gmail.com'
					target='_blank'
				>
					<div className='flex items-center space-x-3'>
						<Mail className='text-black dark:text-primary w-6' />
						<span className='font-medium text-black dark:text-primary'>
							Email
						</span>
					</div>
					<Arrow className='text-black dark:text-primary' />
				</Link>
				<Link
					className='border border-1 flex-1 p-3 rounded-md flex justify-between items-center border-black dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-900/50 transition-colors'
					href='https://twitter.com/TahaKanar'
					target='_blank'
				>
					<div className='flex items-center space-x-3'>
						<TwitterIcon className='text-black dark:text-primary w-6' />
						<span className='font-medium text-black dark:text-primary'>
							Twitter
						</span>
					</div>
					<Arrow className='text-black dark:text-primary' />
				</Link>
				<Link
					className='border border-1 flex-1 p-3 rounded-md flex justify-between items-center border-black dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-900/50 transition-colors'
					href='https://github.com/tahakanar'
					target='_blank'
				>
					<div className='flex items-center space-x-3'>
						<GithubIcon className='text-black dark:text-primary w-6' />
						<span className='font-medium text-black dark:text-primary'>
							Github
						</span>
					</div>
					<Arrow className='text-black dark:text-primary' />
				</Link>
				<Link
					className='border border-1 flex-1 p-3 rounded-md flex justify-between items-center border-black dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-900/50 transition-colors'
					href='https://www.linkedin.com/in/tahamutlukanar/'
					target='_blank'
				>
					<div className='flex items-center space-x-2'>
						<LinkedInIcon className='text-black dark:text-primary w-6' />
						<span className='font-medium text-black dark:text-primary'>
							LinkedIn
						</span>
					</div>
					<Arrow className='text-black dark:text-primary' />
				</Link>
			</div>

			<div className='mt-16'>
				<h2 className='text-2xl font-bold mb-6 text-black dark:text-primary'>
					Latest Posts
				</h2>
				<div className='flex flex-col space-y-8'>
					{posts.map(post => (
						<Link
							key={post.slug}
							href={`/blog/${post.slug}`}
							className='group flex flex-col p-6 -mx-6 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-900/50 transition-all duration-300'
						>
							<div className='flex items-center space-x-2.5 text-xs text-gray-500 dark:text-gray-400 mb-2'>
								<time dateTime={post.meta.date} className='font-medium'>
									{new Date(post.meta.date).toLocaleDateString('en-US', {
										month: 'short',
										day: 'numeric',
										year: 'numeric'
									})}
								</time>
								<span className='w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700'></span>
								<span>{post.meta.readingTime} min read</span>
							</div>

							<h3 className='text-lg sm:text-xl font-bold text-black dark:text-primary mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
								{post.meta.title}
							</h3>

							<p className='text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3 line-clamp-2'>
								{post.meta.description}
							</p>

							<span className='text-xs font-semibold text-blue-600 dark:text-blue-400 flex items-center '>
								Read article
								<span className='group-hover:translate-x-1 transition-transform duration-300'>
									<svg
										className='w-4 h-4 ml-1.5'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M14 5l7 7m0 0l-7 7m7-7H3'
										/>
									</svg>
								</span>
							</span>
						</Link>
					))}
				</div>
			</div>
		</main>
	);
}
