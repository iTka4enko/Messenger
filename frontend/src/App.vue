<template>
  <div id="nav">
	<AuthPopUp v-if="displayPoPUp"></AuthPopUp>
    <div class="header">
        <div class="back-button" :class="{back_buttonDisabled: isHomePage}" @click="backInHistory">Back</div>
        <nav>
            <div class="header__nav">
                <div class="header__links" v-for="link in mainLinks" :key="link.id">
					<div @click="link.act" :class="{active_link: link.active}" ><i :class="link.imageOfLink"></i><router-link v-if="link.isRealLink" :to="link.linkPath"><span></span></router-link></div>
				</div>
            </div>
        </nav>
    </div>
    <!-- main part -->
    <router-view/>
    <!--  -->
    <footer></footer>
  </div>
</template>

<script>
import router from './router/index.js';
// components
import AuthPopUp from './components/AuthPopUp.vue'
// data and methods
export default {
	components:{
		AuthPopUp
	},
	data(){
		return{
			// nav links
			mainLinks:[
				{id:'0', imageOfLink: "fas fa-home", active: false, linkPath: '/', isRealLink: true, act: ''},
				{id:'1', imageOfLink: "fas fa-phone", active: false, linkPath: '/chats', isRealLink: true, act: ''},
				{id:'2', imageOfLink: "fas fa-user", active: false, linkPath: '', isRealLink: false, act: this.launchPopUp},
			],
			// pop up
			displayPoPUp: false,
		}
	},
	computed: {
		isHomePage(){
			return this.$route.path === "/"
		}
	},
	methods: {
		backInHistory(){
			router.go(-1)
		},
		// popUp
		launchPopUp(){
			this.displayPoPUp = true
		},
		hidePopUp(){
			this.displayPoPUp = false
		}
		// colorOfLink(id){
		// 	for (let index = 0; index < this.mainLinks.length; index++) {
		// 		if(index == id){
		// 			this.mainLinks[index].active = true;
		// 		}else{
		// 			this.mainLinks[index].active = false;
		// 		}
		// 	}
		// }
	}
}
</script>

<style lang="scss">
*{
	box-sizing: border-box;
}
body,
html {
	padding: 0;
	margin: 0;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-pack: justify;
	justify-content: space-between;
	-ms-flex-flow: column;
	flex-flow: column;
	min-height: 100vh
}
.back-button{
	position: absolute;
	
	left: 30px;
}
.back_buttonDisabled{
	display: none;
}
.container {
	width: 100%;
	max-width: 1100px;
	margin: 0 auto
}

a {
	color: #1f1f1f;
	text-decoration: none
}

main {
	min-height: calc(100vh - 160px)
}

.contacts {
	margin-top: 30px;
	margin-bottom: 30px
}

.contacts__item {
	display: -ms-flexbox;
	display: flex;
	-ms-flex-pack: justify;
	justify-content: space-between;
	-ms-flex-align: center;
	align-items: center
}

.contacts__image {
	margin-top: 25px;
	height: 40px;
	width: 40px;
	border-radius: 50%;
	background-color: rgba(128, 128, 128, .322)
}

.contacts__name {
	cursor: pointer
}

.contacts__status {
	border-radius: 50%;
	background-color: red;
	height: 10px;
	width: 10px
}

.contacts__statusOnline {
	background-color: green
}

.header {
	height: 80px;
	background-color: rgba(128, 128, 128, .322);
	display: -ms-flexbox;
	display: flex;
	-ms-flex-pack: center;
	justify-content: center;
	-ms-flex-align: center;
	align-items: center
}

.header__nav {
	width: 400px;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-pack: justify;
	justify-content: space-between;
	-ms-flex-align: center;
	align-items: center
}

.header__links {
	cursor: pointer;
	position: relative;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-pack: center;
	justify-content: center;
	-ms-flex-align: center;
	align-items: center;
	padding: 0 10px
}
.header__links>a>span{
	width: 100%;
	height: 100%;
}
.active_link{
	color: rgb(20, 157, 248);
}


.header__links * {
	position: absolute;
	min-width: 25px;
	min-height: 25px;
	max-width: 25px;
	max-height: 25px
}

.header__links i {
	color: #494949;
	font-size: 24px
}

footer {
	height: 50px;
	background-color: rgba(128, 128, 128, .322)
}
// .router-link-active i{
// 	color: rgb(0, 174, 255) !important;
// }

/*# sourceMappingURL=main.css.map */
</style>
