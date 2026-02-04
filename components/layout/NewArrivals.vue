  <template>
    <section class="w-full">
      <!-- (1) Header: عنوان يمين + عرض الكل شمال -->
      <div class="flex items-center justify-between my-12">
        <h2 class="text-2xl font-bold">{{ title }}</h2>
        <NuxtLink
          :to="viewAllLink"
          class="text-base hover:underline"
        >
          عرض الكل
        </NuxtLink>
      </div>
        <div class="relative overflow-hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <!-- Track بيتحرك translateX -->
          <div
            class="flex gap-6 transition-transform duration-500"
            :style="{ transform: `translateX(${translateX}px)` }"
          >
            <!-- كارت المنتج -->
            <div
              v-for="product in products"
              :key="product.id"
              class="w-full h-auto object-cover"
            >
              <ProductCard
                :product="product"
                @toggle-fav="toggleFav"
                @add-to-cart="addToCart"
              />
            </div>
          </div>
        </div>
    </section>
  </template>

  <script setup>
  import { ref, computed, onMounted } from 'vue'
  import ProductCard from '~/components/Products/ProductCard.vue'
import BaseButton from '~/components/layout/BaseButton.vue';
  const products = ref([
  {
    id: 1,
    name: 'منتج تيست عساف',
    description: 'وصف',
    price: 80,
    image: '/images/105.jpg',
    rating: 4,
    isOutOfStock: false,
    isFav: false
  },
  {
    id: 2,
    name: 'اسم',
    description: 'وصف',
    price: 80,
    image: '/images/104.jpg',
    rating: 3,
    isOutOfStock: false,
    isFav: false
  },
  {
    id: 3,
    name: 'اسم',
    description: 'وصف',
    price: 80,
    image: '/images/102.jpg',
    rating: 4,
    isOutOfStock: false,
    isFav: false
  },
  {
    id: 4,
    name: 'اسم',
    description: 'وصف',
    price: 80,
    image: '/images/101.jpg',
    rating: 4,
    isOutOfStock: false,
    isFav: false
  }
]);

  /**
   * Props:
   * - title: عنوان السيكشن (مثلاً: وصل حديثاً)
   * - viewAllLink: لينك "عرض الكل"
   * - products: Array منتجات
   */
  const props = defineProps({
    title: { type: String, default: 'وصل حديثاً' },
    viewAllLink: { type: String, default: '/' },
    products: { type: Array, default: () => [] }
  })

  /**
   * إعدادات السلايدر:
   * cardWidth = عرض الكارت
   * gap = المسافة بين الكروت
   */
  const cardWidth = 320
  const gap = 24 // gap-6 = 24px تقريباً

  const current = ref(0)

  // نحسب الإزاحة بالبكسل
  const translateX = computed(() => {
    // في RTL: بنخلي الحركة عكسية عشان تمشي صح
    // لو مشروعك RTL خليها زي ما هي
    return -(current.value * (cardWidth + gap))
  })

  const maxIndex = computed(() => {
    // أقصى خطوة ممكنة بحيث مايبقاش track فاضي
    // بنفترض إنك عايز تعرض 3-4 كروت حسب الشاشة،
    // هنا هنخليها تتحرك لحد آخر عنصر
    return Math.max(props.products.length - 1, 0)
  })

  const next = () => {
    if (current.value < maxIndex.value) current.value++
  }

  const prev = () => {
    if (current.value > 0) current.value--
  }

  // أمثلة events
  const toggleFav = (id) => {
    // هنا انت تربطها بـ store أو API
    console.log('toggle fav', id)
  }

  const addToCart = (id) => {
    console.log('add to cart', id)
  }
  </script>
