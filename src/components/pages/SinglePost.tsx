import { gql, useQuery } from "@apollo/client";
import React, { useState, useEffect, Suspense } from "react";
import { useParams } from "react-router-dom";
import Skeleton from "../layout/Skeleton";
import Breadcrumbs from "../common/Breadcrumbs";

const SinglePostContent = React.lazy(
    () => import("../common/SinglePostContent")
);
const LatestBlogPostsSection = React.lazy(
    () => import("../blog/LatestBlogPostsSection")
);

interface FeaturedImageNode {
    altText: string;
    sourceUrl: string;
}

interface PostData {
    id: string;
    excerpt: string;
    featuredImage: {
        node: FeaturedImageNode;
    };
    title: string;
    content: string;
}

const SinglePost = () => {
    const { slug } = useParams();
    const GET_POST_DATA = gql`
        query GET_POST_DATA {
            post(id: "${slug}", idType: SLUG) {
                id
                excerpt
                featuredImage {
                    node {
                        altText
                        sourceUrl
                    }
                }
                title
                content
            }
        }
    `;
    const { loading, data } = useQuery(GET_POST_DATA);
    const [postData, setPostData] = useState<PostData | null>(null);

    useEffect(() => {
        if (!loading && data) {
            const response = data?.post;
            setPostData(response);
        }
    }, [loading, data]);

    return (
        <>
            <Breadcrumbs />
            <Suspense fallback={<Skeleton type="page" />}>
                <div className="container single-post">
                    <SinglePostContent
                        title={postData?.title}
                        excerpt={postData?.excerpt}
                        sourceUrl={postData?.featuredImage?.node?.sourceUrl}
                        altText={postData?.featuredImage?.node?.altText}
                        content={postData?.content}
                    />
                </div>
                <LatestBlogPostsSection />
            </Suspense>
        </>
    );
};

export default SinglePost;
