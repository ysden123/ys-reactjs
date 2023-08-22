import React, { useEffect } from "react";
import { useParams } from "react-router";

function Post() {
    let { postSlug } = useParams();

    useEffect(() => {
        // Fetch post using the postSlug
    }, [postSlug]);

    return (
        <div className="post">
            <div className="container">
                <h1 className="mt-5">This is a Post Title</h1>
                <h6 className="mb-5">The post slug is, {postSlug}</h6>
                <p>
                    Paragraph 1.
                </p>
                <p>
                    Paragraph 2.
                </p>
                <p>
                    Paragraph 3.
                </p>
            </div>
        </div>
    );
}

export default Post;