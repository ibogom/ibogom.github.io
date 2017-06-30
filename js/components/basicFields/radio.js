/**
 * Created by ievgenb on 6/23/2017.
 */
import React from "react";
import baseField from "./baseField";
import {observer} from "mobx-react";

@observer
export default class Text extends baseField {

    render() {
        return (
            <div className={"field-wrapper " + (this.state.isActive ? 'opened' : '') }>
                <div className="btn field-type" onClick={this._toggleFieldProperties} draggable="true"
                     onDragEnd={this.onDrop.bind(this)}>
                    {this.state.type }
                </div>
                <div className="field-properties">
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
                    <button className="btn btn-scs add-btn" onClick={this.addField.bind(this)}>SAVE</button>
                </div>
            </div>
        )
    }
};