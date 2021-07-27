import { FC } from 'react';
import DefaultLayout from '@components/DefaultLayout/DefaultLayout';
import { GetStaticProps, GetStaticPaths } from 'next';
import { getAllPostIds, getPostData } from '@lib/posts';
import { BlogPost } from '@models/blogPost';

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds(true);

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postData = getPostData(params.year.toString(), params.month.toString(), params.day.toString(), params.id.toString().replace(/\.html$/, ''));

    return {
        props: {
            post: postData,
        },
    };
};

interface PostProps {
    post: BlogPost
}

const Post: FC<PostProps> = ({ post }) => (
    <DefaultLayout>
        <h2>{post.title}</h2>
        <div><em>{post.date}</em></div>
        <div dangerouslySetInnerHTML={{ __html: post.content || 'No content found' }} />
    </DefaultLayout>
);

export default Post;
