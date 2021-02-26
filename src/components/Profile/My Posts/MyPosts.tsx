import React from 'react';
import {Post} from './Post/Post';

export function MyPosts() {
    return (
        <div>
            <div>
                <div>My posts</div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <Post avatar={'https://ss.sport-express.ru/userfiles/materials/156/1564657/large.jpg'}
                  post={`It's my first post`}
                  like={10}
            />
            <Post
                avatar={`https://lh3.googleusercontent.com/proxy/tqTjYOdz3WzYANtoseR7B3CKnv9FPAW2IqCnfLJaPvcdofqbX24HpnCLAVv4VndBYRHgpDgLMiUKFBx3bmdY4h4NKm5viOpQshrMuZmEMZHWRF5TsPRLpv1F93ZeIs_Uwf0R7NsNDQm-`}
                post={`Hello, how are you`}
                like={5}
            />
        </div>
    );
}

