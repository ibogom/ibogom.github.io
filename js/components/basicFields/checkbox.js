/**
 * Created by ievgenb on 6/22/2017.
 */
import React from "react";
import baseField from "./baseField";
import {observer} from "mobx-react";

@observer
export default class Checkbox extends baseField {

    clearForm() {
        baseField.prototype.clearForm.apply(this, arguments);
        this.setState({
            checked: false
        })
    }

    render() {
        return (
            <div className={"field-wrapper " + (this.state.isActive ? 'opened' : '') }>
                <div className="btn field-type" onClick={this._toggleFieldProperties} draggable="true"
                     onDragEnd={this.onDrop.bind(this)}>
                    {this.state.type }
                </div>
                <div className="field-properties">
                    <div>
                        { baseField.prototype.render.apply(this, arguments) }
                        <div className={"field field-class-name " + (this.state.textError ? 'invalid' : 'valid') }>
                            <p className="label">Value:</p>
                            {this.state.textError && (<div className="error">{this.state.textError}</div>) }
                            <input type="text"
                                   name="text"
                                   className="field-text-value"
                                   placeholder="Default value"
                                   value={this.state.text} onChange={this.setValue.bind(this)}/>
                        </div>
                        <div className="field checkbox-wrapper">
                            <p className="label">Checked:</p>
                            <div className="radio-btn-wrapper">
                                <input name="checked" className="radio" type="radio" value="1"
                                       onChange={this.setValue.bind(this)}/> YES
                            </div>
                            <div className="radio-btn-wrapper">
                                <input name="checked" className="radio" type="radio" value="0"
                                       onChange={this.setValue.bind(this)}/> NO
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-scs add-btn" onClick={this.addField.bind(this)}>Add</button>
                </div>
            </div>
        )
    }
};