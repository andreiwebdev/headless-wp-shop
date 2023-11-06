type Props = {
    type: string;
};

const Skeleton = (props: Props) => {
    return (
        <>
            {props.type === "card" && (
                <div className="card-skeleton">
                    <div className="image"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line-70"></div>
                </div>
            )}
            {props.type === "rectangle" && (
                <div className="rectangle container"></div>
            )}
            {props.type === "line-100" && <div className="line-100 mb-3"></div>}
            {props.type === "line-navbar" && (
                <div className="line-navbar"></div>
            )}
            {props.type === "page" && (
                <div className="card-skeleton page-skeleton container">
                    <div className="row mb-5">
                        <div className="col-md-6">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line-70"></div>
                        </div>
                        <div className="col-md-6">
                            <div className="image"></div>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="mb-5"></div>
                </div>
            )}
        </>
    );
};

export default Skeleton;
