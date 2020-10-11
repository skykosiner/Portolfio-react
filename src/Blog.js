import React from 'react';
import Log from './Components/Blog/blog.component.jsx';
import Blogcard from './Components/Blog-card/blog-card.component.jsx';

function blog() {
    return (
        <div className="app">
            <h1 className="title">Hello world welcome to my blog</h1>
            <Blogcard />
        </div>
    );
}

export default blog;
