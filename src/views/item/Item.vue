<template>
  <div>
    <item-container fatherComponent='item'></item-container>
  </div>
</template>

<script>
import ItemContainer from '../../components/content/ItemContainer'

export default {
  name: 'Item',
  // data() {
  //   startTime: Date.now()
  // },
  components: {
    ItemContainer
  },
  created() {
    this.$store.commit('REMBER_TIME')
  }
}
</script>

<style scoped>

</style>