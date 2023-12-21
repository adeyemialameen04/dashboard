<script>
  import Card from "./Card.svelte";
  export let imgPath;
  export let title;
  export let className;
</script>

<Card className={`flex flex-col gap-8 ${className}`}>
  <h3 class="font-semibold text-[#05004E] text-[1.125rem] mb-1">
    {title}
  </h3>
  <img src={imgPath} alt="" />
</Card>
