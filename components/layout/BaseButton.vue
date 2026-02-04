<template>
  <button
    type="button"
    class="group relative overflow-hidden rounded-xl border border-cyan-500 bg-cyan-400 px-16 py-3 text-right shrink-0 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md "
    :class="btnClass"
  >
    <!-- الخلفية البيضاء (تظهر لما الأزرق يهرب) -->
    <span class="absolute inset-0 bg-white" aria-hidden="true" />

    <!-- نصين من اللون الأزرق -->
    <span
      class="absolute inset-y-0 right-0 w-[51%] bg-cyan-500 transition-transform duration-500 ease-out group-hover:translate-x-full"
      aria-hidden="true"
    />
    <span
      class="absolute inset-y-0 left-0 w-[51%] bg-cyan-500 transition-transform duration-500 ease-out group-hover:-translate-x-full"
      aria-hidden="true"
    />

    <!-- المحتوى -->
    <span class="relative z-10 flex items-center justify-between gap-4">
      <span class="flex flex-col leading-tight">
        <span class="text-md font-semibold text-white transition-colors duration-300 group-hover:text-cyan-700">
          <slot name="label">{{ label }}</slot>
        </span>

        <span
          v-if="description || $slots.description"
          class="mt-1 text-xs text-white/90 transition-colors duration-300 group-hover:text-gray-600"
        >
          <slot name="description">{{ description }}</slot>
        </span>
      </span>
    </span>
  </button>
</template>

<script setup>
defineProps({
  label: { type: String, default: 'زرار' },
  description: { type: String, default: '' },
  btnClass: { type: [String, Array, Object], default: '' },
  iconClass: { type: [String, Array, Object], default: '' },
  widthClass: { type: String, default: 'w-48' },
})
</script>
