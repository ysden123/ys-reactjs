import React from "react";

function About() {
    return (
        <div className="about">
            <div className="container">
                <div className="row align-items-center my-5">
                    <div className="col-lg-7">
                        <img
                            className="img-fluid rounded mb-4 mb-lg-0"
                            src="http://placehold.it/900x400"
                            alt=""
                        />
                    </div>
                    <div className="col-lg-5">
                        <h1 className="front-weight-light">About</h1>
                        <p>
                            Text for About section.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;