<template>
      <div class="">
            <label for="mobile" class="block text-sm font-semibold  mb-2 text-black">Mobile Number</label>
            <div class="relative flex items-center rounded-lg border border-gray-300">
              <input
                id="mobile"
                v-model="props.modelValue.phone"
                @input="updatePhone"
                type="tel"
                placeholder="Enter mobile number"
                class="flex-1 w-full py-3 px-4 text-sm rounded-xl outline-none placeholder:text-gray-400"
              />
          <Select
            v-model="selected"
            :options="countries"
            optionLabel="name"
            class=" bg-transparent"
          >
          <template #value="{ value }">
            <div v-if="value" class="flex items-center justify-center gap-2">
              <img :src="value.flag" class="w-6 h-4 rounded-sm border" alt="" />
              <span class="text-sm">{{ value.dial }}</span>
            </div>
            <div v-else class="flex items-center justify-center gap-2">
              <span class="text-black">+966</span>
            </div>
          </template>
          <template #option="{ option }">
            <div class="flex items-center gap-2 justify-start py-1">
              <img :src="option.flag" class="w-6 h-4 rounded-sm border" alt="" />
              <span class="text-sm text-black">{{ option.name }}</span>
              <span class="text-xs text-black">({{ option.dial }})</span>
            </div>
          </template>
        </Select>
      </div>
    </div>
  </template>
<script setup>
  import { ref } from 'vue';
  import Select from 'primevue/select';

 const countries = [
  { name:'السعودية',dial:'+966',flag:'https://flagcdn.com/w40/sa.png' },
  { name: 'مصر',     dial: '+20',  flag: 'https://flagcdn.com/w40/eg.png' },
]
// هنا بنعرف الـ props والـ emits اللي بتسمح بالعمل مع v-model
const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);

// تحديث البيانات في الملف الأب
const updatePhone = (event) => {
  emit('update:modelValue', {
    ...props.modelValue,
    phone: event.target.value
  });
};
</script>