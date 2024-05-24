<template>
  <div class="container">
     <main>
        <div class="contacts" v-for="contact in contactsList" :key="contact.name">
           <div class="contacts__item">
               <div class="contacts__image"></div>
               <div class="contacts__name"><router-link :to="{name: 'contactView', params: {contactName: contact.name, status: contact.status}}">{{contact.name}}</router-link></div>
               <div class="contacts__status" :class="{contacts__statusOnline: contact.status}"></div>
           </div>
        </div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios/lib/axios.js'

export default {
  name: 'Home',
  data(){
    return{
      contactsList: [
        {name: "Jon", photo: "1", status: false},
        {name: "Jon1", photo: "2", status: true},
        {name: "Jon2", photo: "3", status: false},
        {name: "Jon3", photo: "4", status: false},
        {name: "Jon4", photo: "5", status: false},
        {name: "Jon5", photo: "6", status: false},
        {name: "Jon6", photo: "7", status: false},
        {name: "Jon7", photo: "8", status: false},
        {name: "Jon9", photo: "9", status: false},
        {name: "Pete", photo: "10", status: false},
      ]
    }
  },
  created: function(){
      let v = this
      axios.get('http://127.0.0.1:8000/api-contacts')
      .then(function (response) {
        // handle success
        console.log(response.data)
        v.contactsList = response.data
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
  }
}
</script>
