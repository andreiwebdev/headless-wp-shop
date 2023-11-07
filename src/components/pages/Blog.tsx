import { gql, useQuery } from "@apollo/client";
import React, { Suspense, useEffect, useState } from "react";
import Skeleton from "../layout/Skeleton";
import Pagination from "../common/Pagination";
import Breadcrumbs from "../common/Breadcrumbs";

const BlogHeroSection = React.lazy(() => import("../blog/BlogHeroSection"));
const BlogPosts = React.lazy(() => import("../blog/BlogPosts"));

type FeaturedImage = {
    node: {
        sourceUrl: string;
        altText: string;
    };
};

type PageData = {
    title: string;
    content: string;
    featuredImage: FeaturedImage;
};

type PostData = {
    excerpt: string;
    id: string;
    title: string;
    uri: string;
    featuredImage: FeaturedImage;
};

type BlogData = {
    page: PageData;
    posts: {
        nodes: PostData[];
    };
};

const Blog = () => {
    const GET_BLOG_DATA = gql`
        query GET_BLOG_DATA {
            page(id: "179", idType: DATABASE_ID) {
                content
                title
                featuredImage {
                    node {
                        sourceUrl
                        altText
                    }
                }
            }
            posts {
                nodes {
                    excerpt
                    id
                    title
                    uri
                    featuredImage {
                        node {
                            sourceUrl
                            altText
                        }
                    }
                }
            }
        }
    `;

    const { data } = useQuery<BlogData>(GET_BLOG_DATA);
    const [blogData, setBlogData] = useState<PageData | null>(null);
    const [posts, setPosts] = useState<PostData[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(8);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    useEffect(() => {
        if (data) {
            const fetchedBlogData = data.page;
            const fetchedPostsData = data.posts.nodes;
            setBlogData(fetchedBlogData);
            setPosts(fetchedPostsData);
        }
    }, [data]);

    return (
        <>
            <Breadcrumbs />
            <div className="container blog">
                <Suspense fallback={<Skeleton type="blog" />}>
                    {blogData && (
                        <BlogHeroSection
                            title={blogData.title}
                            excerpt={blogData.content}
                            sourceUrl={blogData.featuredImage.node.sourceUrl}
                            altText={blogData.featuredImage.node.altText}
                        />
                    )}
                    {posts.length > 0 && (
                        <>
                            <BlogPosts posts={currentPosts} />
                            <Pagination
                                postsPerPage={postsPerPage}
                                totalPosts={posts.length}
                                paginate={setCurrentPage}
                                currentPage={currentPage}
                            />
                        </>
                    )}
                </Suspense>
            </div>
        </>
    );
};

export default Blog;
