<template>
  <div id="app">
    
    <div id="nav">  
      <div class="nav-others">
        <router-link to="/">Home</router-link> |
        <router-link to="/login">login</router-link> |
        <router-link to="/register">Register</router-link>
      </div>
    </div>

    <div v-if="$route.meta.authLayout">
      <LayoutAuth>
        <router-view/>
        <!-- content -->
      </LayoutAuth>
    </div>
    <div v-if="$route.meta.basicLayout">
      <LayoutBasic>
        <router-view/>
        <!-- content -->
      </LayoutBasic>
    </div>



   



  </div>
</template>

<script>
  import LayoutAuth from '@/layouts/auth';
  import LayoutBasic from '@/layouts/basic';
  export default {
    components: {
      LayoutAuth,
      LayoutBasic
    }
  }
</script>

<style>
#nav {
  width: 100%;
  position: absolute;
  bottom: 0;
  margin: 0 auto;
}
</style>