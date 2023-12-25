<script>
  export let data;
</script>

<article
  style="background-color: {data.bgColour};"
  class="flex flex-col gap-3 py-6 px-4 rounded-[20px] w-full"
>
  {@html data.icon}
  <h5 class="mb-1 text-[#151D48] text-2xl font-semibold">{data.number}</h5>
  <div>
    <p class="font-medium text-[#425166]">{data.desc}</p>
    <small class="text-[#4079ED] text-[0.75rem]">{data.profit}</small>
  </div>
</article>
