<template>
  <div class="firebase-messaging">
      <h1>FCM PUSH NOTIFICATIONS</h1>
      <a href="" @click="authenticate">Authenticate</a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {getAuth, signInAnonymously} from 'firebase/auth';
import {messaging} from '@/plugins/firebase';
import {getMessaging, onMessage, getToken} from 'firebase/messaging';

export default Vue.extend({
  name: 'IndexPage',
  mounted(){
    console.log("hello")
    // const messages = getMessaging();
    // onMessage(messages, (payload)=>{
    //   console.log('Message on Client', payload);
    // })
  },
  methods:{
    async authenticate(){
      await signInAnonymously(getAuth());
      this.activate()
    },
     created(){
    if (process.browser){
      console.log(window.innerWidth, window.innerHeight);
    }
  },
    async activate(){
      const token = await getToken(messaging,{
        vapidKey:'BMunG0fMFDRqImowBlZFTwn1H2yRkCCf2tyMLPWErjpdEze9IE8LJLCCQBKQDywKpxJAs3tDk1qDf0eQy8XgSf0'
      })
      if(token){
        console.log(token);
      }
    }
  }
})
</script>
