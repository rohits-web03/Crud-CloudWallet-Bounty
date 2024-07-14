<script>
    let isOpen = false;
  
    function toggleMenu() {
      isOpen = !isOpen;
    }
  </script>
  
  <nav class="sticky top-0 w-full bg-neutral-950 text-white py-6">
    <div class="container mx-auto flex justify-between items-center px-8 lg:px-2">
      <a href="/" class="flex items-center space-x-2">
        <img src="https://tsoc.dev/TSoC_Favicon.svg" alt="TSOC Logo" class="h-8 w-8">
        <span class="font-bold text-xl">TSOC'24</span>
      </a>
      <div class="hidden md:flex space-x-8 lg:space-x-16 text-lg">
        <a href="/" class="hover:text-blue-400">Home</a>
        <a href="/profiles" class="hover:text-blue-400">Profiles</a>
        <a href="/raw-wallets" class="hover:text-blue-400">Raw Wallet</a>
        <a href="/cloud-wallets" class="hover:text-blue-400">Cloud Wallet</a>
        <a href="/bounty" class="hover:text-blue-400">Bounty</a>
      </div>
      <button class="md:hidden focus:outline-none" on:click={toggleMenu}>
        <img src="./bars-3.svg" alt="Hamburger icon" class="w-7 h-7"/>
      </button>
    </div>
    <div class={`z-[100] mt-4 md:hidden ${isOpen ? 'block' : 'hidden'}`}>
      <a href="/" class="block py-2 px-4 hover:bg-gray-700">Home</a>
      <a href="/profiles" class="block py-2 px-4 hover:bg-gray-700">Profiles</a>
      <a href="/raw-wallets" class="block py-2 px-4 hover:bg-gray-700">Raw Wallet</a>
      <a href="/cloud-wallets" class="block py-2 px-4 hover:bg-gray-700">Cloud Wallet</a>
      <a href="/bounty" class="block py-2 px-4 hover:bg-gray-700">Bounty</a>
    </div>
  </nav>
  
  <style>
    .container {
      max-width: 1200px;
    }
  </style>
  