import React from 'react';
import Head from 'next/head';
import { getPaginatedPosts } from '@lib/posts';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { BlogPost } from '@models/blogPost';
import PostListing from '@components/PostListing';

export const getStaticProps: GetStaticProps = async () => {
    const posts = getPaginatedPosts(1);

    return {
        props: {
            posts: posts.posts,
        },
    };
};

interface HomeProps {
    posts: BlogPost[]
}

const Home: React.FC<HomeProps> = ({ posts }) => (
    <>
        <Head><title>Blog - Keith Wagner</title></Head>
        <main>
            {posts.map((p) => (<PostListing key={p.id} post={p} />))}

            <ul className="pagination">
                <li className="next">
                    <Link href="/blog/2"><a className="paginate-next-a">Newer Posts &rarr;</a></Link>
                </li>
            </ul>
        </main>
    </>
);

export default Home;