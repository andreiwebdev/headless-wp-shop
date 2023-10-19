const BlogPostsSection = () => {
    const posts = [
        {
            image: "../../src/assets/images/posts/post-1.png",
        },
        {
            image: "../../src/assets/images/posts/post-2.png",
        },
        {
            image: "../../src/assets/images/posts/post-3.png",
        },
        {
            image: "../../src/assets/images/posts/post-4.png",
        },
    ];

    return (
        <div className="container blog-posts-section">
            <div className="row">
                {posts.map((post, key) => (
                    <div
                        key={key}
                        className="col-sm-6 col-md-4 col-lg-3 mb-4 md-md-3"
                    >
                        <div className="post-in-col">
                            <a href="#">
                                <div
                                    className="thumbnail"
                                    style={{
                                        backgroundImage: `url(${post.image})`,
                                    }}
                                ></div>
                            </a>
                            <a href="#">
                                <h3>Lorem, ipsum dolor.</h3>
                            </a>
                            <a href="#">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Saepe sint facere ipsa quaerat
                                eos veniam. Reprehenderit, a quo. Nihil,
                                perferendis! [...]
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogPostsSection;
