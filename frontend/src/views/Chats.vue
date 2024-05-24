<template>
  <div class="container">
        <div 
         class="chats"
         v-for="chat in chatsList"
         :key="chat.name"
        >
            <div class="chats__item">
                <div class="chats__image"></div>
                <div class="chats__text">
                    <div class="chats__username">{{chat.name}}</div>
                    <div class="chats__messageText">{{chat.lastMessage}}</div>
                    <router-link :to="{path: '/'+chat.name+'/chat'}"></router-link>
                </div>
                <div class="chats__time">{{chat.timeOfSend}}</div>
            </div>
        </div>
    </div>
</template>

<script>
 export default {
     name: "Chats",
     data(){
         return{
             chatsList: [
                 {name: "Jon", picture: "", lastMessage: "dwdwd", timeOfSend: "22:00"},
                 {name: "Jon1", picture: "", lastMessage: "dwdiiiwd", timeOfSend: "23:00"},
                 {name: "Jon2", picture: "", lastMessage: "dgddwd", timeOfSend: "22:10"},
                 {name: "Jon3", picture: "", lastMessage: "dwdwdgd", timeOfSend: "22:50"},
                 {name: "Jon4", picture: "", lastMessage: "dwgddwd", timeOfSend: "22:20"},
                 {name: "Jon5", picture: "", lastMessage: "dwdgdwd", timeOfSend: "22:12"},
                 {name: "Jon6", picture: "", lastMessage: "dwdwd", timeOfSend: "22:45"},
             ]
         }
     }
 }
</script>

<style lang="scss" scoped>
    .chats {
    padding-bottom: 20px;

    &__item {
        display: flex;
        justify-content: space-between;
        align-items: center;

        margin-top: 15px;
    }

        &__image {
            width: 50px;
            height: 50px;

            border-radius: 50%;

            background-color: rgb(177, 177, 177);
        }

        &__text {
            height: 100%;

            display: flex;
            flex-flow: column;
            justify-content: space-between;

            position: relative;

            a{
                position: absolute;

                width: 100%;
                height: 100%;
            }
        }

            &__username {
                color: black;
            }

            &__messageText {
                color: rgb(71, 71, 71);
            }

        &__time {
            color: rgb(71, 71, 71);
        }
}

</style>