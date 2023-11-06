type Props = {
    title: string;
    excerpt: string;
    sourceUrl: string;
    altText: string;
};

const BlogHeroSection = (props: Props) => {
    return (
        <div className="row mb-4 mb-md-5">
            <div className="col-md-8 order-2 order-md-1">
                <h1 className="mb-3">{props.title}</h1>
                <div
                    dangerouslySetInnerHTML={{
                        __html: props.excerpt ?? "",
                    }}
                ></div>
            </div>
            <div className="col-md-4 order-1 order-md-2">
                <img src={props.sourceUrl} alt={props.altText} />
            </div>
        </div>
    );
};

export default BlogHeroSection;
