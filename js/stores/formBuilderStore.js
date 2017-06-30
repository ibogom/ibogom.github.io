/**
 * Created by ibogom on 6/20/17.
 */
import React from "react";
import {computed, observable} from "mobx";
import fieldsListUtil from '../utils/fieldsListUtil';

export class FormBuilderStore {

    @observable fieldsList = fieldsListUtil;
    @observable fields = [];
    @observable id = "";
    @observable isDropAvailable = false;

    findField(id) {
        var matchesFilter = new RegExp(id, "i");
        return this.fields.filter(filter => !id || matchesFilter.test(filter.id));
    }

    removeField(id){
        const newFieldsList = this.fields.filter(function(field){
            return field.id.toString() !== id;
        }.bind(this));
        this.fields.replace(newFieldsList);
    }

    addField(data){
        this.fields.push(data);
    }

    getFieldType(field) {
        switch (field.type) {
            case 'radio':
                return <div className="field-item-wrapper">
                    { field.label && (<label className="label" for={field.id}>{field.label}</label>) }
                    <input type="radio" className={field.className} placeholder={field.placeholder}
                           id={field.id} name={field.name} value={field.text}/>
                    <p>{field.text}</p>
                </div>;
                break;
            case 'text':
                return <div className="element-wrapper">
                    { field.label && (<label className="label" for={field.id}>{field.label}</label>) }
                    <input type="text" className={field.className} placeholder={field.placeholder}
                       id={field.id} name={field.name} value={field.text}/>
                </div>;
                break;
            case 'textarea':
                return <textarea name={field.name} className={field.className}
                                 id={field.id} cols={field.cols} rows={field.rows}></textarea>
                break;
            case 'checkbox':
                let checked = Boolean(field.checked);
                return <div className="field-item-wrapper">
                    { field.label && (<label className="label" for={field.id}>{field.label}</label>) }
                    <input type="checkbox" className={field.className} placeholder={field.placeholder}
                           id={field.id} name={field.name} value={field.text} checked={checked}/>
                    <p> {field.text} </p>
                </div>;
                break;
            case 'date':
                return <div className="element-wrapper">
                    { field.label && (<label className="label" for={field.id}>{field.label}</label>) }
                    <input type="date" className={field.className} placeholder={field.placeholder}
                       id={field.id} name={field.name} value={field.value}/>
                </div>;
                break;
            case 'button':
                return <div className="element-wrapper">
                    { field.label && (<label className="label" for={field.id}>{field.label}</label>) }
                    <button id={field.id} className={"btn btn-scs " + field.className}> {field.text} </button>
                </div>;
                break;
            case 'select':
                return <div className="element-wrapper">
                    { field.label && (<label className="label" for={field.id}>{field.label}</label>) }
                <select id={field.id} name={field.name} className={field.className}>
                    {field.options.map((option) => {
                        return <option value={ option }>{ option }</option>
                    })}
                </select></div>;
                break;
            case 'number':
                return <div className="element-wrapper">
                    { field.label && (<label className="label" for={field.id}>{field.label}</label>) }
                    <input type="number" id={field.id} name={field.name} placeholder={field.placeholder}
                       min={field.min} max={field.max} className={field.className} value={field.number}/></div>
                break;
            case 'tel':
                return <div className="element-wrapper">
                    { field.label && (<label className="label" for={field.id}>{field.label}</label>) }
                    <input type="tel" id={field.id} name={field.name} placeholder={field.placeholder}
                       className={field.className} value={field.tel}/>
                </div>;
                break;
            case 'header':
                return (field.selected === '2') ?
                    <h2 id={field.id} className={'h2 ' + field.className}>{ field.text }</h2> :
                    <h3 id={field.id} className={'h3 ' + field.className}>{ field.text }</h3>;
                break;
            case 'email':
                return <div className="element-wrapper">
                    { field.label && (<label className="label" for={field.id}>{field.label}</label>) }
                    <input type="email" className={field.className} placeholder={field.placeholder}
                        id={field.id} name={field.name} value={field.email}/>
                </div>;
                break;
            case 'password':
                return <div className="element-wrapper">
                    { field.label && (<label className="label" for={field.id}>{field.label}</label>) }
                    <input type="password" className={field.className} placeholder={field.placeholder}
                           id={field.id} name={field.name} value={field.password}/>
                    </div>;
                break;
            default:
                return <div className="element-wrapper">
                    { field.label && (<label className="label" for={field.id}>{field.label}</label>) }
                    <input type="text" id={field.id} className={field.className} placeholder={field.placeholder}
                       name={field.name} value={field.text}/>
                </div>;
                break;
        }
    }
}
;

export default new FormBuilderStore();