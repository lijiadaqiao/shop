<template>
    <div>shoprat</div>
</template>

<script>
export default {
mounted(){
       this.$store.dispatch('getRatings')
       
    },
}
</script>

<style lang="stylus" scoped>

</style>