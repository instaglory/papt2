<template>
  <div>
    <navbar></navbar>
    <uploadForm></uploadForm>
    <signin></signin>
  </div>
</template>

<script>
import navbar from './components/navbar'
import signin from './components/signin'
import uploadForm from './components/uploadForm'

export default {
  data() {
    return {
      message: "Hello world"
    };
  },
  components:{
    navbar: navbar,
    signin,
    uploadForm
  },
  methods:{
  }
};
</script>

<style scoped>
</style>    