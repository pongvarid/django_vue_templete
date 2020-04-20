<template>
  <v-app>
    <Navbar/>
   <router-view />
  </v-app>
</template>

<script>
import Navbar from '../../components/root/Navbar';
export default {
  name: 'root',
  components:{
    Navbar
  }

}
</script>

<style>

</style>