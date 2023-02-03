<template>
    <div class="home">
        <SchoolItem/>
        <StudentItem/>
    </div>
  </template>
  
  <script>
  import SchoolItem from '@/components/pubsub/SchoolItem.vue'
  import StudentItem from '@/components/pubsub/StudentItem.vue'
  export default {
    name: 'PubSub',
    components: {
        SchoolItem,StudentItem
    }
  }
  </script>
  