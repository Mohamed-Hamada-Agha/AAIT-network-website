<template>
  <footer class="bg-gray-100">
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
    <!-- العمود الاول  -->
    <div class="flex flex-col items-center justify-center">
      <div class="flex flex-col items-center gap-3 mb-4">
        <img v-if="props.brand?.logo" :src="props.brand.logo" alt="logo" class="max-w-[150px] object-contain" />
      </div>

      <p class="text-sm leading-7 max-w-xs text-center mx-auto ">
        {{ props.brand?.descriptionKey ? t(props.brand.descriptionKey) : (props.brand?.description || '') }}
      </p>
    </div>
   <!-- العمود الثاني -->
    <div class="flex flex-col items-center md:items-start">
      <div class="grid grid-cols-2 gap-8 w-full">
          <ul class="space-y-3 text-gray-600">
          <li v-for="link in (props.linksGroups[0] || [])" :key="link.to + link.label">
            <NuxtLink
              :to="localePath(link.to)"
              @click="setActive(link.label)"
              :class="[
                'transition hover:text-cyan-600 block text-center md:text-right',
                activeLabel === link.label ? 'text-cyan-600 font-bold' : ''
              ]"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>

        <ul class="space-y-3 text-gray-600">
          <li v-for="link in (props.linksGroups[1] || [])" :key="link.to + link.label">
            <NuxtLink
              :to="localePath(link.to)"
              @click="setActive(link.label)"
              :class="[
                'transition hover:text-cyan-600 block text-center md:text-right',
                activeLabel === link.label ? 'text-cyan-600 font-bold' : ''
              ]"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
   <!-- العمود الثالث -->
    <div class="">
      <ul class="flex gap-6 my-4">
       <li>
        <a href="" class="w-[40px] h-[40px] rounded-md">
          <img src="/assets/images/1736001966_6520.webp" alt="" 
          class="w-[40px] h-[40px] rounded-md object-cover transition-all duration-700 ease-in-out hover:rotate-[360deg] hover:rounded-full cursor-pointer">
        </a>
       </li> 
       <li>
        <a href="" class="w-[40px] h-[40px] rounded-md">
          <img src="/assets/images/1736001841_8892.webp" alt="" 
           class="w-[40px] h-[40px] rounded-md object-cover transition-all duration-700 ease-in-out hover:rotate-[360deg] hover:rounded-full cursor-pointer">
        </a>
       </li> 
       <li>
        <a href="" class="w-[40px] h-[40px] rounded-md">
          <img src="/assets/images/1736001966_6520.webp" alt="" 
           class="w-[40px] h-[40px] rounded-md object-cover transition-all duration-700 ease-in-out hover:rotate-[360deg] hover:rounded-full cursor-pointer">
        </a>
       </li> 
       <li>
        <a href="" class="w-[40px] h-[40px] rounded-md">
          <img src="/assets/images/1736001841_8892.webp" alt="" 
           class="w-[40px] h-[40px] rounded-md object-cover transition-all duration-700 ease-in-out hover:rotate-[360deg] hover:rounded-full cursor-pointer">
        </a>
       </li> 
      </ul>
      <div class=" text-lg">
        <h2>
          جميع الحقوق محفوظةلشركة 
          <a href="/pages/index.vue" class="text-cyan-600">أوامر الشبكة</a>
        </h2>
      </div>
      </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'


const localePath = useLocalePath()
const { t } = useI18n()

const props = defineProps({
  brand: { type: Object, default: () => ({}) },
  linksGroups: { type: Array, default: () => [] },
  icons: { type: Array, default: () => [] }
})

const activeLabel = ref('الرئيسية')
const setActive = (label) => (activeLabel.value = label)
</script>