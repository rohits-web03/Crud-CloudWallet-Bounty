<script>
    import Footer from "$lib/Footer.svelte";
import Navbar from "$lib/Navbar.svelte";
    import "../global.css";
  </script>
<div class="bg-neutral-900 absolute top-0 left-0 right-0 text-white mx-auto min-h-screen">
    <Navbar />
    <slot />
    <Footer />
</div> 