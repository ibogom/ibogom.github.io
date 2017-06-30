/**
 * Created by ievgenb on 6/22/2017.
 */
import React from "react";
import baseField from "./baseField";
import {observer} from "mobx-react";

@observer
export default class Select extends baseField {

    addOption(e){
        this.state.options.push(e.currentTarget.dataset.el);
        this.setState({
            value:''
        });
    }

    clearForm(){
        baseField.prototype.clearForm.apply(this, arguments);
        this.setState({
            options: ['test1','test2','test3']
        })
    }

    removeOption(e){
        let options = this.state.options.filter((option)=>{
           return option !== e.currentTarget.dataset.el;
        });
        this.state.options.replace(options);
    }

    render() {
        let template = [];
        let defaultTemplate =
            <div className="option-wrapper">
                <div className={"field select-wrapper " + (this.state.textError ? 'invalid' : 'valid') }>
                    {this.state.textError && (<div className="error">{this.state.textError}</div>) }
                    <input name="text"
                           type="text"
                           className="option-value"
                           placeholder="Value"
                           value={this.state.text}
                           onChange={this.setValue.bind(this)}/>
                </div>
                <button className='btn btn-info' data-el={this.state.text} onClick={this.addOption.bind(this)}>ADD</button>
            </div>

        if (this.state.options.length !== 0) {
            template = this.state.options.map((option, i) => {
                return <div className="option-wrapper" key={i}>
                    <div className="select-wrapper">
                        <input type="text" className="option-value" value={option}/>
                    </div>
                    <button className='btn btn-err' data-el={option} onClick={this.removeOption.bind(this)}>REMOVE</button>
                </div>
            });
        }

        template.push(defaultTemplate);

        return (
            <div className={"field-wrapper " + (this.state.isActive ? 'opened' : '') }>
                <div className="btn field-type" onClick={this._toggleFieldProperties} draggable="true"
                     onDragEnd={this.onDrop.bind(this)}>
                    {this.state.type }
                </div>
                <div className="field-properties">
                    { baseField.prototype.render.apply(this, arguments) }
                    <div className="field">
                        <p className="label">Options: </p>
                        {template}
                    </div>
                    <button className="btn btn-scs add-btn" onClick={this.addField.bind(this)}>Add</button>
                </div>
            </div>
           )
    }
};
