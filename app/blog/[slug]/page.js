import { unstable_ViewTransition as ViewTransition } from 'react';
import { getPostBySlug, getPostSlugs } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import Link from 'next/link';
import Arrow from '@/components/icons/Arrow';
import ThemeSwitch from '@/components/ThemeSwitch';
import Image from 'next/image';

// Create static pages for all blog posts during build time
export async function generateStaticParams() {
	const slugs = getPostSlugs();
	return slugs.map(slug => ({
		slug: slug.replace(/\.mdx$/, '')
	}));
}

export async function generateMetadata({ params }) {
	const { slug } = await params;
	const { meta } = getPostBySlug(slug);

	return {
		title: meta.title,
		description: meta.description
	};
}

export default async function BlogPost({ params }) {
	const { slug } = await params;
	const { meta, content } = getPostBySlug(slug);

	// rehype-pretty-code configuration for beautiful code blocks
	const options = {
		theme: 'github-dark'
	};

	return (
		<main className='min-h-screen max-w-4xl mx-auto flex flex-col font-montserrat p-6 sm:p-24'>
			<header className='flex justify-between items-center mb-12'>
				<Link
					href='/'
					className='flex items-center text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-primary transition-colors group'
				>
					<Arrow className='w-4 h-4 mr-2 rotate-180 transition-transform' />
					<span className='font-medium'>Back to Home</span>
				</Link>
				<ThemeSwitch />
			</header>

			<article className='flex flex-col'>
				<div className='mb-10'>
					<div className='flex items-center space-x-3 text-sm font-medium text-gray-500 dark:text-gray-400 mb-4'>
						<time dateTime={meta.date}>
							{new Date(meta.date).toLocaleDateString('en-US', {
								month: 'short',
								day: 'numeric',
								year: 'numeric'
							})}
						</time>
						<span className='w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700'></span>
						<span>{meta.readingTime} min read</span>
					</div>

					<ViewTransition name={`post-title-${slug}`}>
						<h1 className='text-3xl sm:text-4xl font-bold text-black dark:text-primary mb-6 leading-tight'>
							{meta.title}
						</h1>
					</ViewTransition>

					<div className='flex items-center space-x-4 pb-6 border-b border-gray-200 dark:border-gray-800'>
						<Image
							src='/profile.png'
							alt='Taha Mutlu Kanar'
							width={40}
							height={40}
							className='rounded-full bg-black saturate-0 dark:saturate-100'
						/>
						<div className='flex flex-col'>
							<span className='text-sm font-semibold text-black dark:text-primary'>
								Taha Mutlu Kanar
							</span>
							<a
								href='https://twitter.com/TahaKanar'
								target='_blank'
								rel='noopener noreferrer'
								className='text-xs text-blue-600 dark:text-blue-400 hover:underline'
							>
								@TahaKanar
							</a>
						</div>
					</div>
				</div>

				<div
					className='prose prose-base dark:prose-invert max-w-none 
					prose-headings:font-bold prose-headings:text-black dark:prose-headings:text-primary
					prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed
					prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:font-medium prose-a:no-underline hover:prose-a:underline
					prose-strong:text-black dark:prose-strong:text-primary prose-strong:font-semibold
					prose-code:text-pink-600 dark:prose-code:text-pink-400 prose-code:bg-pink-50 dark:prose-code:bg-pink-900/30 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none
					prose-pre:bg-[#0d1117] prose-pre:border prose-pre:border-gray-800 prose-pre:shadow-sm prose-pre:rounded-lg
					prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 dark:prose-blockquote:bg-blue-900/20 prose-blockquote:py-1.5 prose-blockquote:pr-4 prose-blockquote:rounded-r-md prose-blockquote:not-italic prose-blockquote:text-gray-700 dark:prose-blockquote:text-gray-300
					prose-li:text-gray-700 dark:prose-li:text-gray-300'
				>
					<MDXRemote
						source={content}
						options={{
							mdxOptions: {
								rehypePlugins: [[rehypePrettyCode, options]]
							}
						}}
					/>
				</div>
			</article>

			<footer className='mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 text-center'>
				<p className='text-gray-500 dark:text-gray-400'>
					Written by Taha Mutlu Kanar
				</p>
			</footer>
		</main>
	);
}
