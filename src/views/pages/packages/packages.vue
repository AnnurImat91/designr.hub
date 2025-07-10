<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
import { usePackageStore } from '@/stores/packages'
import { useTypeStore } from '@/stores/types'

const router = useRouter()
const authStore = useAuthStore()
const packageStore = usePackageStore()
const typeStore = useTypeStore()
const isLoggedIn = computed(() => authStore.isLoggedIn)

// memastikan jika belum login maka akan dialihkan ke login
onMounted(() => {
  if (!isLoggedIn.value) {
    authStore.logout()
    router.push('/login')
  }
})

const formatDate = (dateString: any) => {
  const date = new Date(dateString)
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0') // bulan dimulai dari 0
  const year = date.getFullYear()
  return `${day}-${month}-${year}`
}

const formatUSD = (value: any) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(value)
}

const bgPackage = (key: any, type: any) => {
  if (type == 'bg') {
    if (key == 0) {
      return 'bg-black text-white'
    }
    if (key == 1) {
      return 'bg-gray-100 text-black'
    }
    if (key == 2) {
      return 'bg-white text-black border'
    }
  } else if (type == 'button') {
    if (key == 0) {
      return 'bg-white text-black'
    }
    if (key == 1) {
      return 'bg-black text-white'
    }
    if (key == 2) {
      return 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white'
    }
  }
}

const tabsTemplate = ref([
  { id: 1, label: 'Templates' },
  { id: 2, label: 'Lr Presets' },
  { id: 3, label: 'Mockup' },
  { id: 4, label: 'Graphic Assets' }
])

// Active tab state
const activeTab = ref(1) // Default active tab

// Tabs data
const tabsDesign = ref([
  { id: 1, label: 'Hot' },
  { id: 2, label: 'Mothly' },
  { id: 4, label: 'Yearly' }
])

// Active tab state
const activeTabDesign = ref(1) // Default active tab

const packagesData = ref([])
const typesData = ref([])

const getPackages = async () => {
  try {
    let params = {}
    let response = await packageStore.getAll(params)
    let topThreePackages = response.packages.slice(0, 3)
    packagesData.value = topThreePackages
  } catch (error: any) {
    console.error('Gagal mengambil data packages', error)
  }
}

const getTypes = async () => {
  try {
    let params = {}
    let response = await typeStore.getAll(params)
    console.log('response', response)
    typesData.value = response.types
  } catch (error: any) {
    console.error('Gagal mengambil data packages', error)
  }
}

onMounted(async () => {
  await getPackages()
  await getTypes()
})
</script>

<template>
  <div class="box">
    <div id="pricing ">
      <h1 class="text-3xl mb-3 text-center mt-10">Subcription Plan</h1>
      <p class="mb-10 text-sm text-center">Select the Perfect Subscription Plan for You</p>
      <div class="flex justify-center">
        <div class="bg-gray-100 rounded-full flex items-center justify-between p-1 mb-5">
          <!-- Tabs -->
          <button
            v-for="tab in tabsDesign"
            :key="tab.id"
            class="text-xs"
            :class="['px-4 py-2 rounded-full transition', activeTabDesign === tab.id ? 'bg-white text-black' : 'text-gray-500']"
            @click="activeTabDesign = tab.id"
          >
            {{ tab.label }}
          </button>
        </div>
      </div>
      <div class="flex items-center justify-center mt-5 mb-20">
        <div class="w-full max-w-8xl">
          <!-- Menentukan lebar maksimum kontainer -->
          <div v-for="tab in tabsTemplate" :key="tab.id" v-show="activeTab === tab.id" class="tab-content">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              <!-- Card pertama -->
              <div v-for="(data, key) in packagesData" :key="key" :class="`${bgPackage(key, 'bg')}  p-6 m-3`" style="border-radius: 20px">
                <div>
                  <div class="flex justify-between items-center">
                    <div class="flex">
                      <div class="font-bold">{{ data.durationName }}</div>
                      <div class="bg-gradient-to-r from-blue-600 text-xs py-1 to-cyan-500 text-white px-2 rounded-lg text-center ms-2">Populer</div>
                    </div>
                    <p class="text-xs mt-6 mb-2" v-if="data.onDiscount">Diskon up to {{ formatDate(data.endDiscountDate) }}</p>
                    <p class="text-xs mt-12 mb-2" v-else></p>
                  </div>

                  <div class="flex mb-3 mt-10">
                    <p class="text-2xl font-semibold">{{ formatUSD(data.price) }}</p>
                    <small class="text-xs ms-2">
                      Billed per <br />
                      month yearly
                    </small>
                  </div>
                  <button @click="router.push(`/packages/payment/${data._id}`)" :class="`${bgPackage(key, 'button')} py-3 px-4 text-sm rounded-full mt-4 w-full`">Get Started</button>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-12">
            <div class="items-center justify-center">
              <h5 class="text-4xl mb-2">Included Application</h5>
              <p>Services may increase or decrease over time. Stay updated by following our instagram account.</p>
              <div class="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-6 gap-4 mt-8">
                <div v-for="(data, i) in typesData" :key="i" class="flex flex-col items-center">
                  <div class="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">
                    <img src="" alt="icon" class="w-8 h-8" />
                  </div>
                  <span class="text-sm mt-2 text-center">{{ data.name }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <br />
</template>
