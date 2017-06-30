/**
 * Created by ievgenb on 6/22/2017.
 */
import React from "react";
import baseField from "./baseField";
import {observer} from "mobx-react";

@observer
export default class Header extends baseField {

    render() {
        return (
            <div className={"field-wrapper " + (this.state.isActive ? 'opened' : '') }>
                <div className="btn field-type" onClick={this._toggleFieldProperties} draggable="true"
                     onDragEnd={this.onDrop.bind(this)}>
                    {this.state.type }
                </div>
                <div className="field-properties">
                    <div className={"field field-class-name " + (this.state.classNameError ? 'invalid' : 'valid') }>
                        <p className="label">Class Name:</p>
                        {this.state.classNameError && (<div className="error">{this.state.classNameError}</div>) }
                        <input type="text"
                               name="className"
                               className="field-name-value"
                               placeholder="Class name"
                               value={this.state.className} onChange={this.setValue.bind(this)}/>
                    </div>
                    <div className={"field field-class-name " + (this.state.textError ? 'invalid' : 'valid') }>
                        <p className="label">Value:</p>
                        {this.state.textError && (<div className="error">{this.state.textError}</div>) }
                        <input type="text"
                               name="text"
                               className="field-text-value"
                               placeholder="Default value"
                               value={this.state.text} onChange={this.setValue.bind(this)}/>
                    </div>
                    <div className="title-wrapper">
                        <div className="field field-title">
                            <p className="label">Header Type:</p>
                            <div className="radio-btn-wrapper"><input name="selected" className="radio" type="radio"
                                                                      checked={this.state.selected === '2'}
                                                                      value="2" onChange={this.setValue.bind(this)}/>2
                            </div>
                            <div className="radio-btn-wrapper"><input name="selected" className="radio" type="radio"
                                                                      checked={this.state.selected === '3'}
                                                                      value="3" onChange={this.setValue.bind(this)}/>3
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-scs add-btn" onClick={this.addField.bind(this)}>Add</button>
                </div>
            </div>
        )
    }
};