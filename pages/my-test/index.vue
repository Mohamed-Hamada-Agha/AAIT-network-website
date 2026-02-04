<!-- <template> -->
<!--    
     <Teleport to="body">
      <div
        v-show="showDialog"
        class="fixed inset-0 z-[60] grid place-items-center"
        role="alertdialog"
        aria-modal="true"
      >
        <div class="absolute inset-0 bg-black/40" @click="closeDialog"></div>

        <div class="relative z-10 w-[min(92%,420px)] rounded-2xl bg-white shadow-xl p-6 text-center"> -->
          <!-- الدائرة الصفراء بعلامة الصح البيضاء -->
          <!-- <div class="mx-auto mb-4 flex items-center justify-center w-20 h-20 rounded-full bg-yellow-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h3 class="text-xl  mb-1">!تم إرسال طلبك</h3>
          <p class="text-gray-800/70 mb-6">فى انتظار موافقة الادارة</p>

          <button 
            @click="navigateTo('/auth/login')"
            class="w-full py-3 rounded-lg bg-yellow-400 hover:bg-yellow-500 text-black "
          >
            تسجيل الدخول
          </button>
          <Nuxtlink to=""></Nuxtlink>
        </div>
      </div>
    </Teleport> -->
  <!-- <NuxtLink to="/auth/changePassword" class="text-right mb-6 text-black">
            Forgot password?
          </NuxtLink>
          const showmenue = ref(false);
const openmenue = () => {
  showmenue.value = true
} -->
    <!-- // google-map // -->
     <!-- import { defineNuxtPlugin } from '#app'
     import VueGoogleMaps from '@fawmi/vue-google-maps'
     
     export default defineNuxtPlugin((nuxtApp) => {
       nuxtApp.vueApp.use(VueGoogleMaps, {
         load: {
           key: 'AIzaSyDj4HfjX06HEoYjeRn8Zaw7VYnfBhZdPrI',
           libraries: 'places',
         },
       })
     }); -->
     <!-- // PRIMEVUE -->
      <!-- 
       import { defineNuxtPlugin } from '#app'
       import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
       
       export default defineNuxtPlugin((nuxtApp) => {
       
         nuxtApp.$pinia.use(piniaPluginPersistedstate)
       })
       -->
       <!--  // PERSISTED STATE -->
         <!-- 
          import { defineNuxtPlugin } from '#app'
          import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

          export default defineNuxtPlugin((nuxtApp) => {

          nuxtApp.$pinia.use(piniaPluginPersistedstate)
          })
          -->
          <!-- مدخل الدولة -->
          <!-- <span class="absolute right-4 text-gray-600 text-sm pointer-events-none">+966</span> -->
<!-- </template> -->

<!-- <script setup> 
// const otp = ref(['', '', '', ''])
// const otpInputs = ref([])
// const isLoading = ref(false)
// const showVerifyModal = ref(false)
// const verificationCode = ref(['','','','']) // سيُستبدل عند الإرسال
// const lastFourDigits = computed(() => phone.value.slice(-4))

// const showDialog = ref(false)

/* إرسال رمز التحقق: توليد كود وفتح مودال OTP */
// const sendVerificationCode = async () => {
//   if (!phone.value) {
//     alert("يجب إدخال رقم الجوال")
//     return
//   }
//   isLoading.value = true
//   try {
//     verificationCode.value = '1234'
//     console.log("تم إرسال الرمز:", verificationCode.value) // للاختبار
//     showVerifyModal.value = true
//     requestAnimationFrame(() => {
//       const inputs = otpInputs.value
//       if (inputs && inputs[0] && typeof inputs[0].focus === 'function') inputs[0].focus()
//     })
//   } catch (e) {
//     alert("حدث خطأ في إرسال الرمز")
//   } finally {
//     isLoading.value = false
//   }
// }
/* منع تمرير الصفحة أثناء أي طبقة */
// watch([showVerifyModal, showDialog], () => {
//   const open = showVerifyModal.value || showDialog.value
//   document.documentElement.classList.toggle('overflow-hidden', open)
// })

/* اكتمال الرمز */
// const isOtpComplete = computed(() => otp.value.every(d => d !== ''))

/* إدخال الأرقام في OTP */
// const handleInput = (index, event) => {
//   const value = (event.target.value || '').replace(/\D/g, '').slice(0, 1)
//   otp.value[index] = value
//   if (value && index < otp.value.length - 1) {
//     otpInputs.value[index + 1]?.focus()
//   }
// }
/* Backspace */
// const handleBackspace = (index, event) => {
//   if (event.key === 'Backspace' && !otp.value[index] && index > 0) {
//     otpInputs.value[index - 1]?.focus()
//   }
// }
/* تأكيد الرمز */
// const handleSubmit = () => {
//   if (!isOtpComplete.value) return
//   const enteredCode = otp.value.join('')

//   if (enteredCode === verificationCode.value) {
//     isLoading.value = true
//     setTimeout(() => {
//       isLoading.value = false
//       showVerifyModal.value = false 
//       showDialog.value = true 
//     }, 600)
//   } else {
//     alert("رمز التحقق غير صحيح")
//   }
// }
/* إغلاق مودال OTP */
// const closeModal = () => {
//   showVerifyModal.value = false
// }
// // composibleاللي جوة ال cursor تجربة ال
// const { count, increment, decrement, reset } = useCounter()

// const {  digits, isLoading, error,  isComplete, otpCode, handleInput, handleBackspace, verifyOtp, resetOtp} = useOtp()
// </script>

/////////////////  <!-- اللي شعالة تمام dropdown نسخة ال -->  /////////////////
 <template>
  <div class="top-12 left-6 flex items-center justify-center rounded-md">
    <InputGroup>
      <Select
        v-model="selectedCity"
        :options="cities"
        optionLabel="name"
        placeholder="English"
        class="dd text-lg"          
        panelClass="dd-panel"        
      />
    </InputGroup>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Select from 'primevue/select'

const selectedCity = ref(null)
const cities = ref([
  { name: 'العربية', code: 'ar', dir: 'rtl' },
  { name: 'English', code: 'en', dir: 'ltr' },
])
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
  padding: 10px 12px;
  font-size: 1rem;
  color: #000 !important;
}

/* الــplaceholder تحديدًا */
:deep(.dd .p-select-label.p-select-placeholder) {
  color: #000 !important;   /* غير اللون هنا لو حبيت */
  opacity: 0.9 !important;
}

/* (اختياري) تحكّم في أيقونة السهم */
:deep(.dd .p-select-dropdown) {
  width: 2.5rem;
  color: #000 !important;
}

/* لو ثيم الموقع داكن، سبنا الـSelect ده أبيض برضه */
:deep(.dark .dd.p-select) {
  background: #fff !important;
  color: #000 !important;
  border-color: #e5e7eb !important;
}

/* ========= dd-panel: القائمة (Dropdown Panel) ========= */
/* مهم: panel في الـbody، فـ لازم :global */
:global(.dd-panel) {
  width: 220px;
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
  background: #eff6ff; /* تحديد */
  color: #1d4ed8;
  font-weight: 600;
}
</style>

 <!-- ///////////// المفروض انك تظبط معا اللي المودال اللي فوق dropdown كود اسكريبت ل ///////////// -->
  <!-- <script setup>
import { ref, onMounted } from 'vue'
import Select from 'primevue/select'

const { locale, setLocale } = useI18n()

const languages = ref([
  { name: 'العربية', code: 'ar', dir: 'rtl' },
  { name: 'English', code: 'en', dir: 'ltr' },
])

const selectedLang = ref(null) -->
<!-- 
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
</script> -->