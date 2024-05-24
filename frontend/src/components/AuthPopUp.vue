<template>
    <div class="popUp">
        <div class="popUp__window">
            <div @click="hidePopUpInParent" class="popUp__close">
                <div></div>
                <div></div>
            </div>
            <!-- login -->
            <div class="login-logout">
                <h2>LogIn</h2>
                <form action="" method="GET">
                    <label class="auth-label" for="name"></label><input class="auth-input" type="text" name="name" id="name" placeholder="Name">
                    <label class = "auth-label" for="password"></label><input class="auth-input" type="password" name="password" id="password" placeholder="Password">
                    <input class="auth-submit" type="submit" value="LogIn">    
                </form>
                <form action="" method="POST">
                    <input class="auth-submit auth-submit--logout" type="submit" value="LogOut">
                </form>
            </div>
            <!-- registration -->
            <div class="registration">
                <h2>Registration</h2>
                <form action="" method="POST" onsubmit="return false;" v-on:submit="sendRegistrationData">
                    <label class = "auth-label" for="regName"></label><input v-model="formReg.name" class="auth-input" type="text" name="name" id="regName" placeholder="Name">
                    <label class = "auth-label" for="regPassword"></label><input v-model="formReg.password" class="auth-input" type="password" name="password" id="regPassword" placeholder="Password">
                    <label class = "auth-label" for="regRePassword"></label><input v-model="formReg.rePassword" class="auth-input" type="password" name="rePassword" id="regRePassword" placeholder="Password again">
                    <input class="auth-submit" type="submit" value="Register">
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios/lib/axios.js'
import Cookies from 'js-cookie/src/js.cookie.js'

export default {
    name: "Auth",
    data(){
        return{
            formReg: {
                name: '',
                password: '',
                rePassword: '',
            }
        }
    },
    methods:{
        hidePopUpInParent(){
            this.$parent.hidePopUp()
        },
        // Auth
        sendRegistrationData(){
            let v = this
            const csrftoken = Cookies.get('csrftoken');

            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api-authentication/reg',
                data: {
                    name: this.formReg.name,
                    password: this.formReg.password,
                },
                headers: {'X-CSRFToken': csrftoken}

            }).then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

            this.formReg.name = ''
            this.formReg.password = ''
        }
    },
}
</script>
<style lang="scss" scoped>
    .popUp{
        position: absolute;
        width: 100vw;
        height: 100vh;

        background-color: rgba(119, 119, 119, 0.288);

        display: flex;
        justify-content: center;
        align-items: center;

        z-index: 1000;

        &__close{
            position: absolute;
            top: 12px;
            right: 14px;
            cursor: pointer;
            width: 20px;
            height: 20px;

            div{
                margin-top: 10px;
                width: 100%;
                height: 1px;
                background-color: rgb(58, 58, 58);
                display: block;
                position: absolute;
            }
            div:first-child{
                transform: rotate(45deg);
            }
            div:last-child{
                transform: rotate(-45deg);
            }
        }
        &__close:hover>div{
            background-color: rgb(255, 61, 61);
        }

        &__window{
            width: 600px;

            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 0 15px 3px rgba(0, 0, 0, 0.048);

            padding: 45px 15px;

            position: relative;
        }
        form{
            display: flex;
            flex-flow: column;
            align-items: center;

            margin-top: 5px;
        }
        h2{
            text-align: center;
            margin: 0;
        }
    }
    // Auth
    .auth-label {
        
    }
    .auth-input {
        font-size: 18px;
        border: 1px solid rgb(177, 177, 177);
        width: 80%;  
        border-radius: 5px;

        margin-top: 10px;
        padding: 5px;
    }
    .auth-submit {
        cursor: pointer;
        border: none;
        border-radius: 8px;

        min-width: 150px;

        margin-top: 20px;
        padding: 8px;

        font-size: 14px;
    }

    .login-logout {
    }
    .registration {
    }
</style>