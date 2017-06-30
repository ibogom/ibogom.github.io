/**
 * Created by ievgenb on 6/22/2017.
 */
import React from "react";
import baseField from "./baseField";
import {observer} from "mobx-react";

@observer
export default class Date extends baseField {

    render() {
        return (
            <div className={"field-wrapper " + (this.state.isActive ? 'opened' : '') }>
                <div className="btn field-type" onClick={this._toggleFieldProperties} draggable="true"
                     onDragEnd={this.onDrop.bind(this)}>
                    {this.state.type }
                </div>
                <div className="field-properties">
                    { baseField.prototype.render.apply(this, arguments) }
                    <div className={"field field-class-name " + (this.state.dateError ? 'invalid' : 'valid') }>
                        <p className="label">Date:</p>
                        {this.state.dateError && (<div className="error">{this.state.dateError}</div>) }
                        <input type="date"
                               name="date"
                               className="field-text-value"
                               placeholder="Default value"
                               value={this.state.date} onChange={this.setValue.bind(this)}/>
                    </div>
                    <button className="btn btn-scs add-btn" onClick={this.addField.bind(this)}>Add</button>
                </div>
            </div>
        )
    }
};