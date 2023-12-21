<script>
  import Aside from "./lib/components/Aside.svelte";
  import Main from "./lib/components/Main.svelte";
  import Navbar from "./lib/components/Navbar.svelte";
  let show = false;
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

  window.addEventListener("resize", () => {
    show = window.innerWidth > 768;
  });
</script>

<div class="flex items-start">
  <Aside {show} on:click={handleNavbar} />
  <!-- <Navbar on:click={handleNavbar} /> -->
  <Main on:click={handleNavbar} />
</div>
