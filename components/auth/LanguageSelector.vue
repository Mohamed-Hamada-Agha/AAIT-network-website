<template>
  <div class="top-12 left-6 flex items-center justify-center rounded-md">
    <InputGroup>
      <Select
        v-model="selectedLang"
        :options="languages"
        optionLabel="name"
        placeholder="English"
        class="dd text-lg text-cyan-500"          
        panelClass="dd-panel"        
      />
    </InputGroup>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Select from 'primevue/select'

const { locale, setLocale } = useI18n()

const languages = ref([
  { name: 'العربية', code: 'ar', dir: 'rtl' },
  { name: 'English', code: 'en', dir: 'ltr' },
])

const selectedLang = ref(null) 

// تحديد اللغة الحالية عند التحميل
onMounted(() => {
  selectedLang.value = languages.value.find(l => l.code === locale.value) ?? languages.value[0]
})

// تغيير اللغة (بدون ما نلمس الثيم)
const changeLanguage = (event) => {
  const newLang = event?.value
  if (!newLang) return
  setLocale(newLang.code)

  // عدّل اتجاه ولغة الـHTML فقط
  if (typeof document !== 'undefined') {
    document.documentElement.dir  = newLang.dir
    document.documentElement.lang = newLang.code
  }

  // احفظ الاختيار (اختياري)
  try { localStorage.setItem('preferred-language', newLang.code) } catch {}
}
</script>

<style scoped>
/* ========= dd: الترجر + الـplaceholder ========= */
:deep(.dd.p-select) {
  /* خلي الخلفية أبيض والنص أسود بشكل صريح */
  background: transparent!important;
  color: #000 !important;
  min-height: 42px;
}

/* نص الحقل (القيمة) */
:deep(.dd .p-select-label) {
  padding: 10px 0px;
  font-size: 1.125rem;   
  color: #000 !important;
}

/* الــplaceholder تحديدًا */
/* :deep(.dd .p-select-label.p-select-placeholder) {
  color: #000 !important;  
  opacity: 0.9 !important;
} */

/* (اختياري) تحكّم في أيقونة السهم */
:deep(.dd .p-select-dropdown) {
  width: 2.5rem;
  color: #000 !important;
  padding: 10px 0px;
}

/* لو ثيم الموقع داكن، سبنا الـSelect ده أبيض برضه */
/* :deep(.dark .dd.p-select) {
  background: #fff !important;
  color: #000 !important;
  border-color: #e5e7eb !important;
} */
/* ========= dd-panel: القائمة (Dropdown Panel) ========= */
/* مهم: panel في الـbody، فـ لازم :global */
:global(.dd-panel) {
  width: 200px;
  background: #fff !important;
  color: #000 !important;
  border: 1px solid #e5e7eb !important;
  border-radius: 12px !important;
  padding: 8px !important;
  margin-top: -8px !important;
}
/* عناصر الخيارات داخل القائمة */
:global(.dd-panel .p-select-option) {
  padding: 10px 12px;
  border-radius: 8px;
  color: #000 !important;
  cursor: pointer;
}
  :global(.dd-panel .p-select-option.p-select-option-selected) {
    background: #eff6ff; 
    color: #1d4ed8;
    font-weight: 600;
  }
</style>
