<script>
  // export let class;;
  export let className;
</script>

<div class={`card  px-5 py-7 ${className}`}>
  <slot />
</div>

<style>
  .card {
    border-radius: 20px;
    border: 1px solid #f8f9fa;
    background: #fff;
    box-shadow: 0px 4px 20px 0px rgba(238, 238, 238, 0.5);
  }
</style>
