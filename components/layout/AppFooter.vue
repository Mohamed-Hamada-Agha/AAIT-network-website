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
    <div class="hidden md:block">
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