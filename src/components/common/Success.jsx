import React, {Component} from 'react';
import './Success.scss';

export default class Success extends React.Component {
    constructor(props){
        super(props);
        this.getHeight = 480
    }
    render() {
        this.getHeight = window.innerHeight-48;
        let _props = this.props;
        let events = {
            onClick: function (e) {
                _props.click && _props.click(e)
            }
        }
        return(
            <div className="submit-wrap" style={{background:'#fff',height:this.getHeight}}>
                <div className="submit-ico"></div>
                <div className="submit-succ">{this.props.sucText}</div>
                <div className="submit-tip">{this.props.tip}</div>
                <a className="submit-link" {...events} href="javascript:void(0)">{this.props.linkText}</a>
            </div>
        )
        // return(
        //     <div className="submit-wrap" style={{background:'#fff',height:this.getHeight}}>
        //         <div className="submit-ico"></div>
        //         <div className="submit-succ">{this.props.sucText}</div>
        //         <div className="submit-tip">{this.props.tip}</div>
        //     </div>
        // )
    }
}
