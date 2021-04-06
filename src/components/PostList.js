import React from 'react';
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends React.Component {
    
    render() {
        return (
            <div>Posts come here!</div>
        );
    };
};

export default connect(null, {
    fetchPosts: fetchPosts
})(PostList);