/**
 * Created by ibogom on 6/25/17.
 */

import { userValidationRules } from './validationRules';

export default class ValidationUtil {

    /**
     * containe rules arguments
     * @param rules
     */
    constructor(rules){
        this.rules = Object.assign({}, rules || {}, userValidationRules);
    }

    /**
     * Main validation method
     * @param options | Object | you can find possible options bellow
     *  data | String | transfer data from field if you want validate only value in field
     *  field | String | transfer field name if you want validate only specific field
     *  state | Object | transfer state if you what make all form validation
     * @returns {Promise}
     */
    doValidate(options){
        return new Promise(function (resolve, reject) {
            if(!options){
                return reject('Options is not defined!');
            } else if(options.state){
                let fields = Object.keys(options.state);
                let errors = [];
                fields.forEach(function(field){
                    if(this.rules[field] && !this.rules[field].defaultFn(options.state[field])) {
                        errors.push({ [field]: this.rules[field].message });
                    }
                }.bind(this));
                return (errors.length !== 0) ? reject(errors) : resolve(options.state);
            } else {
                return this.rules[options.field].defaultFn(options.data) ?
                    resolve(options.data) :
                    reject(this.rules[options.field].message);
            }
        }.bind(this));
    }
}

