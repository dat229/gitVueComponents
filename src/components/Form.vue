<template>
    <div class="container">
        <div class="wrap-form">
            <h2>Form</h2>
            <form>
                <div class="input_wrap">
                    <base-input
                        label="Amount"
                        type="text"
                        name="amount"
                        minlength="1"
                        maxlength="79"
                        :cls="{
                            'error': focused1 && isEmptyAmount,
                            'success': focused1 && !isEmptyAmount
                        }"
                        @focus="focused1 = true"
                        @blur="focused1 = false"
                        @keydown="keyEvent"
                        v-model="formattedValue"
                    />
                    <span>vnđ</span>
                </div>
                <p v-if="isEmptyAmount" class="msg_error">Number is a required field</p>
                <p class="desc">Description</p>
                <div class="input_wrap">
                    <base-input
                        label="Email"
                        type="text"
                        name="email"
                        :cls="{
                            'error' : focused2 && !validEmail,
                            'success':  focused2 && validEmail
                        }"
                        @focus="onFocus"
                        @blur="focused2 = false"
                        @input="checkEmail"
                        v-model="form_data.email"
                    />
                    <p v-if="focused2 && isEmptyEmail" class="msg_error">E-mail is a required field</p>
                    <p v-if="focused2 && !isEmptyEmail && !validEmail" class="msg_error">E-mail must be a valid email</p>
                    <p class="desc">Description</p>
                </div>
                <div class="wrap_checkbox">
                    <input
                        id="cb_"
                        checked
                        type="checkbox"
                        @click="onChecked"
                    >
                    <label for="cb_" class="lb_checkbox">Checkbox Label</label>
                </div>
            </form>
            <!-- show data -->
            <div class="data_show">
                <p>{{form_data}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import BaseInput from './BaseInput.vue'
    import {wearMask} from '../helpers/formatMoney'
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Form',
        components: { BaseInput },
        data() {
            return {
                form_data: {
                    amount: "10000000",
                    email: "",
                    check: true
                },
                isEmptyAmount: false,
                isEmptyEmail: false,
                validEmail: false,
                focused1: false,
                focused2: false,
            }
        },
        methods: {
            onChecked(){
                this.form_data.check = !this.form_data.check
            },
            keyEvent(e) {
                let key = e.key
                //console.log(key)
                if(key == "Backspace" || key == "Delete" || key == "ArrowLeft" || key == "ArrowRight" || key == "ArrowUp" || key == "ArrowDown" ) { 
                    return;
                } else if(key == "-") {
                    e.preventDefault()
                    if(e.target.value.startsWith("-")) {
                        e.preventDefault()
                    } else {
                        this.form_data.amount = "-" + e.target.value //them dau "-" dang truoc khi an nut "-"
                    }
                } 
                else if(!/^-?\d+/g.test(key)){
                    e.preventDefault();
                }
            },
            checkEmail(e) {
                // eslint-disable-next-line no-useless-escape
                const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
                //console.log(e.target.value)
                    if(e.target.value == "") {
                        this.isEmptyEmail = true;
                    } else {
                        this.isEmptyEmail = false;
                        if(emailRegex.test(e.target.value)) {
                            this.validEmail = true;
                        } else {
                            this.validEmail = false;
                        }
                    }
            },
            onFocus(e) {
                this.focused2 = true
                if(e.target.value == "") {
                    this.isEmptyEmail = true;
                } else {
                    this.isEmptyEmail = false;
                }
            }
        },
        computed: {
            formattedValue: {
                get() {
                    if(this.form_data.amount == "") {
                        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                        this.isEmptyAmount = true;
                    } else {
                        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                        this.isEmptyAmount = false;
                    }
                    let formattedValue = wearMask(this.form_data.amount)
                    return formattedValue;
                },
                set(value) {
                    this.form_data.amount = value.replace(/\./g, '') 
                }
            }
        }
    }
</script>

<style scoped>
h2{
    margin: 10px 0;
    font-size: 20px;
    font-weight: 500;
}

.container {
    width: 100%;
    min-height: 100vh;
    background-color: #f2f3f5;
    display: flex;
    align-items: center;
    justify-content: center;
}

.input_wrap {
    position: relative;
    margin-top:12px;
}

.input_wrap span {
    position: absolute;
    top: 50%;
    right: 5px;
    z-index: 999;
    padding: 10px;
}

.wrap-form {
    padding: 90px 75px;
    background-color: #fff;
    width: 100%;
    max-width: 750px;
    border-radius: 30px;
}

.msg_error {
    margin: 10px 0;
    color: red;
}

.desc {
    margin-top: 4px;
    font-size: 1rem;
    line-height: 1.25rem;
    color: #A6B5CB
} 

.wrap_checkbox {
    margin-top:20px;
}

.wrap_checkbox input {
    cursor: pointer;
}

.data_show{ 
    margin-top: 30px;
    display: flex;
    justify-content: center;
}

.lb_checkbox{
    user-select: none;
    cursor: pointer;
}


</style>
