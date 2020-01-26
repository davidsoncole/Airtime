<template>
  <div class="webapp">
    <Sidebar />
    <Toolsbar />
    <v-content style="padding: 0px 0px 0px 0px;">
        <router-view></router-view>
    </v-content>
    <Footpad />
  </div>
</template>

<script>
import Toolsbar from '@/components/webapp/Toolsbar'
import Footpad from '@/components/webapp/Footpad'
import Sidebar from '@/components/webapp/Sidebar'


export default {
    components: { 
    Toolsbar,
    Footpad,
    Sidebar
    },

};
</script>

<style scoped>

</style>
