import React, {Component} from 'react';


class TextBox extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            'text': ""
        };
    }

    render() {
        return (
            <div className="form-group">
                <input
                    type={this.props.type}
                    name={this.props.placeholderId.toLowerCase()}
                    placeholder={this.props.placeholderId}
                    className="form-control"
                    onChange={this.handleOnChange.bind(this)}>
                </input>
            </div>
        );
    }

    handleOnChange(e) {
        const text = e.target.value;
        this.setState({'text': text}, function() {
            //console.log("state " +this.state.text);
        });  
    }
}

export default TextBox;