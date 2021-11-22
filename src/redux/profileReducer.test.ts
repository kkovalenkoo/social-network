import {addPostAC, deletePost, profileReducer, ProfileType} from './profileReducer'

test('post should be add', () => {
    const startState = {
        postsData: [
            {id: 1, avatar: '', post: '', like: 10},
            {id: 2, avatar: '', post: '', like: 5}
        ],
        profile: null as ProfileType | null,
        status: ''
    }
    const action = addPostAC('Hello')

    const endState = profileReducer(startState, action)

    expect(endState.postsData.length).toBe(3)
    expect(endState.postsData[2].post).toBe('Hello')
})

test('post should be delete', () => {
    const startState = {
        postsData: [
            {id: 1, avatar: '', post: '', like: 10},
            {id: 2, avatar: '', post: '', like: 5}
        ],
        profile: null as ProfileType | null,
        status: ''
    }
    const action = deletePost(1)

    const endState = profileReducer(startState, action)

    expect(endState.postsData.length).toBe(1)
})