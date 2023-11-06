import PostInCol from "./PostInCol";

type FeaturedImage = {
    node: {
        sourceUrl: string;
    };
};

type Post = {
    id: string;
    title: string;
    featuredImage: FeaturedImage;
    excerpt: string;
    uri: string;
};

type Props = {
    posts: Post[];
};

const BlogPosts = (props: Props) => {
    return (
        <div className="container blog-posts-section">
            <div className="row">
                {props.posts?.map((post: Post) => (
                    <div
                        key={post.id}
                        className="col-sm-6 col-md-4 col-lg-3 mb-4 md-md-3"
                    >
                        <PostInCol
                            id={post.id}
                            title={post.title}
                            image={post.featuredImage?.node?.sourceUrl}
                            excerpt={post.excerpt}
                            uri={post.uri}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogPosts;
