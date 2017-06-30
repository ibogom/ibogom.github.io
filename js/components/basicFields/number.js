/**
 * Created by ievgenb on 6/22/2017.
 */
import React from "react";
import baseField from "./baseField";
import {observer} from "mobx-react";

@observer
export default class Number extends baseField {

    render() {
        return (
            <div className={"field-wrapper " + (this.state.isActive ? 'opened' : '') }>
                <div className="btn field-type" onClick={this._toggleFieldProperties} draggable="true"
                     onDragEnd={this.onDrop.bind(this)}>
                    {this.state.type }
                </div>
                <div className="field-properties">
                    { baseField.prototype.render.apply(this, arguments) }
                    <div className="field field-text-value">
                        <p className="label">Min:</p>
                        <input type="number"
                               name="min"
                               className="field-text-value"
                               placeholder="Min value"
                               inputmode="numeric"
                               value={this.state.min} onChange={this.setValue.bind(this)}/>
                    </div>
                    <div className="field field-text-value">
                        <p className="label">Max:</p>
                        <input type="number"
                               name="max"
                               className="field-text-value"
                               placeholder="Max value"
                               inputmode="numeric"
                               value={this.state.max} onChange={this.setValue.bind(this)}/>
                    </div>
                    <div className={"field field-class-name " + (this.state.numberError ? 'invalid' : 'valid') }>
                        <p className="label">Value:</p>
                        {this.state.numberError && (<div className="error">{this.state.numberError}</div>) }
                        <input type="number"
                               name="number"
                               className="field-text-value"
                               placeholder="Default value"
                               inputmode="numeric"
                               value={this.state.number} onChange={this.setValue.bind(this)}/>
                    </div>
                    <button className="btn btn-scs add-btn" onClick={this.addField.bind(this)}>Add</button>
                </div>
            </div>
        )
    }
};