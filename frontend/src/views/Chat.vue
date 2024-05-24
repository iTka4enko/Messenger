<template>
  <div class="container">
        <div class="chat">
            <h2>{{$route.params.contactName}}</h2>
            <div class="chat__messages">
                <p class="chat__message chat__message--my">Hello, how are u? <span>14:00</span> </p>
                <p class="chat__message">Hi, great, and u? Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, similique.<span>14:10</span> </p>
                <p class="chat__message chat__message--my">Awesome <span>14:11</span> </p>
                <p class="chat__message">Lets go play PUBG <span>14:12</span> </p>
            </div>
            <div class="chat__form">
                <form action="">
                    <textarea class="chat__textarea" name="" id="" cols="52" rows="10"></textarea>
                    <button class="chat__button" type="submit">Send</button>
                </form>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .chat {
    display: flex;
    flex-flow: column;
    align-items: center;

    h2{
        font-size: 35px;
    }

    &__messages {
        width: 500px;

        padding: 5px;

        display: flex;
        flex-flow: column;

        height: 50vh;
        overflow-y: scroll;
    }
        &__message{
            max-width: 40%;

            margin-top: 10px;
            margin-bottom: 0;

            padding: 5px 10px;
            background-color: rgb(214, 214, 214);
            color: rgb(53, 53, 53);

            border-radius: 5px 5px 5px 0px;

            display: inline;
            position: relative;

            span{
                color: rgb(110, 110, 110);

                position: absolute;
                bottom: -20px;
                right: 5px;
            }
        }
        &__message--my{
            background-color: rgb(144, 190, 216);
            color: rgb(13, 60, 87);
            margin-left: 55%;

            border-radius: 5px 5px 0px 5px;
        }

    &__form {
        width: 500px;
        margin-top: 20px;

        form{
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
        &__textarea{
            border: 1px solid rgb(207, 207, 207);

            max-height: 20px;
            padding: 5px;
        }
        &__button{

            padding: 5px;
        }
}

</style>