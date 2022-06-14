<template>
  <div >
   
    <HelloWorld msg="Welcome to Vue Zahid will teach"/>
    <HelloWorld msg="First Let's Go deep into css"/>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
