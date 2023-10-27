import { gql, useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import PostInCol from "./PostInCol";

type Post = {
    id: string;
    title: string;
    featuredImage: any;
    image: string;
    excerpt: string;
    uri: string;
};

const BlogPostsSection = () => {
    const GET_POSTS = gql`
        query BlogPosts {
            posts(last: 4) {
                nodes {
                    uri
                    title
                    excerpt
                    id
                    featuredImage {
                        node {
                            sourceUrl
                        }
                    }
                }
            }
        }
    `;

    const [posts, setPosts] = useState([]);
    const { loading, error, data } = useQuery(GET_POSTS);

    useEffect(() => {
        if (!loading && data) {
            const posts = data?.posts?.nodes;
            console.log(posts);

            setPosts(posts);
        }
    }, [loading, data]);

    if (loading) return <p>Loading...</p>;

    if (error) return <p>Error {error.message}</p>;

    return (
        <div className="container blog-posts-section">
            <div className="row">
                {posts.map((post: Post) => (
                    <PostInCol
                        id={post.id}
                        title={post.title}
                        image={post.featuredImage?.node?.sourceUrl}
                        excerpt={post.excerpt}
                        uri={post.uri}
                    />
                ))}
            </div>
        </div>
    );
};

export default BlogPostsSection;
