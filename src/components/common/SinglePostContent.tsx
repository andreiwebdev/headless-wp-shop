type Props = {
    title: string | undefined;
    excerpt: string | undefined;
    sourceUrl: string | undefined;
    altText: string | undefined;
    content: string | undefined;
};

const SinglePostContent = (props: Props) => {
    return (
        <>
            <div className="row mb-4 mb-md-5">
                <div className="col-md-8">
                    <h1>{props.title}</h1>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: props.excerpt ?? "",
                        }}
                    ></div>
                </div>
                <div className="col-md-4">
                    <img src={props.sourceUrl} alt={props.altText} />
                </div>
            </div>
            <div
                className="mb-4"
                dangerouslySetInnerHTML={{
                    __html: props.content ?? "",
                }}
            ></div>
        </>
    );
};

export default SinglePostContent;
