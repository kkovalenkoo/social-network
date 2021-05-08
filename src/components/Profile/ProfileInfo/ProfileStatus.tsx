import {Component} from 'react';

type ProfileStatusPropsType = {
    status: string
}

export class ProfileStatus extends Component<ProfileStatusPropsType> {

    state = {
        editMode: false
    };
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode () {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {
                    !this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                }
                {
                    this.state.editMode &&
                    <div>
                        <input value={this.props.status}
                               onBlur={this.deactivateEditMode.bind(this)}
                               autoFocus={true}
                        />
                    </div>
                }
            </div>
        );
    }
}