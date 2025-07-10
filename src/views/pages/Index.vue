<script setup lang="ts">
import { computed } from 'vue'
import { ref, onMounted } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { useAuthStore } from '@/stores/auth'
import axios from 'axios'
import { usePackageStore } from '@/stores/packages'
import type { Package } from '@/stores/packages'
import { useCategoryStore} from '@/stores/categories'
import type { Category } from '@/stores/categories'
import { useTypeStore} from '@/stores/types'
import type { Type} from '@/stores/types'
import { IconChevronCompactDown, IconChevronCompactUp } from '@tabler/icons-vue'

const RecentOrders = [
  {
    id: 2,
    title: 'Text Center',
    img: 'https://s3-alpha-sig.figma.com/img/7013/2af5/8717a1974cbcfe4c0db4e7d349cd1917?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IdSRdxyWr1vE8T7o8vzTX6LUfv3xtloxkTx81C~I41os66-X2a9y6LOw0eVjOp6M3tXW~HFYr1svlgiKxAR8VcCmmT3ScdGt0A7ARPgn67~oM3fZhmxpFHidrlAcgErmykRSAA9dFNb5ca2mTXHb8juHeWjLKmbElZk0ZUM-PmKFitmD2FG1n5ru8q4XnL9l-Bcy0CoZTkBiw~QXqnNATCZqSSGeFYm5dafDxVK29BI~wFRZxcnPRtchaqO12pqvra8~P2skNxeOS0wAVDal6oUt5JJkGNEzy7B8neIO7mVEXZoL9W0sK7TOq7MsZBK-Rk~hi37v8DdGnIk-ouCVhA__'
  },
  {
    id: 3,
    title: 'Presentation',
    img: 'https://s3-alpha-sig.figma.com/img/88a4/dc77/8cfd21681636f67a62e5d063498067ee?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KV3RjIPWCajpJkMtWyDBSFJyQIQb4CcJKCoT1iQ8uhXxf3ukh2J2dVy7yfHEbpgPFPWsHrFyPYCJnV-gZsQi2rxI8XQ96oGaP0sAakiuwsSXDc91IBgRN28Cter3QY-BlAHFx9FQ2OWojN8sEScMBplN1B5TYuhwfRNnziD~hlZzOGfWw6armeLGw3ljBWhjm9FgPAFIbTy6eYkqa0QViKSQBNlVnE46x5pX2YezaSwdGoSszrt~UNYPd-NAZVSztllg0VAzPHLibE~d4Z5fyQCc7AiCXp9DeOgx-iozCYI9BsyAWag~2r8I5h5xrm~B-nRTCVqr6CKrWyZxT8GoLQ__'
  },
  {
    id: 1,
    title: 'Banner',
    img: 'https://s3-alpha-sig.figma.com/img/df65/e098/4f525a79938da2bad56c486b68a22f27?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=i8qWTkz8X0fx6Fe3HrWLswLNECzPL9m0rdFGTvTfQ8orKGFsbyQsnFmEd~Xw5HpjjT28tCRb34V2NjYTBfEOzWCrCd69-W89~eWkedYTSaZwWMrQt3ufqFXy4a28nM7EK5SRs~Aujr7r6SbkBy55fM6eyyvJiPbwlpT9hzXDWBuEqhbgEI~6afpkRB6fLhzBbLpZUeuOH6dWZFXaoPOypSxDdMlDkqQFB4mAwj~X1JXiT71blmCUS5uxXR92E1dJPAquDyF3w8KzAxetCC9VlfU5JEnoJiKrHbiRxFvaEdfCDhB0NvmXpczYnGhpckfGFp3OjjL4yFjSkKsvo-Dawg__'
  },
  {
    id: 4,
    title: 'Poster',
    img: 'https://s3-alpha-sig.figma.com/img/46cb/f2fd/70f488c4c6da6735ba5df946aa331206?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sitGhFYi~skgzRghMuU4RApzBla7AE82OC7SJwdoD0ynE01S6Kt9Gk~n2P7p-cfGMAJb4srgFxn7VPnzMk2HwZgGrAgvtyikK63DPW10pXai~YARXriBlBnS~qg4LL4rr92FmLS4zwcE7qZkxt0J1cZg7Ey9DZa57OIHYKHsJTptOpKkR1tzrEZwLL0Fz9pqC23c-ouYMgBZvLHkuZsLaFxXgAC77RdDCpKir17KmMB4XLaJvAdSiCwLLkUVmn9ILvaah5u2yy7BHcUipDZyNSE12P-0VgrvBBySmP05HjbHXXnVm-iYwpdtTOt4WtQZDH7YoKs47ZVUu6e8muPQKg__'
  },
  {
    id: 5,
    title: 'Infografhics',
    img: 'https://s3-alpha-sig.figma.com/img/9b57/5e80/0aceb4aa7e2553a915b2d06e6fc757bc?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hjJTai20ByNhexDw4YbeEr78pQZS~cJ4OrH2qcPZGHoK~39eeEZCwTo9bUJI9-xPO5YXYnszbSRwW5rK8lCXA8FtrKsc9WilM1DvePB4i82ig0N0fxoXLhGd4DEkUnmLaJb~2~ymqnwAFLWYlG5~6bRO6hwazXFqx~feyOZ-EMGmiZinlt9-drHw59SmWbPVkSWwbuAplx9CKlTE7BAlcDFIm8dB-lUhLrQpxZwTirPnAU4c-uoQI8zLvdveL39BxEc9A439rLfQ4ot3iEhIXfm5y-8FUuOFEzMVGEfe05Ecuufke598n0f~ZhKHlImGL6VFYnHOaILKdi0ZcrjKzQ__'
  }
]

