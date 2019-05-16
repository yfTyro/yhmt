<template>
    <div>
      <Recommend/>
      <Special/>
      <Classify :op = '0'/>
      <Classify :op = '1'/>
      <Classify :op = '2'/>
      <Possible/>
    </div>
</template>
<script>
import Recommend from './Recommend'
import Special from './Special'
import Classify from './Classify'
import Possible from './Possible'
export default {
  components: {Recommend, Special, Classify, Possible}
}
</script>
<style>
</style>
