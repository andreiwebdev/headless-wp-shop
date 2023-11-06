import { gql, useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
    const { loading, error, data } = useQuery(GET_POST_DATA);
    const [postData, setPostData] = useState<PostData | null>(null);

    useEffect(() => {
        if (!loading && data) {
            const response = data?.post;
            setPostData(response);
            console.log(postData);
        }
    }, [loading, data]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error! {error.message}</p>;

    return (
        <div className="container single-post">
            <div className="row mb-4 mb-md-5">
                <div className="col-md-8">
                    <h1>{postData?.title}</h1>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: postData?.excerpt ?? "",
                        }}
                    ></div>
                </div>
                <div className="col-md-4">
                    <img
                        src={postData?.featuredImage?.node?.sourceUrl}
                        alt={postData?.featuredImage?.node?.altText}
                    />
                </div>
            </div>
            <div
                dangerouslySetInnerHTML={{
                    __html: postData?.content ?? "",
                }}
            ></div>
        </div>
    );
};

export default SinglePost;
