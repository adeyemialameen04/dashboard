<script>
  import Aside from "./lib/components/Aside.svelte";
  import Navbar from "./lib/components/Navbar.svelte";
  let show = true;
  const handleNavbar = () => {
    show = !show;
    console.log("JJJJJJJJJJJ");
    console.log(show);
    if (show === true) {
      console.log("TRUE");
    } else {
      console.log("FALLLLSEE");
    }
  };

  //   window.addEventListener("resize", () => {
  //     show = window.innerWidth > 768;
  //   });
</script>

<div class="flex items-start">
  <Aside {show} />
  <Navbar on:click={handleNavbar} />
</div>
