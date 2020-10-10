<template>
  <div>
    <p>
      <router-link to="{ name: 'test02', params: { id: 'button跳转' }}">router-link跳转</router-link>
    </p>
    <p>
      <button @click="handleButtonRouterTo">button跳转</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {

    }
  },
  methods: {
    // button路由跳转
    handleButtonRouterTo() {
      // const that = this;
      this.$router.push({ name: 'test02', params: { id: 'button跳转' } })
    }
  }
}
</script>

<style>

</style>