interface EmbeddedTweetProps {
    text: string
    name: string
    twitterUsername: string
    tweetUrl: string
    tweetDate: string
}

const EmbeddedTweet = ({
    text,
    name,
    twitterUsername,
    tweetUrl,
    tweetDate,
}: EmbeddedTweetProps): JSX.Element => (
    <>
        <blockquote className="twitter-tweet" style={{ marginTop: 20, marginBottom: 20 }}>
            <p lang="en" dir="ltr">{text}</p>
            &mdash;
            {' '}
            {`${name} (@${twitterUsername})`}
            {' '}
            <a href={tweetUrl} target="_blank" rel="noopener noreferrer">{tweetDate}</a>
        </blockquote>
    </>
);

export default EmbeddedTweet;