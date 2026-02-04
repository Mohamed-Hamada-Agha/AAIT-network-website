<template>
  <Teleport to="body">
    <div
      v-show="props.show"
      class="fixed inset-0 z-[60] grid place-items-center"
      role="alertdialog"
      aria-modal="true"
    >
      <div class="absolute inset-0 bg-black/40" @click="closeDialog"></div>

      <div
        class="relative flex justify-center items-center flex-col gap-4 z-10 w-[min(92%,420px)] rounded-2xl bg-white shadow-xl p-16"
      >
        <!-- علامة إكس لغلق المودال -->
        <button
          type="button"
          @click="closeDialog"
          class="absolute top-6 left-6 p-2 rounded-md hover:bg-gray-100 focus:outline-none"
          aria-label="Close dialog"
        >
          <svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <img
          src="/assets/images/dialog.svg"
          class="w-[85px] object-contain"
        />
        <h3 class="text-xl mb-1">You must login first</h3>
        <NuxtLink
          to="/auth/login"
          class="w-[100px] py-3 rounded-lg bg-[#dec8ab] text-black text-center"
        >
          Login
        </NuxtLink>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["close"]);

const closeDialog = () => {
  emit("close");
};
</script>
