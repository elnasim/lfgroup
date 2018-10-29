<template>
  <label>
    <input class="chbox" type="checkbox">
    <span class="custom-chbox"><span class="custom-chbox-box"></span></span>
  </label>
</template>

<script>
  export default {
    name: "Checkbox",
    props: ['value']
  }
</script>

<style scoped lang="scss">
  .chbox {
    display: none;
  }

  .chbox:checked + .custom-chbox .custom-chbox-box {
    opacity: 1;
  }

  .custom-chbox {
    border: 1px solid rgba(#000, .4);
    width: 20px;
    height: 20px;
    border-radius: 2px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .custom-chbox-box {
    background-color: #23A2FF;
    width: 12px;
    height: 12px;
    margin: auto;
    border-radius: 2px;
    display: block;
    opacity: 0;
  }
</style>
