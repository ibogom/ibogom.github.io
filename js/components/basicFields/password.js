/**
 * Created by ibogom on 6/24/17.
 */
import React from "react";
import baseField from "./baseField";
import {observer} from "mobx-react";

@observer
export default class Password extends baseField {

    render() {
        return (
            <div className={"field-wrapper " + (this.state.isActive ? 'opened' : '') }>
                <div className="btn field-type" onClick={this._toggleFieldProperties} draggable="true"
                     onDragEnd={this.onDrop.bind(this)}>
                    {this.state.type }
                </div>
                <div className="field-properties">
                    { baseField.prototype.render.apply(this, arguments) }
                    <div className={"field field-class-name " + (this.state.passwordError ? 'invalid' : 'valid') }>
                        <p className="label">Value:</p>
                        {this.state.passwordError && (<div className="error">{this.state.passwordError}</div>) }
                        <input type="text"
                               name="password"
                               className="field-text-value"
                               placeholder="Default value"
                               value={this.state.password} onChange={this.setValue.bind(this)}/>
                    </div>
                    <button className="btn btn-scs add-btn" onClick={this.addField.bind(this)}>Add</button>
                </div>
            </div>
        )
    }
};