<template>
  <div  id="app">
    
  <router-view/>
  <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>

import FooterGuide from "./components/FooterGuide/FooterGuide.vue"

export default {
   mounted(){
this.$store.dispatch('getAddress')
// this.$store.dispatch('getUserinfo')
// this.$store.dispatch('getCategorys')
// this.$store.dispatch('getShops')
  
  },
  components:{
    FooterGuide
  }
}
</script>

<style lang="stylus" scoped >
#app
  width 100%
  height 100%
  background #f5f5f5
</style>
