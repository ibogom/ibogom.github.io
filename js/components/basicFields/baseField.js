/**
 * Created by ievgenb on 6/23/2017.
 */
import React from "react";
import ValidationUtil from '../../utils/validationUtil';

import {observer} from "mobx-react";

let id = 0;

@observer
export default class BaseField extends React.Component {

    constructor(props){
        super(props)
        this.state = this.props.options;
        this.defaultState = this.props.options;
        this.validation = new ValidationUtil();
    }

    componentWillReceiveProps(props){
        this.setState(props.options);
    }

    addField(){
        (this.state.id !== '')?
            this.updateField(this.props.store):
            this.addNew(this.props.store);
    }

    updateField(store){
        if(this.isFieldsValid()) {
            let updateFieldsList = store.fields.map(function (field) {
                if (field.id === this.state.id) {
                    field.tag = store.getFieldType(this.state);
                    field.state = this.state;
                }
                if (field.state.type === this.state.type) {
                    field.disabled = false;
                }
                return field;
            }.bind(this));
            store.fields.replace(updateFieldsList);
            this.clearForm();
        }
    }

    addNew(store){
       if(this.isFieldsValid()){
           this.saveField(store);
       }
    }

    saveField(store){
        id++;
        this.setState({
            id: id,
            isActive: true
        }, function () {
            let tag = store.getFieldType(this.state);
            store.addField({
                id: id,
                tag: tag,
                disabled: false,
                state: this.state
            });
            this.clearForm();
        });
    }

    setValue(e){
        let data = {};
        data[e.currentTarget.name] =
            (e.currentTarget.name === 'checked') ?
            e.currentTarget.value !== '0' :
            e.currentTarget.value;
        this.setState(data);
        this.doValidation({
          data: e.currentTarget.value,
          field: e.currentTarget.name
        });
    }

    isFieldsValid(){
        let errors = this.getErrorsList();
        if(errors.length == 0 && this.state.isValid !== undefined){
            this.setState({
                isValid: true
            });
            return true;
        }
        if(!this.state.isValid){
            this.doValidation({
                state: this.state
            });
            return false;
        }
    }

    doValidation(options){
        return this.validation.doValidate(options)
            .then(this.onValidationSuccess.bind(this, options), this.onValidationFail.bind(this, options));
    }

    onValidationSuccess(options, value){
        this.setState({
            [options.field]: value,
            [options.field + 'Error']: ''
        });
    }

    onValidationFail(options, message){
        if(Array.isArray(message)) {
            message.forEach(function (error) {
                this.setState({[Object.keys(error)[0] + 'Error']: error[Object.keys(error)[0]]});
            }.bind(this))
        } else {
            this.setState({[options.field + 'Error']: message});
        }
        this.setState({
            isValid:false
        });
        return new Error("validation failed");
    }

    getErrorsList(){
        let errorsList = Object.keys(this.state).filter(function(key){
            return key.match(/Error/g);
        });
        return errorsList.filter(function (error) {
            if(this.state[error] !== ""){
                return error;
            }
        }.bind(this));
    }

    clearForm(){
        this.defaultState.isActive = false;
        this.setState(this.defaultState);
    }

    _toggleFieldProperties(e) {
        e.preventDefault();
        e.currentTarget.parentNode.classList.toggle('opened');
    }

    onDrop(){
        if(this.props.store.isDropAvailable){
            this.saveField(this.props.store);
            this.props.store.isDropAvailable = false;
        }
    }

    render() {
        return (
            <div>
                <div className={"field field-class-name " + (this.state.nameError ? 'invalid' : 'valid') }>
                    <p className="label">Name:</p>
                    {this.state.nameError && (<div className="error">{this.state.nameError}</div>) }
                    <input type="text"
                           name="name"
                           className="field-name-value"
                           placeholder="Field name"
                           value={this.state.name} onChange={this.setValue.bind(this)}/>
                </div>
                <div className={"field field-class-name " + (this.state.labelError ? 'invalid' : 'valid') }>
                    <p className="label">Label:</p>
                    {this.state.labelError && (<div className="error">{this.state.labelError}</div>) }
                    <input type="text"
                           name="label"
                           className="field-label-value"
                           placeholder="Label name"
                           value={this.state.label} onChange={this.setValue.bind(this)}/>
                </div>
                <div className={"field field-class-name " + (this.state.classNameError ? 'invalid' : 'valid') }>
                    <p className="label">Class Name:</p>
                    {this.state.classNameError && (<div className="error">{this.state.classNameError}</div>) }
                    <input type="text"
                           name="className"
                           className="field-name-value"
                           placeholder="Class name"
                           value={this.state.className} onChange={this.setValue.bind(this)}/>
                </div>
                <div className={"field field-class-name " + (this.state.placeholderError ? 'invalid' : 'valid') }>
                    <p className="label">Placeholder:</p>
                    {this.state.placeholderError && (<div className="error">{this.state.placeholderError}</div>) }
                    <input type="text"
                           name="placeholder"
                           className="field-name-value"
                           placeholder="Placeholder name"
                           value={this.state.placeholder} onChange={this.setValue.bind(this)}/>
                </div>
            </div>
        )
    }
};