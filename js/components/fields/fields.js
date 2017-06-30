/**
 * Created by ibogom on 6/20/17.
 */
import React from "react";
import {observer} from "mobx-react";
import FormField from '../field/field';

import './fields.scss';

@observer
export default class FormFields extends React.Component {

    render() {
        let fields = this.props.store.fieldsList.map(function (field, i) {
            return <FormField key={i} store={this.props.store} field={field} />
        }.bind(this));
        return (
            <div className="form-fields-wrapper">
                <h3 className="title">Select field</h3>
                    <ul className="fields-list">
                        { fields }
                    </ul>
            </div>);
    }
}