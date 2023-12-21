<script>
  import { todaySalesData } from "../../data";
  import Bg from "./Bg.svelte";
  import Card from "./Card.svelte";
  import Graph from "./Graph.svelte";
  import Navbar from "./Navbar.svelte";
</script>

<div class="flex flex-col w-full">
  <Navbar on:click />
  <main class="px-4 bg-[#FAFBFC] py-4 flex flex-col gap-8">
    <div class="today-grid-cont">
      <Card className="h-fit flex gap-7 flex-col">
        <div class="flex justify-between w-full">
          <div>
            <h3
              class="font-semibold text-[#05004E] text-base sm:text-[1.125rem] mb-1"
            >
              Today’s Sales
            </h3>
            <p class="text-[#737791] text-[.9rem] sm:text-base">
              Sales Summery
            </p>
          </div>
          <button
            class="btn-shadow border-[#C3D3E2] border px-4 h-[40px] rounded-md flex items-center gap-1 text-[0.875rem] font-medium text-[#0F3659]"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.1007 5.11257L8.43899 2.83138C8.31472 2.72244 8.15784 2.66671 8.00013 2.66663C7.89223 2.66657 7.78393 2.69257 7.68544 2.74541C7.64154 2.76889 7.59984 2.79757 7.56128 2.83138L4.89959 5.11257C4.62003 5.35217 4.58763 5.77303 4.82723 6.0526C5.06683 6.33216 5.4877 6.36456 5.76726 6.12496L7.33342 4.78268V9.94578C7.33342 10.314 7.6319 10.6124 8.00009 10.6124C8.36828 10.6124 8.66676 10.314 8.66676 9.94578L8.66676 4.78261L10.233 6.12496C10.5126 6.36456 10.9334 6.33216 11.173 6.0526C11.4126 5.77303 11.3802 5.35217 11.1007 5.11257ZM4.00008 9.33329C4.00008 8.9651 4.29856 8.66663 4.66675 8.66663H5.66675C6.03494 8.66663 6.33341 8.36815 6.33341 7.99996C6.33341 7.63177 6.03494 7.33329 5.66675 7.33329H4.66675C3.56218 7.33329 2.66675 8.22872 2.66675 9.33329V11.3333C2.66675 12.4379 3.56218 13.3333 4.66675 13.3333H11.3334C12.438 13.3333 13.3334 12.4379 13.3334 11.3333V9.33329C13.3334 8.22872 12.438 7.33329 11.3334 7.33329H10.3334C9.96522 7.33329 9.66675 7.63177 9.66675 7.99996C9.66675 8.36815 9.96522 8.66663 10.3334 8.66663H11.3334C11.7016 8.66663 12.0001 8.9651 12.0001 9.33329V11.3333C12.0001 11.7015 11.7016 12 11.3334 12H4.66675C4.29856 12 4.00008 11.7015 4.00008 11.3333V9.33329Z"
                fill="#0F3659"
              />
            </svg> Export</button
          >
        </div>
        <div class="today-grid">
          {#each todaySalesData as data (data.id)}
            <Bg {data} />
          {/each}
        </div>
      </Card>
      <!-- <Card className="h-fit flex flex-col gap-8">
        <h3 class="font-semibold text-[#05004E] text-[1.125rem] mb-1">
          Visitor Insights
        </h3>
        <img src="/graph1.svg" alt="" />
      </Card> -->
      <!-- <Card className="h-fit"> -->
      <Graph className="h-fit" title="Visitor Insights" imgPath="/graph1.svg" />
      <!-- </Card> -->
    </div>
    <div class="today-grid">
      <div>
        <Graph className="" imgPath="/graph2.svg" title="Total Revenue" />
      </div>
      <div class="grid gap-3 grid-cols-1 md:grid-cols-2">
        <Graph
          className=""
          imgPath="/graph3.svg"
          title="Customer Satisfaction"
        />
        <Graph className="" imgPath="/graph4.svg" title="Target vs Reality" />
      </div>
    </div>
    <div class="today-grid">
      <div>
        <Graph className="" imgPath="/graph2.svg" title="Total Revenue" />
      </div>
      <div class="grid gap-3 grid-cols-1 md:grid-cols-2">
        <Graph
          className=""
          imgPath="/graph3.svg"
          title="Customer Satisfaction"
        />
        <Graph className="" imgPath="/graph4.svg" title="Target vs Reality" />
      </div>
    </div>
  </main>
</div>

<style>
  .btn-shadow {
    /* background-color: gray; */
    box-shadow: 0px 4px 20px 0px rgba(238, 238, 238, 0.5);
  }
  .today-grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  }

  .today-grid-cont {
    grid-template-columns: 1fr;
    display: grid;
    gap: 1.4rem;
  }

  @media (min-width: 768px) {
    .today-grid-cont {
      grid-template-columns: 1.6fr 1fr;
    }
  }
</style>