const router = useRouter()
const menuOpen = ref(false)
const authStore = useAuthStore()
const packageStore = usePackageStore()
const categoryStore = useCategoryStore()
const typeStore = useTypeStore()
const isLoggedIn = computed(() => authStore.isLoggedIn)

const apiUrl = import.meta.env.VITE_API_URL_FILE

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

const bgPackage = (key: number, type: string) => {
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

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const handleLogout = async () => {
  authStore.logout()
  try {
    await axios.post(`${import.meta.env.VITE_API_URL}api/auth/logout`, {
      withCredentials: true
    })
  } catch (error: any) {
    console.error(error)
  }
}

const showAll = ref(false)

const showMany = ref(false)


// Active tab state
const activeTab = ref(0) // Default active tab

// Tabs data
const tabsPackage = ref([
  { id: 1, label: 'Hot' },
  { id: 2, label: 'Mothly' },
  { id: 3, label: 'Yearly' }
])

// Active tab state
const activeTabPackage = ref(1) 

const packagesData = ref<Package[]>([])

const packageStart = ref<Package>({} as Package)

const categoryData = ref<Category[]>([]);

const activeTabType = ref("") 

const typeData = ref<Type[]>([]);

const getPackages = async () => {
  try {
    let params = {}
    let response = await packageStore.getAll(params)
    let topThreePackages = response.packages.slice(0, 3)
    let findPackageStart = response.packages.reduce((min: any, item: any) => item.price < min.price ? item : min)
    packagesData.value = topThreePackages
    console.log('packagesData', packagesData)
    packageStart.value = findPackageStart
  } catch (error: any) {
    console.error('Gagal mengambil data packages', error)
  }
}
const getCategories = async () => {
  try {
    let params = {}
    let response = await categoryStore.getAll(params)
    categoryData.value = response.data
    activeTabType.value = categoryData.value[0]._id
  } catch (error: any) {
    console.error('Gagal mengambil data categoris', error)
  }
}
const getTypes = async () => {
  try {
    let params = {
      categoryId: activeTabType.value
    }
    let response = await typeStore.getAll(params)
    typeData.value = response.types
    if (typeData.value.length > 24) {
      showMany.value = true
    }
  } catch (error: any) {
    console.error('Gagal mengambil data categoris', error)
  }
}

const visibleType = computed(() => {
  return showAll.value ? typeData.value : typeData.value.slice(0, 24)
})

onMounted(async () => {
  await getPackages()
  await getCategories()
  await getTypes()
})
</script>
<style>
/* Tambahkan ke file CSS Anda */
.scrollbar-hide {
  -ms-overflow-style: none;
  /* Untuk Internet Explorer 10+ */
  scrollbar-width: none;
  /* Untuk Firefox */
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
  /* Untuk Chrome, Safari, dan Opera */
}
</style>
<template>
  <div class="container text-black">
    <div class="flex justify-center">
      <div class="fixed top-0 left-1/2 transform -translate-x-1/2 mt-5 mb-5 sm:mt-5 sm:mb-5 bg-white border border-gray-300 rounded-lg lg:rounded-full px-7 py-3 z-50 w-full max-w-3xl">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <div class="">
            <img src="/public/logo.png" class="w-[100px]" alt="" />
          </div>

          <!-- Hamburger Menu (Mobile) -->
          <div class="md:hidden">
            <button @click="toggleMenu" class="focus:outline-none">
              <svg class="w-6 h-6 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>

          <!-- Menu Items (Hidden on Mobile) -->
          <div class="hidden md:flex items-center space-x-6 text-sm">
            <a href="#home" class="hover:text-blue-700">Home</a>
            <a href="#features" class="hover:text-blue-700">Features</a>
            <a href="#aboutus" class="hover:text-blue-700">About us</a>
            <a href="#pricing" class="hover:text-blue-700">Pricing</a>
          </div>

          <!-- Actions -->
          <div v-if="isLoggedIn" class="hidden md:flex items-center space-x-4 text-sm font-semibold">
            <RouterLink to="/home" class="hover:text-blue-700">Dashboard</RouterLink>
            <p @click="handleLogout" class="hover:text-blue-700">Logout</p>
          </div>
          <!-- Jika belum login, tampilkan link Signup dan Login -->
          <div v-else class="hidden md:flex items-center space-x-4 text-sm font-semibold">
            <RouterLink to="/register" class="hover:text-blue-700">Signup</RouterLink>
            <RouterLink to="/login" class="hover:text-blue-700">Login</RouterLink>
          </div>
        </div>

        <!-- Mobile Dropdown Menu -->
        <div v-if="menuOpen" class="flex flex-col mt-3 space-y-3 md:hidden text-sm">
          <a href="#hero" class="hover:text-blue-700">Home</a>
          <a href="#features" class="hover:text-blue-700">Features</a>
          <a href="#aboutus" class="hover:text-blue-700">About us</a>
          <a href="#pricing" class="hover:text-blue-700">Pricing</a>
          <hr class="border-gray-200" />
          <RouterLink to="/register" class="hover:text-blue-700 font-semibold">Signup</RouterLink>
          <RouterLink to="/login" class="hover:text-blue-700 font-semibold">Login</RouterLink>
        </div>
      </div>
    </div>

    <div id="hero" class="flex justify-center" style="margin-top: 160px">
      <center>
        <h1 class="text text-black">
          Empower Your Creativity with <br />
          <h1 class="bg-gradient-to-r text from-blue-600 to-cyan-500 inline-block text-transparent bg-clip-text">Professional</h1>
          Tools and Templates
        </h1>
        <div class="mt-3">
          Unlock your potential with our exclusive library of tools, templates, <br />
          and presets designed to elevate your work.
        </div>
        <div class="flex justify-center gap-4 mt-10">
          <button
            @click="router.push(`/packages/payment/${packageStart._id}`)"
            class="text-white bg-primary hover:bg-primary/80 rounded-full text-sm px-5 py-1.5 me-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
          >
            Start from ${{packageStart.price}}/ Month
          </button>
          <button @click="router.push(`/packages/payment/${packageStart._id}`)" class="hover:bg-gray-100 bg-white border rounded-full text-sm px-5 py-1.5 me-2 mb-2 dark:bg-dark-600 dark:hover:bg-dark-700 focus:outline-none dark:focus:ring-primary-800">
            See our plans <span class="ms-1">➔</span>
          </button>
        </div>
      </center>
    </div>
    <br />
    <div class="mt-20 flex justify-center mb-20">
      <div class="relative bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-xl">
        <iframe
          class="w-full lg:w-[1100px] lg:h-[600px] rounded-xl bg-white"
          src="https://www.youtube.com/embed/HpwsZrhdcW8?si=OnMVtzNMT8E692_O"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <div class="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 blur-[120px] opacity-80 -z-10 rounded-xl"></div>
      </div>
    </div>
    <br /><br /><br />
    <div id="features" class="container mx-auto text-center">
      <div class="grid grid-cols-5 md:grid-cols-5 gap-6 justify-items-center mb-20">
        <img src="/public/images/icon/f.png" alt="Logo 1" class="w-12 h-12 mt-7" />
        <img src="/public/images/icon/notion.png" alt="Logo 2" class="w-12 h-12 mt-20" />
        <img src="/public/images/icon/canva.png" alt="Logo 3" class="w-12 h-12" />
        <img src="/public/images/icon/diamond.png" alt="Logo 4" class="w-12 h-12 mt-10" />
        <img src="/public/images/icon/lr.png" alt="Logo 4" class="w-12 h-12 mt-15" />
      </div>
      <br />
      <div class="text-sm mb-10">
        A Growing Collection of <br />
        Premium Design Tools, Templates, and Assets
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        <div class="text-center">
          <h3 class="text-3xl font-bold">1,500+ Templates</h3>
        </div>
        <div class="text-center">
          <h3 class="text-3xl font-bold">500,000+ Assets</h3>
        </div>
        <div class="text-center">
          <h3 class="text-3xl font-bold">Premium Access Tools</h3>
        </div>
      </div>
      <br /><br />

      <div class="grid grid-cols-5 md:grid-cols-5 gap-6 justify-items-center mb-20">
        <img src="/public/images/icon/figma.png" alt="Logo 1" class="w-12 h-12" />
        <img src="/public/images/icon/un.png" alt="Logo 2" class="w-12 h-12 mt-20" />
        <img src="/public/images/icon/fgaris.png" alt="Logo 3" class="w-12 h-12 mt-10" />
        <img src="/public/images/icon/be.png" alt="Logo 4" class="w-12 h-12 mt-20" />
        <img src="/public/images/icon/bolapink.png" alt="Logo 4" class="w-12 h-12 mt-5" />
      </div>
    </div>
    <br />
    <div class="mt-20">
      <h2 class="text-center">
        Find design templates <br />
        in seconds.
      </h2>
      <br />
      <div class="flex justify-center">
        <div class="bg-gray-100 rounded-full flex items-center justify-between p-1 mt-5 mb-5">
          <!-- Tabs -->
          <button
            v-for="(category, i) in categoryData"
            :key="i"
            class="text-xs"
            :class="['px-4 py-2 rounded-full transition', activeTab === i ? 'bg-white text-black' : 'text-gray-500']"
            @click="activeTab = i"
          >
            {{ category.name }}
          </button>
        </div>
      </div>
      <!-- Pages -->
    </div>
  </div>
  <Swiper
    class="mt-10"
    slidesPerView="auto"
    :spaceBetween="24"
    loop
    :modules="[Autoplay, Navigation, Pagination]"
    :autoplay="{
      delay: 1400
    }"
    :pagination="{ enabled: true, el: '.pagi-recent', clickable: true }"
    :navigation="{
      prevEl: '.prev-recent',
      nextEl: '.next-recent'
    }"
    :breakpoints="{
      320: {
        slidesPerView: 1,
        spaceBetween: 16
      },
      480: { slidesPerView: 2, spaceBetween: 16 },
      768: { slidesPerView: 4, spaceBetween: 16 },
      992: {
        slidesPerView: 2,
        spaceBetween: 16
      },
      1200: { slidesPerView: 4, spaceBetween: 16 },
      1400: {
        slidesPerView: 2,
        spaceBetween: 16
      },
      1500: { slidesPerView: 4, spaceBetween: 24 },
      1900: {
        slidesPerView: 4,
        spaceBetween: 24
      }
    }"
  >
    <SwiperSlide v-for="{ id, img, title } in RecentOrders" :key="id">
      <div class="rounded-lg px-2">
        <div class="text-center mb-2 text-black">{{ title }}</div>
        <img :src="img" alt="" class="rounded-lg mb-4 w-full h-[200px] lg:w-full lg:h-[200px] object-cover" />
      </div>
    </SwiperSlide>
  </Swiper>
  <!-- <div class="pagi-recent justify-center flex gap-2 mt-6 lg:mt-10"></div> -->
  <br /><br />
  <div class="container mt-20 text-black" id="aboutus">
    <div class="flex flex-col lg:flex-row items-center justify-between px-6 py-12 lg:px-16">
      <div class="max-w-lg text-center lg:text-left mb-10">
        <h1 class="text-4xl font-bold mb-7">What is Designr.hub?</h1>
        <p class="mb-4">
          Imagine having access to premium templates, presets, and tools for all your design needs without paying for multiple subscriptions. With Designr.hub, you get an affordable and practical
          solution to create stunning designs effortlessly.
        </p>
        <p class="mb-7">
          Starting at just $...... /month, enjoy unlimited access to premium design assets and tools. No hassle, no limits — everything you need for creativity and productivity in one place.
        </p>
        <div class="flex justify-center lg:justify-start gap-4">
          <button @click="router.push('/register')" class="px-8 py-1.5 bg-primary text-white rounded-full text-sm hover:bg-blue-700">Signup</button>
          <button class="px-8 py-1.5 border border-gray-300 text-gray-700 rounded-full text-sm hover:bg-gray-100 flex items-center gap-2">See our plans <span>➔</span></button>
        </div>
      </div>

      <div class="mt-8 lg:mt-0">
        <div class="relative">
          <img src="/public/logo2.png" class="w-[350px] relative z-10" alt="Logo" />
          <div class="absolute inset-[-20px] bg-gradient-to-r from-cyan-500 to-green-300 blur-[150px] rounded-full z-0"></div>
        </div>
      </div>
    </div>
  </div>
  <br /><br /><br />
  <div class="relative mt-20">
    <!-- Gambar latar belakang -->
    <div class="absolute inset-0 z-0 bg-cover bg-center h-[100vh] bg-[url('/images/background/bg-benefits.png')]"></div>

    <!-- Teks -->
    <div class="relative z-10 text-white flex justify-center items-center h-[100vh]">
      <div class="text-center">
        <p>One account for all your design needs</p>
        <h1 class="font-bold bg-gradient-to-r text-6xl from-blue-600 to-cyan-500 inline-block text-transparent bg-clip-text">anytime, anywhere.</h1>
      </div>
    </div>
  </div>

  <div class="mt-20">
    <h2 class="text-center text-black">
      Here's what you get when <br />
      you subscribe
    </h2>
    <br />
    <div class="flex justify-center">
      <div class="bg-gray-100 rounded-full flex items-center justify-between p-1 mt-5 mb-5">
        <!-- Tabs -->
        <button
            v-for="(category, i) in categoryData"
            :key="i"
            class="text-xs"
            :class="['px-4 py-2 rounded-full transition', activeTabType === category._id ? 'bg-white text-black' : 'text-gray-500']"
            @click="activeTabType = category._id"
          >
            {{ category.name }}
          </button>
      </div>
    </div>
    <!-- Pages -->
  </div>
  <div class="bg-white px-4 sm:px-6 py-10">
    <div v-for="(category, i) in categoryData" :key="i" v-show="activeTabType === category._id" class="tab-content">
      <div class="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4 sm:gap-6 max-w-5xl mx-auto">
        <div v-for="(type, index) in visibleType" :key="index" class="flex flex-col items-center space-y-2">
         
          <img :src="apiUrl + 'types/' + type.logo" :alt="type.name ?? undefined" class="" style="width: 70px; height: 70px; border-radius: 12px" />
          <span class="text-xs sm:text-sm text-center text-black">{{ type.name }}</span>
        </div>
      </div>
    </div>

  <div class="" v-if="showMany">
    <!-- Gradient Overlay -->
    <div
      v-if="!showAll"
      class="-mt-20 h-24 sm:h-28 md:h-32 w-full relative"
      style="height: 100px; margin-top: -100px; background: #ffffff; background: linear-gradient(0deg, rgba(255, 255, 255, 1) 36%, rgba(253, 187, 45, 0) 100%)"
    ></div> 

    <!-- Show More Button -->
    <div class="flex justify-center mt-2" v-if="!showAll">
      <div class="flex flex-col items-center space-y-2 cursor-pointer"  @click="showAll = true">
        <IconChevronCompactDown class=" text-black w-6 h-6" />
        <button class="text-blue-600 text-sm sm:text-base">Show me more</button>
      </div>
    </div>
    <div class="flex justify-center mt-2" v-if="showAll">
      <div class="flex flex-col items-center space-y-2 cursor-pointer" @click="showAll = false">
        <IconChevronCompactUp class="text-black w-6 h-6" />
        <button class="text-blue-600 text-sm sm:text-base">Show less</button>
      </div>
    </div>
  </div>

  </div>

  <div class="contaier mt-20 text-black">
    <br /><br />
    <div class="max-w-6xl mx-auto py-10 text-center">
      <h1 class="text-3xl mb-3">Steps to Use Designr.hub</h1>
      <p class="mb-10 text-sm">Comprehensive Guide for Installing Extensions</p>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div class="p-3">
          <div class="h-60 rounded-xl bg-gray-200 mb-3"></div>
          <div class="font-semibold">Sign Up or Create Account</div>
          <p class="text-xs mt-3">Get started by registering your account on Designr.hub.</p>
        </div>

        <div class="p-3">
          <div class="h-60 rounded-xl bg-gray-200 mb-3"></div>
          <div class="font-semibold">Subscribe Your Preferred Plan</div>
          <p class="text-xs mt-3">Choose the plan that suits your needs and subscribe instantly.</p>
        </div>

        <div class="p-3">
          <div class="h-60 rounded-xl bg-gray-200 mb-3"></div>
          <div class="font-semibold">Install Designr.hub Extension</div>
          <p class="text-xs mt-3">Add our Chrome extension to unlock full access to all premium tools and assets.</p>
        </div>

        <div class="p-3">
          <div class="h-60 rounded-xl bg-gray-200 mb-3"></div>
          <div class="font-semibold">Start Accessing Premium Tools</div>
          <p class="text-xs mt-3">Enjoy unlimited access to premium templates, presets, and tools anytime, anywhere.</p>
        </div>
      </div>
    </div>
    <br /><br /><br />
  </div>

  <div id="pricing ">
    <h1 class="text-3xl mb-3 text-center text-black mt-20">Design like a pro</h1>
    <p class="mb-10 text-sm text-center text-black">
      Get full access to all apps & features from only Rp5,260.27 per day <br />
      —Cancel anytime.
    </p>
    <div class="flex justify-center">
      <div class="bg-gray-100 rounded-full flex items-center justify-between p-1 mb-5">
        <!-- Tabs -->
        <button
          v-for="tab in tabsPackage"
          :key="tab.id"
          class="text-xs"
          :class="['px-4 py-2 rounded-full transition', activeTabPackage === tab.id ? 'bg-white text-black' : 'text-gray-500']"
          @click="activeTabPackage = tab.id"
        >
          {{ tab.label }}
        </button>
      </div>
    </div>
    <div class="flex items-center justify-center mt-5 mb-20">
      <div class="w-full max-w-4xl">
        <!-- Menentukan lebar maksimum kontainer -->
         
        <div v-for="tab in tabsPackage" :key="tab.id" v-show="activeTabPackage === tab.id" class="tab-content">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <!-- Card pertama -->
            <div v-for="(data, key) in packagesData" :key="key" :class="`${bgPackage(key, 'bg')} p-6 m-3`" style="border-radius: 20px">
              <div class="flex">
                <div class="font-bold">{{ data.durationName }}</div>
                <div class="bg-gradient-to-r from-blue-600 text-xs py-1 to-cyan-500 text-white px-2 rounded-lg text-center ms-2">Populer</div>
              </div>
              <p class="text-xs mt-6 mb-2" v-if="data.onDiscount">Diskon up to {{ formatDate(data.endDiscountDate) }}</p>
              <p class="text-xs mt-12 mb-2" v-else></p>
              <div class="flex mb-3">
                <p class="text-2xl font-semibold">{{ formatUSD(data.price) }}</p>
                <p class="text-xs ms-2">
                  Billed per <br />
                  month yearly
                </p>
              </div>
              <router-link to="/packages" class="block text-center py-1.5 px-4 text-sm rounded-full mt-4 w-full" :class="bgPackage(key, 'button')"> Get Started </router-link>
            </div>

            <!-- Card kedua -->
            <!-- <div class="bg-gray-100 text-black p-6 m-3" style="border-radius: 20px">
              <div class="flex">
                <div class="font-bold">1 Month</div>
                <div class="bg-gradient-to-r from-blue-600 text-xs py-1 to-cyan-500 text-white px-2 rounded-lg text-center ms-2">Populer</div>
              </div>
              <p class="text-xs mt-6 mb-2">Diskon sampai -/-/-</p>
              <div class="flex mb-3">
                <p class="text-2xl font-semibold">Rp 123,000</p>
                <p class="text-xs ms-2">
                  Billed per <br />
                  month yearly
                </p>
              </div>
              <button class="bg-black text-white py-1.5 px-4 text-sm rounded-full mt-4 w-full">Get Started</button>
            </div> -->

            <!-- Card ketiga -->
            <!-- <div class="bg-white text-black p-6 m-3 border" style="border-radius: 20px">
              <div class="flex">
                <div class="font-bold">1 Month</div>
                <div class="bg-gradient-to-r from-blue-600 text-xs py-1 to-cyan-500 text-white px-2 rounded-lg text-center ms-2">Populer</div>
              </div>
              <p class="text-xs mt-6 mb-2">Diskon sampai -/-/-</p>
              <div class="flex mb-3">
                <p class="text-2xl font-semibold">Rp 123,000</p>
                <p class="text-xs ms-2">
                  Billed per <br />
                  month yearly
                </p>
              </div>
              <button class="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-1.5 px-4 text-sm rounded-full mt-4 w-full">Get Started</button>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>

  <footer class="text-gray-400 py-10" style="background-color: #2d2d2d">
    <div class="container mx-auto grid grid-cols-1 mt-5 md:grid-cols-4 gap-8">
      <!-- Logo and Slogan -->
      <div>
        <div class="bg-white rounded-lg flex justify-center items-center w-[170px]">
          <img src="/public/logo.png" class="w-[150px] p-3" alt="" />
        </div>
        <!-- <p class="mt-2">Slogan</p> -->
      </div>

      <!-- Tentang Kami -->
      <div>
        <h2 class="text-white text-lg font-semibold">Tentang Kami</h2>
        <ul class="mt-2 space-y-1 text-sm">
          <li><a href="#" class="hover:text-white">Fitur</a></li>
          <li><a href="#" class="hover:text-white">Layanan</a></li>
          <li><a href="#" class="hover:text-white">Tentang</a></li>
          <li><a href="#" class="hover:text-white">Harga</a></li>
        </ul>
      </div>

      <!-- Portal Pengguna -->
      <div>
        <h2 class="text-white text-lg font-semibold">Portal Pengguna</h2>
        <ul class="mt-2 space-y-1 text-sm">
          <li><a href="#" class="hover:text-white">Unduh Ekstensi</a></li>
        </ul>
      </div>

      <!-- Add-Ons -->
      <div>
        <h2 class="text-white text-lg font-semibold">Add-Ons</h2>
        <ul class="mt-2 space-y-1 text-sm">
          <li><a href="#" class="hover:text-white">Akses Dashboard</a></li>
        </ul>
      </div>
    </div>

    <!-- Bottom Section -->
    <div class="container mx-auto mt-20 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
      <p class="text-sm">&copy; Designrhub.com 2025-2026, all rights reserved</p>
      <div class="flex space-x-4 mt-4 md:mt-0">
        <a href="#" class="text-sm hover:text-white">Privacy Policy</a>
        <a href="#" class="text-sm hover:text-white">Terms</a>
      </div>
    </div>
  </footer>
</template>
