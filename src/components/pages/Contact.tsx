import Breadcrumbs from "../common/Breadcrumbs";

const Contact = () => {
    return (
        <>
            <Breadcrumbs />
            <div className="container">
                <div className="row mb-4 mb-lg-5">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <h1 className="mb-3">Contact Us</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Fugiat facilis rerum eaque sit consequuntur,
                            nemo, debitis quisquam minima harum minus deserunt
                            expedita impedit quibusdam dicta dolorem aspernatur.
                            Unde tenetur distinctio nam reiciendis magnam
                            necessitatibus possimus iure, veniam, ab
                            consequuntur similique a expedita esse, aspernatur
                            odio mollitia! Aspernatur, ullam illum. Optio,
                            minus. Sit sed atque delectus culpa, saepe autem
                            quae explicabo sunt sapiente voluptatibus voluptatem
                            nisi quis, voluptas tempore officiis quos inventore,
                            ab vel? Soluta, distinctio non? Quaerat sapiente,
                            nam optio iste vitae nemo. Adipisci quidem
                            asperiores consectetur! Laudantium quos quisquam
                            obcaecati voluptates inventore eum, vero accusamus
                            amet voluptas rem autem!
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <form className="contact-form">
                            <div className="names">
                                <input type="text" placeholder="First Name" />
                                <input type="text" placeholder="Last Name" />
                            </div>
                            <input type="email" placeholder="Email" required />
                            <textarea
                                cols={30}
                                rows={10}
                                placeholder="Your Message"
                                required
                            ></textarea>
                            <button type="submit">SEND</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
