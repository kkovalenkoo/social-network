import React from 'react';
import {Post} from './Post/Post';
import s from './MyPosts.module.css'

export function MyPosts() {
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
            <Post avatar={'https://ss.sport-express.ru/userfiles/materials/156/1564657/large.jpg'}
                  post={`It's my first post`}
                  like={10}
            />
            <Post
                avatar={`https://lh3.googleusercontent.com/proxy/fSdpiD-cVtH9rk236jSYbYZLVh5llddS51XlZtd6ETYCqWCf4RfGRRn43_uVYT2e866h4ulhYQ7HI54TclVpr2X6K2_A5-bJ--eB4mA7ZK-Q2W_OXTZ_cjp13BJRVQ`}
                post={`Hello, how are you`}
                like={5}
            />
        </div>
    );
}

