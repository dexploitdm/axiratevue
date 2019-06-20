<template>
   <button
   :type="type"
   :class="cls">
   {{title}}</button>
</template>

<script>
export default {
    props: ['title', 'cls', 'type'],
}
</script>
