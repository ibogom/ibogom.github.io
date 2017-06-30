/**
 * Created by ibogom on 6/21/17.
 */
import React from "react";
import {Select, Button, Checkbox, Date, Number, Text, Textarea, Header, Radio, Email, Password, Tel} from '../basicFields';
import {observer} from "mobx-react";

import './field.scss';

@observer
export default class FormField extends React.Component {

    render() {
        return (
            <li>
                    {(this.props.field.type === 'text') && <Text store={this.props.store} options={this.props.field} />}
                    {(this.props.field.type === 'radio') && <Radio store={this.props.store} options={this.props.field} />}
                    {(this.props.field.type === 'date') && <Date store={this.props.store} options={this.props.field} />}
                    {(this.props.field.type === 'number') && <Number store={this.props.store} options={this.props.field} />}
                    {(this.props.field.type === 'tel') && <Tel store={this.props.store} options={this.props.field} /> }
                    {(this.props.field.type === 'select') && <Select store={this.props.store} options={this.props.field} />}
                    {(this.props.field.type === 'checkbox') && <Checkbox store={this.props.store} options={this.props.field} />}
                    {(this.props.field.type === 'textarea') && <Textarea store={this.props.store} options={this.props.field} />}
                    {(this.props.field.type === 'header') && <Header store={this.props.store} options={this.props.field} /> }
                    {(this.props.field.type === 'email') && <Email store={this.props.store} options={this.props.field} /> }
                    {(this.props.field.type === 'password') && <Password store={this.props.store} options={this.props.field} /> }
                    {(this.props.field.type === 'button') && <Button store={this.props.store} options={this.props.field} /> }
            </li>
        )
    }
}