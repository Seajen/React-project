import React from "react";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/serch-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";

import './app.css';


const App = () => {

    const data = [
        {label: "Going to learn React", important: true},
        {label: "That is so good", important: false},
        {label: "I need a break...", important: false},
    ];

    data.map((item, i) => item.id = i + 1)

    return (
        <div className="container">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
        </div>
    )
}

export default App;
