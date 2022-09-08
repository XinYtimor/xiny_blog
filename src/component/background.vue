<template>
  <div>
    <div class="background" :class="{ main: type === 'main' }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
//背景组件
export default {
  props: {
    type: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="less" scpoed>
.background {
  overflow: hidden;
  width: 100%;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 1px 2px 2px hsl(0deg 0% 0% /0.075),
    2px 4px 4px hsl(0deg 0% 0% /0.075), 3px 6px 6px hsl(0deg 0% 0% /0.075);
}
/* .main {
  padding: 1rem;
} */
</style>
