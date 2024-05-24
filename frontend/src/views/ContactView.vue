<template>
     <div class="container">
        <div class="contact-card">
            <div class="contact-card__name">{{ $route.params.contactName }}</div>
            <div class="contact-card__image">{{  $route.params.status }}</div>
            <div>{{ dataOfJoing }}</div>
            <div class="contact-card__bottom">
                <div class="contact-card__start-chat">
                    <router-link :to="{path: '/'+$route.params.contactName+'/chat'}">Start chat</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios/lib/axios.js'

export default {
        name: "contactView",
        data(){
            return{
                dataOfJoing: null,
            }
        },
        created: function(){
            let v = this
            axios.get(`http://127.0.0.1:8000/api-contacts/${this.$route.params.contactName}`)
            .then(function (response) {
                // handle success
                console.log(response.data)
                v.dataOfJoing = response.data
            })
            .catch(function (error) {
                // handle error
                console.log(error)
            })
        }
    }    
</script>


<style lang="scss" scoped>
    .contact-card {
        display: flex;
        flex-flow: column;
        align-items: center;

        &__name {
            margin: 30px 0 30px 0;
            font-size: 35px;
        }

        &__image {
            width: 250px;
            height: 320px;

            background-color: rgb(143, 143, 143);
        }

        &__bottom {
            display: flex;
            justify-content: flex-end;

            margin: 30px 0 50px 0;
        }

            &__start-chat {
                a{
                    padding: 10px 15px;
                    
                    border-radius: 5px;

                    background-color: rgb(0, 162, 255);
                    color: #fff;
                }
            }
    }

    .header{
        position: relative;
    }
    .back-button{
        position: absolute;
        left: 30px;
    }
</style>