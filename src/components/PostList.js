import React from 'react';
import { connect } from "react-redux";
import { fetchPosts, fetchPostsAndUsers } from "../actions";
import UserHeader from "./UserHeader"

class PostList extends React.Component {
    componentDidMount () {
        this.props.fetchPostsAndUsers();
    }

    renderList() {
        return this.props.posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aigned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader userId={post.userId} />
                    </div>
                </div>
            );
        });
    };

//now there will be two console logs. the reason for the same is that the 
//state will have a initial value as defined in the postReducer.
//after that the lifecyclle method of mounting is called and api data is fetched. 

    render() {
        console.log(this.props.posts.data);     
        return (
            <div className="ui relaxed divided list" >{this.renderList()}</div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    };
};

export default connect(mapStateToProps, {
    fetchPostsAndUsers
})(PostList);