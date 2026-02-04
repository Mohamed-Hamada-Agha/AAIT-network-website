<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
    <div
      v-for="(item, idx) in items"
      :key="item.key || item.to || idx"
      class="bg-white rounded-lg border px-6 py-5 hover:bg-gray-50 transition cursor-pointer"
      @click="toggle(idx)"
      role="button"
      :aria-expanded="isOpen(idx)"
    >
      <!-- السطر العلوي -->
      <div class="flex items-center justify-between">
        <!-- العنوان (ممكن يكون لينك) -->
        <NuxtLink
          v-if="item.to"
          :to="localePath(item.to)"
          class="font-semibold text-gray-800"
          @click.stop
        >
          {{ resolveLabel(item) }}
        </NuxtLink>

        <span v-else class="font-semibold text-gray-800">
          {{ resolveLabel(item) }}
        </span>

        <!-- السهم -->
        <span
          class="text-xl transition-transform duration-200"
          :class="isOpen(idx) ? 'rotate-90' : ''"
          @click.stop="toggle(idx)"
        >
          >
        </span>
      </div>

      <!-- الشرح -->
      <div
        v-if="isOpen(idx)"
        class="mt-3 text-sm text-gray-600 leading-6"
      >
        {{ resolveDesc(item) }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const localePath = useLocalePath()
const { t } = useI18n()

const props = defineProps({
  items: { type: Array, default: () => [] },
  /** لو true: يفتح عنصر واحد فقط في نفس الوقت */
  single: { type: Boolean, default: true }
})

/**
 * single=true => openIndex رقم واحد
 * single=false => ممكن تفتح أكتر من كارت
 */
const openIndex = ref(null)
const openSet = ref(new Set())

const isOpen = (idx) => {
  return props.single ? openIndex.value === idx : openSet.value.has(idx)
}

const toggle = (idx) => {
  if (props.single) {
    openIndex.value = openIndex.value === idx ? null : idx
    return
  }

  const s = new Set(openSet.value)
  s.has(idx) ? s.delete(idx) : s.add(idx)
  openSet.value = s
}

/** ترجمة العنوان */
const resolveLabel = (item) => {
  // خيار i18n
  if (item.labelKey) return t(item.labelKey)
  // خيار نص مباشر
  return item.label || ''
}

/** ترجمة الشرح */
const resolveDesc = (item) => {
  // خيار i18n
  if (item.descKey) return t(item.descKey)
  // خيار نص مباشر
  return item.desc || ''
}
</script>
