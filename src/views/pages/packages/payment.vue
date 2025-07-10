<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import PaymentOption from './PaymentOption.vue' // Import komponen PaymentOption
import { usePackageStore } from '@/stores/packages'
import { useRoute } from 'vue-router'

export default defineComponent({
  components: {
    PaymentOption // Mendaftarkan komponen PaymentOption
  },
  setup() {
    const route = useRoute()
    const packageStore = usePackageStore()
    const activeTab = ref<'virtual' | 'ewallet'>('virtual') // Menyimpan tab aktif (Virtual Account atau E-wallet)
    const selectedPayment = ref<string>('') // Variabel untuk menyimpan bank yang dipilih
    const showPaymentDetails = ref(false) // Mengontrol apakah detail pembayaran muncul setelah checkout
    const activeAccordion = ref<string | null>(null) // Track which accordion is active
    const packagesData = ref([])
    const total = ref(0)

    // Fungsi untuk menangani hover
    const handleHover = (payment: string) => {
      selectedPayment.value = payment
    }

    // Fungsi untuk menangani klik/select bank
    const handleSelect = (payment: string) => {
      selectedPayment.value = payment
    }

    const toggleAccordion = (accordionName: string) => {
      if (activeAccordion.value === accordionName) {
        activeAccordion.value = null // Close if the same accordion is clicked
      } else {
        activeAccordion.value = accordionName // Open the selected accordion
      }
    }

    const formatUSD = (value) => {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(value)
    }

    const getPackages = async () => {
      try {
        const id = route.params._id
        let response = await packageStore.getAll()
        packagesData.value = response.packages.find((res) => res._id == id)
        if (packagesData.value.onDiscount) {
          total.value = parseFloat(packagesData.value.price) - parseFloat(packagesData.value.discountPrice)
        } else {
          total.value = packagesData.value.price
        }
      } catch (error: any) {
        console.error('Gagal mengambil data packages', error)
      }
    }

    onMounted(async () => {
      await getPackages()
    })

    return {
      activeTab,
      selectedPayment,
      showPaymentDetails,
      activeAccordion,
      toggleAccordion,
      handleHover,
      handleSelect,
      packagesData,
      formatUSD,
      total
    }
  }
})
</script>

