<template>
  <div class="relative inline-block">
    <button
      type="button"
      class="menu-item flex items-center gap-2"
      @click="toggle"
      aria-haspopup="menu"
      aria-controls="categs_menu_list"
      :aria-expanded="menuOpen.toString()"
    >
      {{ label }}
    </button>
    <Menu
      ref="menuRef"
      :model="menuItems"
      :popup="true"
      appendTo="body"
      id="categs_menu_list"
      class="categs-menu p-menu p-component p-menu-overlay"
      @show="menuOpen = true"
      @hide="menuOpen = false"
    >
      <template #item="{ item, props }">
        <li :id="item._id" class="p-menuitem" role="menuitem" v-bind="props.itemAttrs">
          <div class="p-menuitem-content " data-pc-section="content">
            <RouterLink :to="item.href" data-pc-section="action"
            class=" bg-white pl-5 border flex border-b-[#e5c073] py-5">
              {{ item.label }}
            </RouterLink>
          </div>
        </li>
      </template>
    </Menu>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Menu from 'primevue/menu'

const props = defineProps({
  label: { type: String, default: 'Menue' },
  // Array: [{ id: Number|String, name: String }]
  categories: { type: Array, default: () => [] },
  // مسار الروابط زي اللي في الصورة
  localePrefix: { type: String, default: '/en/category-' }
})

const menuRef = ref()
const menuOpen = ref(false)

const menuItems = computed(() =>
  props.categories.map((c, i) => ({
    _id: `categs_menu_${i}`,
    label: c.name,
    href: `${props.localePrefix}${c.id}`
  }))
)
function toggle (e) {
  menuRef.value?.toggle(e)
}
</script>

<style scoped>
:deep(.menu-item) {
  position: relative;
  display: inline-block;      
  padding-bottom: 4px;        
}
:deep(.menu-item::after) {
  content: "";
  position: absolute;
  left: 0;                    
  bottom: -2px;               
  height: 2px;             
  width: 100%;
  background: #dec8ab;    
  transform: scaleX(0);
  transform-origin: left center; 
  transition: transform .25s ease;
}
:deep(.menu-item:hover::after),
:deep(.p-menuitem-content:focus-within .menu-item::after) {
  transform: scaleX(1);
}
</style>