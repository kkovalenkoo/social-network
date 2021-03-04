type MessagePropsType = {
    message: string
}

export function Message(props: MessagePropsType) {
    return (
        <div>{props.message}</div>
    );
}