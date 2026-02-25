import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogDirectory = path.join(process.cwd(), 'content/blog');

export function getPostSlugs() {
	return fs.readdirSync(blogDirectory);
}

export function getPostBySlug(slug) {
	const realSlug = slug.replace(/\.mdx$/, '');
	const fullPath = path.join(blogDirectory, `${realSlug}.mdx`);
	const fileContents = fs.readFileSync(fullPath, 'utf8');
	const { data, content } = matter(fileContents);

	// Calculate reading time
	const wordsPerMinute = 200;
	const noOfWords = content.split(/\s/g).length;
	const minutes = noOfWords / wordsPerMinute;
	const readingTime = Math.ceil(minutes);

	return {
		slug: realSlug,
		meta: { ...data, readingTime },
		content
	};
}

export function getAllPosts() {
	const slugs = getPostSlugs();
	const posts = slugs
		.filter(slug => slug.endsWith('.mdx'))
		.map(slug => getPostBySlug(slug))
		.sort((post1, post2) => (post1.meta.date > post2.meta.date ? -1 : 1));

	return posts;
}
