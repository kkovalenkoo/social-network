import React from 'react';
import {Post} from './Post/Post';
import s from './MyPosts.module.css';
import {MapStateAndDispatchPropsType} from './MyPostsContainer';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../commonComponents/ImprovisedForm/ImprovisedForm";

export function MyPosts(props: MapStateAndDispatchPropsType) {

    const onAddPost = (value: FormDataType) => {
        props.addPost(value.newPostText);
    };

    const mapProfileData = props.state.postsData.map(p => <Post key={p.id}
                                                                post={p.post}
                                                                like={p.like}
                                                                avatar={p.avatar}/>);
    return (
        <div>
            <div className={s.myPostsBlock}>
                <h3>My posts</h3>
                <AddNewPostReduxForm onSubmit={onAddPost}/>
            </div>
            <div>
                {mapProfileData}
            </div>
        </div>
    );
}

type FormDataType = {
    newPostText: string
}

const maxLength = maxLengthCreator(5)

function AddNewPostForm(props:InjectedFormProps<FormDataType>) {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea}
                   name={'newPostText'}
                   placeholder={'Enter new post'}
                   validate={[requiredField, maxLength]}/>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
}

const AddNewPostReduxForm = reduxForm<FormDataType>({form: 'profileAddNewPostForm'})(AddNewPostForm)

