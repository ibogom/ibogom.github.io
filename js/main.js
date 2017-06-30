/** NATIVE COMPONENTS **/
import React from 'react';
import ReactDOM from "react-dom";

/** CONTAINERS **/
import FormBuilder from "./containers/formBuilder/formBuilder";

/** COMPONENTS **/
import FormPreview from './components/preview/preview';
import FormFields from './components/fields/fields';

/** STORES **/
import FormBuilderStore from "./stores/formBuilderStore";

import '../assets/themes/default/default.scss';

const formBuilder = document.getElementById("formBuilder");

ReactDOM.render(
    <FormBuilder store={FormBuilderStore}>
        <FormPreview store={FormBuilderStore}/>
        <FormFields store={FormBuilderStore}/>
    </FormBuilder>, formBuilder)