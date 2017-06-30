/**
 * Created by ibogom on 6/25/17.
 */

const defaultRule = {

    required: true,

    length: {
        min: 3,
        max: 34
    },

    regExp: '',

    defaultFn: function(data){
        if(!this.required){
            return true;
        } else if(!data){
            return false;
        } else if(this.fn && !this.fn(data)){
            return false;
        } else if(data.length < this.length.min || data.length > this.length.max){
            this.message = 'Data length is wrong! Minimum length is ' +
                '' + this.length.min + ' and maximum length is ' + this.length.max;
            return false;
        } else if(!(new RegExp(this.regExp).test(data))) {
            this.message = 'Data format is wrong!';
            return false;
        } else {
            return true;
        }
    },

    message: 'This field is required'
};

const userValidationRules = {

    firstName: Object.assign({}, defaultRule, {
        regExp: '^[A-Za-z,\.\'\s\-]+$'
    }),

    lastName: Object.assign({}, defaultRule, {
        regExp: '^[A-Za-z,\.\'\s\-]+$'
    }),

    className: Object.assign({}, defaultRule, {
        length: {
            min: 1,
            max: 15
        },
        required: false,
        regExp: '^[A-Za-z,\.\'\s\-]+$'
    }),

    name: Object.assign({}, defaultRule, {
        length: {
            min: 1,
            max: 15
        },
        required: false,
        regExp: '^[A-Za-z,\.\'\s\-]+$'
    }),

    radio: Object.assign({}, defaultRule, {
        length: {
            min: 1,
            max: 15
        },
        regExp: '^[A-Za-z,\.\'\s\-]+$'
    }),

    date: Object.assign({}, defaultRule, {
        length: {
            min: 3,
            max: 15
        },
        regExp: '^[0-9]{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])'
    }),

    placeholder:Object.assign({}, defaultRule, {
        length: {
            min: 1,
            max: 15
        },
        required: false,
        regExp: '^[A-Za-z,\.\'\s\-]+$'
    }),

    label: Object.assign({}, defaultRule, {
        length: {
            min: 1,
            max: 15
        },
        required: false,
        regExp: '^[A-Za-z,\.\'\s\-]+$'
    }),

    text: Object.assign({}, defaultRule, {
        length: {
            min: 1,
            max: 15
        },
        regExp: '^[A-Za-z,\.\'\s\-]+$'
    }),

    number: Object.assign({}, defaultRule, {
        length: {
            min: 1,
            max: 10
        },
        regExp: '^\\+?[0-9]+$'
    }),

    tel: Object.assign({}, defaultRule, {
        length: {
            min: 10,
            max: 15
        },
        regExp: '^\\+?[0-9]+$'
    }),

    email: Object.assign({}, defaultRule, {
        length: {
            min: 5,
            max: 100
        },
        regExp: '^\\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$'
    }),

    password: Object.assign({}, defaultRule, {
        length: {
            min: 3,
            max: 30
        },
        regExp: '^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$'
    }),

    selected: Object.assign({}, defaultRule, {
        length: {
            min: 0,
            max: 1
        },
        fn: function (data) {
            return data === '2' || data === '3';
        }
    }),

    checked: Object.assign({}, defaultRule, {
        length: {
            min: 0,
            max: 1
        },
        fn: function (data) {
            return data === '1' || data === '0';
        }
    })
};

export { userValidationRules };