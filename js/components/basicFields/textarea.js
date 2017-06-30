/**
 * Created by ievgenb on 6/22/2017.
 */
import React from "react";
import baseField from "./baseField";
import {observer} from "mobx-react";

@observer
export default class Textarea extends baseField {

    render() {
        return (
            <div className={"field-wrapper " + (this.state.isActive ? 'opened' : '') }>
                <div className="btn field-type" onClick={this._toggleFieldProperties} draggable="true"
                     onDragEnd={this.onDrop.bind(this)}>
                    {this.state.type }
                </div>
                <div className="field-properties">
                    { baseField.prototype.render.apply(this, arguments) }
                    <div className="textarea-wrapper">
                        <div className="field field-cols">
                            <p className="label">Columns:</p>
                            <input type="text"
                                   name="cols"
                                   className="field-name-value"
                                   placeholder="Field name"
                                   value={this.state.cols} onChange={this.setValue.bind(this)}/>
                        </div>
                        <div className="field field-rows">
                            <p className="label">Rows:</p>
                            <input type="text"
                                   name="rows"
                                   className="field-name-value"
                                   placeholder="Field name"
                                   value={this.state.rows} onChange={this.setValue.bind(this)}/>
                        </div>
                        <button className="btn btn-scs add-btn" onClick={this.addField.bind(this)}>Add</button>
                    </div>
                </div>
            </div>
        )
    }
};