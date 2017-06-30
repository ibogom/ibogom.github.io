/**
 * Created by ibogom on 6/20/17.
 */

import React from "react";
import {observer} from "mobx-react";
import './formBuilder.scss';

@observer
export default class FormBuilder extends React.Component {
    render() {
        return (
            <div id="form-builder-wrapper">
                {this.props.children}
            </div>
        )
    }
}