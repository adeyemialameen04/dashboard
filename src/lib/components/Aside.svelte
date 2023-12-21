<script>
  import Icon from "@iconify/svelte";
  import { asideData } from "../../data";

  export let show;
</script>

<div class:showAside={show} class="overlay">
  <aside class="py-4 px-3 flex flex-col gap-8 md:gap-6">
    <div class="flex flex-col gap-3">
      <div class="flex items-center gap-2 justify-between">
        <div class="flex items-center gap-2">
          <img
            src="/dummy logo.png"
            class="h-[35px] w-[35px] object-cover"
            alt=""
          />
          <h4
            class="text-[#151D48] text-[1.1rem] sm:text-[1.375rem] font-bold poppins"
          >
            Dabang
          </h4>
        </div>
        <button on:click class="md:hidden">
          <Icon
            class="text-[1.7rem] font-bold min-w-[24px]"
            icon="quill:hamburger"
          />
        </button>
      </div>
      <div
        class="flex bg-[#5D5FEF] shadow-md items-center px-3 py-2 gap-3 max-w-[11.2rem] rounded-xl"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <mask
            id="mask0_8121_67"
            style="mask-type:luminance"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="32"
            height="32"
          >
            <rect width="32" height="32" fill="white" />
          </mask>
          <g mask="url(#mask0_8121_67)">
            <path
              d="M13.6704 7.84579L14.0416 13.3657L14.2258 16.1401C14.2278 16.4255 14.2725 16.7089 14.3588 16.9813C14.5813 17.5101 15.1168 17.8461 15.6993 17.8227L24.5756 17.242C24.96 17.2357 25.3312 17.3795 25.6074 17.6417C25.8377 17.8603 25.9864 18.1461 26.0333 18.4536L26.049 18.6403C25.6817 23.7265 21.9461 27.9689 16.8704 29.064C11.7946 30.1591 6.58965 27.8457 4.08145 23.3799C3.35836 22.0824 2.90671 20.6564 2.75301 19.1853C2.68881 18.7499 2.66055 18.31 2.66848 17.87C2.66055 12.417 6.5438 7.70262 11.9796 6.5661C12.6339 6.46422 13.2752 6.81057 13.5376 7.40738C13.6054 7.54559 13.6502 7.69362 13.6704 7.84579Z"
              fill="white"
            />
            <path
              opacity="0.4"
              d="M29.3335 13.083L29.3242 13.1264L29.2973 13.1896L29.301 13.3631C29.2871 13.5929 29.1983 13.8139 29.0455 13.9926C28.8862 14.1786 28.6686 14.3053 28.429 14.3545L28.2829 14.3745L18.0418 15.0381C17.7011 15.0717 17.3619 14.9618 17.1087 14.7359C16.8975 14.5475 16.7626 14.2934 16.7245 14.0195L16.0371 3.79334C16.0251 3.75877 16.0251 3.72129 16.0371 3.6867C16.0465 3.40482 16.1706 3.13838 16.3817 2.9469C16.5926 2.75542 16.8731 2.65486 17.1602 2.66769C23.2401 2.82237 28.3499 7.19431 29.3335 13.083Z"
              fill="white"
            />
          </g>
        </svg>
        <p class="text-[.9rem] text-white font-semibold">Dashboard</p>
      </div>
    </div>
    <ul class="flex flex-col gap-4 pl-4">
      {#each asideData as aside (aside.id)}
        <li class="flex items-center gap-4 text-[#737791] text-sm">
          {@html aside.icon}
          {aside.name}
        </li>
      {/each}
    </ul>
    <div
      class="bg-[#5D5FEF] flex flex-col gap-2 py-5 rounded-xl max-w-[228px] px-10 items-center text-center"
    >
      <img src="/logo.png" class="h-[32px]" alt="" />
      <p class="font-semibold text-[1.1rem] text-white">Dabang Pro</p>
      <small class="text-[rgba(255,255,255,0.8)] text-[0.75rem]"
        >Get access to all features on tetumbas</small
      >
      <button
        class="text-[#5D5FEF] bg-white py-2 w-full font-semibold rounded-lg"
        >Get pro</button
      >
    </div>
  </aside>
</div>

<style>
  @media (max-width: 786px) {
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      transition: all 350ms ease-in-out;
      /* visibility: hidden; */
      display: none;
      z-index: -1;
    }
    aside {
      position: fixed;
      inset: 0 20% 0 0;
      height: 100%;
      overflow-y: scroll;
      background-color: white;
    }

    .showAside {
      visibility: visible;
      z-index: 19;
      display: block;
      /* display: flex; */
      /* opacity: 1;
      visibility: visible;
      transform: translateX(0); */
    }
  }
</style>