<template>
  <!-- Layout Dua Kolom -->
  <div class="box">
    <h1 class="text-3xl mb-3 text-center mt-10">Select Payment Method</h1>
    <p class="mb-10 text-sm text-center">Choose the perfect payment method for you</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Order Details Kiri -->
      <div class="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h3 class="text-xl text-center font-semibold text-gray-800">Package Purchase</h3>
        <p class="text-4xl mt-2 text-center font-medium text-gray-600">
          <o class="text-primary"> {{ packagesData.durationName }} </o> {{ packagesData.packageName }}
        </p>
        <p class="text-sm text-center text-gray-500">Billed / month yearly</p>

        <div class="space-y-2 mt-4">
          <div class="">
            <span class="text-lg font-semibold text-gray-800">Order Details</span>
          </div>
          <div class="flex justify-between border-t pt-2 mt-4">
            <span class="text-md text-gray-700">1 Year plan</span>
            <span class="text-md text-gray-700">{{ formatUSD(packagesData.price) }}</span>
          </div>
          <div class="flex justify-between" v-if="packagesData.onDiscount">
            <span class="text-md text-gray-700">Discount</span>
            <span class="text-md text-gray-700">-{{ formatUSD(packagesData.discountPrice) }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-md text-gray-700">Voucher discount</span>
            <span class="text-md text-gray-700">Rp 0</span>
          </div>
          <div class="flex justify-between border-t pt-2 mt-4">
            <span class="text-lg font-semibold text-gray-800">Total</span>
            <span class="text-lg font-semibold text-gray-800">{{ formatUSD(total) }}</span>
          </div>
        </div>

        <div class="mt-6 text-sm text-gray-600 text-center">
          <p>By confirming your subscription, you authorize Designer Hub to charge you for future payments in accordance with their terms. You can cancel your subscription at any time.</p>
          <p class="mt-2">By placing an order, you agree to our Terms of Service and Privacy Policy.</p>
        </div>
      </div>

      <!-- Daftar Pembayaran Kanan -->
      <div class="space-y-4">
        <!-- Tab Header -->
        <div class="flex mb-6 border-b border-gray-200">
          <button
            @click="activeTab = 'virtual'"
            :class="{
              'text-blue-600 border-b-2 border-blue-600': activeTab === 'virtual',
              '': activeTab !== 'virtual'
            }"
            class="flex-1 text-lg font-medium py-2 text-center"
          >
            Virtual Account
          </button>
          <button
            @click="activeTab = 'ewallet'"
            :class="{
              'text-blue-600 border-b-2 border-blue-600': activeTab === 'ewallet',
              '': activeTab !== 'ewallet'
            }"
            class="flex-1 text-lg font-medium py-2 text-center"
          >
            E-wallet
          </button>
        </div>

        <!-- Daftar Pembayaran berdasarkan Tab -->
        <div v-if="activeTab === 'virtual'">
          <div class="space-y-4">
            <PaymentOption
              :bankName="'Mandiri'"
              :fee="'5.500'"
              :isHovered="selectedPayment === 'Mandiri'"
              :isSelected="selectedPayment === 'Mandiri'"
              @hover="handleHover('Mandiri')"
              @select="handleSelect('Mandiri')"
            />
            <PaymentOption :bankName="'BNI'" :fee="'5.500'" :isHovered="selectedPayment === 'BNI'" :isSelected="selectedPayment === 'BNI'" @hover="handleHover('BNI')" @select="handleSelect('BNI')" />
            <PaymentOption :bankName="'BRI'" :fee="'5.500'" :isHovered="selectedPayment === 'BRI'" :isSelected="selectedPayment === 'BRI'" @hover="handleHover('BRI')" @select="handleSelect('BRI')" />
            <PaymentOption :bankName="'BSI'" :fee="'5.500'" :isHovered="selectedPayment === 'BSI'" :isSelected="selectedPayment === 'BSI'" @hover="handleHover('BSI')" @select="handleSelect('BSI')" />
          </div>
        </div>

        <div v-else-if="activeTab === 'ewallet'">
          <div class="space-y-4">
            <PaymentOption :bankName="'QRIS'" :fee="'0'" :isHovered="selectedPayment === 'QRIS'" :isSelected="selectedPayment === 'QRIS'" @hover="handleHover('QRIS')" @select="handleSelect('QRIS')" />
            <PaymentOption :bankName="'OVO'" :fee="'0'" :isHovered="selectedPayment === 'OVO'" :isSelected="selectedPayment === 'OVO'" @hover="handleHover('OVO')" @select="handleSelect('OVO')" />
            <PaymentOption :bankName="'DANA'" :fee="'0'" :isHovered="selectedPayment === 'DANA'" :isSelected="selectedPayment === 'DANA'" @hover="handleHover('DANA')" @select="handleSelect('DANA')" />
          </div>
        </div>

        <!-- Form Input Voucher dan Tombol Checkout -->
        <div class="flex justify-between items-center mt-6">
          <!-- Input Voucher -->
          <div class="flex-1 mr-4">
            <input type="text" placeholder="Voucher Code" class="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <!-- Tombol Checkout -->
          <div>
            <button class="bg-blue-600 text-white py-2 px-6 rounded-full font-semibold hover:bg-blue-700 transition duration-300" :disabled="!selectedPayment" @click="showPaymentDetails = true">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>

    <hr class="border-t-2 border-gray-300 my-6 mt-10 mb-10" />
    <!-- Standard HR -->

    <!-- Layout Dua Kolom -->
    <div v-if="showPaymentDetails" class="grid grid-cols-10 gap-6 mb-20">
      <!-- Generated Payment Numbers (Kiri) -->
      <div class="col-span-4">
        <h4 class="text-xl font-semibold text-gray-800">Generated payment numbers</h4>
        <p class="mt-8">Mandiri Virtual Account</p>
        <p class="text-blue-600 text-4xl font-semibold mt-4">171661551729872</p>
        <p class="text-sm text-gray-500 mt-2">Transaction ID: 12616666667282991716628</p>
      </div>

      <!-- Payment Procedure (Kanan) -->
      <div class="col-span-6 space-y-4">
        <h4 class="text-xl font-semibold text-gray-800">Payment Procedure</h4>

        <!-- Accordion Livin' By Mandiri -->
        <div class="border-b">
          <div @click="toggleAccordion('livin')" class="cursor-pointer py-2 flex justify-between items-center">
            <span class="text-lg text-gray-700">Livin' By Mandiri</span>
            <svg
              :class="{ 'rotate-180': activeAccordion === 'livin' }"
              class="transition-transform duration-300 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
          <div v-if="activeAccordion === 'livin'" class="pl-4 py-2 text-sm text-gray-600">
            <ul class="list-disc space-y-2">
              <li>Login ke Livin'</li>
              <li>Pilih menu "Bayar"</li>
              <li>Ketik "NAMA LAYANAN" atau "KODE LAYANAN" pada bagian search</li>
              <li>Masukkan No VA: 8889940038762222</li>
              <li>Pastikan detail pembayaran sudah sesuai...</li>
            </ul>
          </div>
        </div>

        <!-- Accordion ATM Mandiri -->
        <div class="border-b">
          <div @click="toggleAccordion('atmMandiri')" class="cursor-pointer py-2 flex justify-between items-center">
            <span class="text-lg text-gray-700">ATM Mandiri</span>
            <svg
              :class="{ 'rotate-180': activeAccordion === 'atmMandiri' }"
              class="transition-transform duration-300 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
          <div v-if="activeAccordion === 'atmMandiri'" class="pl-4 py-2 text-sm text-gray-600">
            <ul class="list-disc space-y-2">
              <li>Login ke ATM Mandiri</li>
              <li>Pilih "Transfer" lalu pilih "Virtual Account"</li>
              <li>Masukkan nomor VA yang tertera pada halaman ini</li>
              <li>Ikuti petunjuk selanjutnya untuk menyelesaikan pembayaran</li>
            </ul>
          </div>
        </div>

        <!-- Accordion ATM Bank Lain -->
        <div class="border-b">
          <div @click="toggleAccordion('atmBankLain')" class="cursor-pointer py-2 flex justify-between items-center">
            <span class="text-lg text-gray-700">ATM Bank Lain</span>
            <svg
              :class="{ 'rotate-180': activeAccordion === 'atmBankLain' }"
              class="transition-transform duration-300 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
          <div v-if="activeAccordion === 'atmBankLain'" class="pl-4 py-2 text-sm text-gray-600">
            <ul class="list-disc space-y-2">
              <li>Pilih menu transfer dan pilih "Virtual Account"</li>
              <li>Masukkan nomor VA yang tertera pada halaman ini</li>
              <li>Ikuti instruksi untuk menyelesaikan pembayaran</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Gaya tambahan atau penyesuaian di sini */
</style>
