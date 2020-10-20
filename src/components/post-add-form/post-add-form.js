import React from "react";

const PostAddForm = () => {
    return (
        <form className="bottom-panel d-flex">
            <input
                type="text"
                placeholder="О чем вы думаете?"
                className="form-control new-post-label"
            />
            <button className="btn btn-outline-secondary" type="submit">
                Добавить
            </button>
        </form>
    )
}

export default PostAddForm;
