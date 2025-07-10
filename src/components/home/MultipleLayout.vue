<script setup lang="ts">
import { ref } from 'vue'
const layouts = [
  {
    id: 1,
    title: "Vertical layout",
    img: '/images/home/vertical.png',
    desc: "Enhance your workflow with Dashboi's Vertical Sidebar layout. Placed on the left side, this sidebar ensures efficient navigation, allowing quick access to key features. By optimizing screen space, Dashboi's SidebarLeft provides a focused and streamlined experience, ideal for productivity-driven applications.",
  },
  {
    id: 2,
    title: "Hovered layout",
    img: '/images/home/hovered.png',
    desc: "Step into a new realm of dashboard navigation with Dashboi's Horizontal layout. This unique design places the sidebar horizontally at the top, offering a panoramic view and efficient menu access. Enjoy a broad perspective for your projects while seamlessly switching between dashboards and components.",
  },
  {
    id: 3,
    title: "Two Column layout",
    img: '/images/home/two-column.png',
    desc: "Strike a harmonious balance between organization and content presentation with Dashboi's Two Column Sidebar layout. This design divides the screen into two columns, dedicating space for the sidebar on one side and allowing ample room for your main content. Achieve a well-organized workspace that enhances the overall user experience.",
  },
  {
    id: 4,
    title: "Horizontal layout",
    img: '/images/home/horizontal.png',
    desc: "Immerse yourself in the modern elegance of Dashboi's Hovered layout. This innovative design optimizes screen real estate by revealing the sidebar only on hover, providing a sleek and clutter-free interface. Enjoy a contemporary and intuitive user experience that seamlessly combines functionality with a polished aesthetic.",
  },
];
const activeTab = ref(1)
</script>

<template>
  <section id="layouts" class="py-14 xxl:py-28 bg-n0 dark:bg-bg4">
    <div class="container">
      <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h5 class="h5 text-primary font-semibold mb-2 lg:mb-4">
          Multiple layouts
        </h5>
        <h2 class="h2 mb-4 lg:mb-6">Master layout options</h2>
        <p class="text-sm md:text-base">
          Using the Vuejs Layouts concept, we have been able to create three
          different layouts that you can use in your project.
        </p>
      </div>
      <div class="flex flex-wrap justify-center max-w-max mx-auto rounded-xl bg-primary/5 dark:bg-bg3 p-3 mb-10 lg:mb-14">
        <button v-for="{ id, title } in layouts" @click="activeTab = id"
          :class="{ 'bg-primary text-n0': activeTab == id }" class="px-6 py-3 rounded-xl font-semibold" :key="id">
          {{ title }}
        </button>
      </div>
      <div v-for="layout in layouts" :key="layout.id">
        <div v-show="layout.id == activeTab">
          <div class="border border-n30 dark:border-n500 rounded-2xl">
            <img :width="1296" :height="643" :src="layout.img" class="rounded-t-2xl w-full" alt="layout img" />
            <div class="border-t border-n30 dark:border-n500 p-5 lg:p-8 gap-3">
              <h4 class="h4 mb-4">{{ layout.title }}</h4>
              <p class="text-sm md:text-base">{{ layout.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>