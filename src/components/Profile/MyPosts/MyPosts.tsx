import React from 'react';
import {Post} from './Post/Post';
import s from './MyPosts.module.css';

type postDataType = {
    avatar: string
    post: string
    like: number
}

export function MyPosts() {

    const postData: Array<postDataType> = [
        {
            avatar: 'https://ss.sport-express.ru/userfiles/materials/156/1564657/large.jpg',
            post: `It's my first post`,
            like: 10
        },
        {
            avatar: `https://ss.sport-express.ru/userfiles/materials/156/1564657/large.jpg`,
            post: 'Hello, how are you',
            like: 5
        }
    ];

    return (
        <div>
            <div className={s.myPostsBlock}>
                <h3>My posts</h3>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div>
                {postData.map(p => <Post post={p.post} like={p.like} avatar={p.avatar}/>)}
            </div>
        </div>
    );
}

