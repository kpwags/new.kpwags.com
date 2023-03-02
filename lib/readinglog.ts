import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import marked from 'marked';
import { serialize } from 'next-mdx-remote/serialize';
import { ReadingLog } from '@models/ReadingLog';
import { BlogPost } from '@models/blogPost';
import generateTagUrl from './generateTagUrl';
import { postsPerPage } from './config';

const readingLogDirectory = path.join(process.cwd(), 'reading-logs');
const readingLogImagesDirectory = path.join(process.cwd(), 'public', 'images', 'readinglogs');

export const sortPosts = (posts: ReadingLog[]): ReadingLog[] => posts.sort((a: ReadingLog, b: ReadingLog) => {
    if (a.date < b.date) {
        return 1;
    }
    return -1;
});

export const getPostExcerpt = (html: string): string => {
    const endParagraphIndex = html.indexOf('</p>');
    const snippet = html.substring(0, endParagraphIndex);

    return snippet.replace('<p>', '');
};

export const getAllReadingLogs = (): ReadingLog[] => {
    const fileNames = fs.readdirSync(readingLogDirectory);

    const allPostsData: ReadingLog[] = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.mdx$/, '');

        // Read markdown file as string
        const fullPath = path.join(readingLogDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const { content, data } = matter(fileContents);

        const html = marked(content);
        const url = `/reading-log/${id}`;
        const excerpt = getPostExcerpt(html);

        const tags = data.tags || [] as string[];

        let socialImage = '';
        if (fs.existsSync(path.join(readingLogImagesDirectory, `${id}.jpg`))) {
            socialImage = `images/readinglogs/${id}.jpg`;
        }

        // Combine the data with the id
        return {
            id,
            title: data.title,
            number: parseInt(id, 10),
            excerpt: excerpt || null,
            date: data.date,
            url,
            tags: tags.map((t: string) => ({ name: t, url: generateTagUrl(t) })),
            content: html,
            commentIssueNumber: data.commentIssueNumber,
            socialImageUrl: socialImage,
        };
    });

    const sortedPosts = sortPosts(allPostsData);

    return sortedPosts.filter((p) => new Date(p.date) <= new Date());
};

export const getReadingLogData = async (readingLogNumber: number) : Promise<ReadingLog> => {
    const fullPath = path.join(readingLogDirectory, `${readingLogNumber}.mdx`);

    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const { content, data } = matter(fileContents);

    const html = marked(content);
    const excerpt = getPostExcerpt(html);

    const mdx = await serialize(content, { scope: data });

    const tags = data.tags || [] as string[];

    let socialImage = '';
    if (fs.existsSync(path.join(readingLogImagesDirectory, `${readingLogNumber}.jpg`))) {
        socialImage = `images/readinglogs/${readingLogNumber}.jpg`;
    }

    return {
        id: readingLogNumber.toString(),
        title: data.title,
        number: readingLogNumber,
        excerpt,
        date: data.date,
        url: `/reading-log/${readingLogNumber}`,
        tags: tags.map((t: string) => ({ name: t, url: generateTagUrl(t) })),
        content: mdx.compiledSource,
        commentIssueNumber: data.commentIssueNumber,
        socialImageUrl: socialImage,
    };
};

export const getPaginatedReadingLogs = (page: number, count = postsPerPage): { totalPages: number, posts: ReadingLog[]} => {
    const posts = getAllReadingLogs();

    const start = (page - 1) * 10;
    const end = start + count;

    const maxPage = Math.ceil(posts.length / postsPerPage);

    return {
        totalPages: maxPage,
        posts: posts.slice(start, end),
    };
};

export const getReadingLogCount = (): number => {
    const posts = getAllReadingLogs();
    return posts.length;
};

export const getReadingLogPages = (): { params: { page: string }}[] => {
    const readingLogCount = getReadingLogCount();

    const maxPage = Math.ceil(readingLogCount / postsPerPage);

    const paths = [];

    for (let x = 1; x <= maxPage; x += 1) {
        paths.push(x);
    }

    return paths.map((p) => ({
        params: {
            page: p.toString(),
        },
    }));
};

export const getAllReadingLogIds = (): { params: { readingLogNumber: string }}[] => {
    const fileNames = fs.readdirSync(readingLogDirectory);

    return fileNames.map((filename) => {
        const readingLogNumber = filename.replace(/\.mdx$/, '');

        return ({
            params: {
                readingLogNumber,
            },
        });
    });
};

export const convertToPost = (log: ReadingLog): BlogPost => {
    const post: BlogPost = {
        id: log.id,
        title: log.title,
        date: log.date,
        isRssOnly: false,
        excerpt: log.excerpt,
        url: log.url,
        content: log.content,
        description: log.excerpt,
        hasEmbeddedTweet: false,
        tags: log.tags,
        commentIssueNumber: log.commentIssueNumber,
        wordCount: 0,
        readTime: 0,
        socialImageUrl: log.socialImageUrl,
    };

    return post;
};