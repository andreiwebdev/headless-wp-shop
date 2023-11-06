import { gql, useQuery } from "@apollo/client";
import React, { useState, useEffect, Suspense } from "react";
import Skeleton from "../layout/Skeleton";
import HeadingWithLink from "../common/HeadingWithLink";

const PostInCol = React.lazy(() => import("./PostInCol"));

type Post = {
    id: string;
    title: string;
    featuredImage: any;
    image: string;
    excerpt: string;
    uri: string;
};

const LatestBlogPostsSection = () => {
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
    const { loading, data } = useQuery(GET_POSTS);

    useEffect(() => {
        if (!loading && data) {
            const posts = data?.posts?.nodes;

            setPosts(posts);
        }
    }, [loading, data]);

    return (
        <div className="container blog-posts-section">
            <HeadingWithLink
                heading="Latest Articles"
                linkText="See All Articles"
                link="/blog/"
            />
            <div className="row">
                {posts.map((post: Post) => (
                    <div
                        key={post.id}
                        className="col-sm-6 col-md-4 col-lg-3 mb-4 md-md-3"
                    >
                        <Suspense fallback={<Skeleton type="card" />}>
                            <PostInCol
                                id={post.id}
                                title={post.title}
                                image={post.featuredImage?.node?.sourceUrl}
                                excerpt={post.excerpt}
                                uri={post.uri}
                            />
                        </Suspense>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LatestBlogPostsSection;
