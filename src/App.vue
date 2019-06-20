<template>
  <div id="app">
  
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
    <div v-if="$route.meta.LkLayout">
      <LkLayout>
        <router-view/>
        <!-- content -->
      </LkLayout>
    </div>



   



  </div>
</template>

<script>
  import LayoutAuth from '@/layouts/auth';
  import LayoutBasic from '@/layouts/basic';
  import LkLayout from '@/layouts/lk';
  export default {
    components: {
      LayoutAuth,
      LayoutBasic,
      LkLayout
    }
  }
</script>
