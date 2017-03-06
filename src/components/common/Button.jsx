import React,{Component,PropTypes} from 'react';
// import './Buttom.scss';
class Button extends Component {
    static propTypes = {
        // url : PropTypes.string.isRequired,
        text : PropTypes.string.isRequired,
        class : PropTypes.string.isRequired,
        click : PropTypes.func.isRequired
    }
    constructor(props) {
        super(props);
    }

    render() {
        var _props = this.props
        var events = {
            onClick:(e) => {
                _props.click && _props.click(e)
            }
        }
        return <div className={this.props.class} {...events} defaultValue={this.props.value}>{this.props.text}</div>
    }
}

export default Button;
