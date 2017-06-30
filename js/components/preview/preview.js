/**
 * Created by ibogom on 6/20/17.
 */
import React from "react";
import {observer} from "mobx-react";

import './preview.scss';

@observer
export default class FormPreview extends React.Component {

    removeItem(e) {
        this.props.store.removeField(e.currentTarget.dataset.id);
    }

    editItem(e) {
        let id = e.currentTarget.dataset.id;
        this.disableButtons(this.props.store.fields, e)
        let selectedField = this.props.store.findField(id);
        let fieldsList = this.props.store.fieldsList.map((field) => {
            return (field.type === selectedField[0].state.type) ? selectedField[0].state : field;
        });
        this.props.store.fieldsList.replace(fieldsList);
    }

    disableButtons(fields, e){
        let id = e.currentTarget.dataset.id;
        let type = e.currentTarget.dataset.type;
        let newFields = fields.map(function (field) {
            if(field.id.toString() === id || field.state.type === type){
                field.disabled = true;
            }
            return field;
        });
        fields.replace(newFields);
    }

    disableOnDragOverAndOnDragEnter(e){
        return e.preventDefault();
    }

    disableDropEvent(){
        this.props.store.isDropAvailable = false
    }

    allowDropEvent(){
        this.props.store.isDropAvailable = true;
    }

    render() {
        var fields = this.props.store.fields.map(function (field, i) {
            return <div className="field-item-preview-wrapper" key={i}>
                {field.tag}
                <button ref="edit" className='btn btn-scs' data-type={field.state.type}
                        data-id={field.id} disabled={field.disabled ? true : false}
                        onClick={this.editItem.bind(this)}>EDIT
                </button>
                <button ref="remove" className='btn btn-err' data-type={field.state.type}
                        data-id={field.id} disabled={field.disabled ? true : false}
                        onClick={this.removeItem.bind(this)}>REMOVE
                </button>
            </div>;
        }.bind(this));
        return (
            <div className="form-preview-wrapper">
                <h3 className="title">FORM PREVIEW</h3>
                <div className="form-preview"
                       draggable={false}
                       onDragEnter={this.disableOnDragOverAndOnDragEnter.bind(this)}
                       onDragOver={this.disableOnDragOverAndOnDragEnter.bind(this)}
                       onDrop={this.allowDropEvent.bind(this)}
                       onDragLeave={this.disableDropEvent.bind(this)}
                >
                        { fields }
                </div>
            </div>
        )
    }
}