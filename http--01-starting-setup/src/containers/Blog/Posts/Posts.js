import React, { Component } from 'react';
import axios from '../../../axios';

import './Posts.css';

import Post from '../../../components/Post/Post';

class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        console.log(this.props)
        axios.get('/posts')
            .then(res => {
                const posts = res.data.slice(0, 4)
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                })
                this.setState({ posts: updatedPosts });
            })
            .catch(err => {
                console.log(err)
            });
    }

    postSelectedHandler = (id) => {
        this.setState({ selectedPostId: id })
    }

    render() {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post title={post.title} key={post.id} author={post.author} clicked={() => this.postSelectedHandler(post.id)} />
            })
        }
        return (
            <section className="Posts">
                {posts}
            </section>
        );
    }
}

export default Posts;