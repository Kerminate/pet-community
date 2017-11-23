<template>
  <div id="app">
    <head-bar></head-bar>
    <dialoger ref="dialog"></dialoger>
  </div>
</template>

<script>
import HeadBar from '@/components/HeadBar'
import Dialoger from '@/components/Dialoger'

export default {
  name: 'app',
  components: {
    HeadBar,
    Dialoger
  }
}
</script>

<style>
</style>
