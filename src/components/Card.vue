<template>
  <div
    class="w-full max-w-[350px] h-[300px] rounded-xl bg-gray-100 flex flex-col items-center px-6 py-4"
  >
    <div>
      <div
        class="relative w-[180px] h-[180px] flex justify-center items-center"
      >
        <div
          class="relative w-[120px] h-[120px] rounded-full bg-gray-300"
        ></div>
        <img
          v-lazy="{
            src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
          }"
          alt=""
          class="absolute top-0 right-0 left-0"
        />
      </div>
    </div>
    <div class="mt-3">
      <h1 class="text-2xl text-gray-800 font-semibold tracking-wide">
        Charizard
      </h1>
    </div>
  </div>
</template>
