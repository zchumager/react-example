import React, {Component} from 'react';

class ComboBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            "value": "high"
        };
    }

    render() {
        return (
            <select className="w-100" onChange={this.handleOnChange}>
                {this.props.items.map((e, i) => {
                    return <option value={e} key={i}>{e}</option>
                })}
            </select>
        );
    }

    /*
     * En React solo se puede cambiar el estado de un componente a través de un evento
     * que pertence al mismo componente 
     */
    handleOnChange = (e) => {
        this.setState({'value': e.target.value}, function() {
            console.log(this.state.value);
        });
    }
}

export default ComboBox;