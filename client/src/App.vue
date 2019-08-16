<template>
  <div>
    <navbar></navbar>
    <uploadForm></uploadForm>
    <signin></signin>
    <home> </home>
    <profile> </profile>
    <commentSection> </commentSection>
  </div>
</template>

<script>
import navbar from './components/navbar'
import signin from './components/signin'
// import uploadForm from './components/uploadForm'
import commentSection from './components/comment-section'
import home from './components/home'
import profile from './components/profile'

export default {
  data() {
    return {
      message: "Hello world"
    };
  },
  components:{
    navbar,
    signin,
    uploadForm,
    commentSection,
    home,
    profile
  },
  methods:{
  }
};
</script>

<style scoped>
</style>    