import { Link } from "react-router-dom";

type Props = {
    id: string;
    title: string;
    image: string;
    excerpt: string;
    uri: string;
};

const PostInCol = (props: Props) => {
    return (
        <div key={props.id} className="col-sm-6 col-md-4 col-lg-3 mb-4 md-md-3">
            <div className="post-in-col">
                <Link to={props.uri}>
                    <div
                        className="thumbnail"
                        style={{
                            backgroundImage: `url(${props.image})`,
                        }}
                    ></div>
                </Link>
                <Link to={props.uri}>
                    <h3>{props.title}</h3>
                </Link>
                <Link
                    to={props.uri}
                    dangerouslySetInnerHTML={{
                        __html: props.excerpt.slice(0, 150) + "[...]",
                    }}
                ></Link>
            </div>
        </div>
    );
};

export default PostInCol;
