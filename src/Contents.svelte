<script>
  import Aside from "./lib/components/Aside.svelte";
  import Main from "./lib/components/Main.svelte";
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

    if (show && window.innerWidth <= 768) {
      document.body.style.overflowY = "hidden";
      console.log("hidden");
    } else {
      document.body.style.overflowY = "scroll";
    }
  };

  window.addEventListener("resize", () => {
    show = false;
  });
</script>

<div class="flex items-start">
  <Aside {show} on:click={handleNavbar} />
  <!-- <Navbar on:click={handleNavbar} /> -->
  <Main on:click={handleNavbar} />
</div>
