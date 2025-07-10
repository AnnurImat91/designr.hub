import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import axios from 'axios'
import EmptyLayoutVue from '@/layouts/EmptyLayout.vue'
import DemoPagesVue from '@/views/DemoPages.vue'
import Login from '@/views/pages/auth/Login.vue'
import Register from '@/views/pages/auth/Register.vue'
import Home from '@/views/pages/dashboard/Home.vue'
import ActivityLog from '@/views/pages/activity-log/ActivityLog.vue'
import Items from '@/views/pages/items/Items.vue'
import ExtentionDownload from '@/views/pages/extention-download/ExtentionDownload.vue'
import PurchaseHistory from '@/views/pages/purchase-history/PurchaseHistory.vue'
import InstallationGuide from '@/views/pages/installation-guide/InstallationGuide.vue'
import Profile from '@/views/pages/settings/Profile.vue'
import AccountInformation from '@/views/pages/settings/AccountInformation.vue'
import Billing from '@/views/pages/settings/Billing.vue'
import Index from '@/views/pages/Index.vue'
import Security from '@/views/pages/settings/Security.vue'
import DeleteAccount from '@/views/pages/settings/DeleteAccount.vue'

// Package
import Packages from '@/views/pages/packages/packages.vue'
import PackagesPayment from '@/views/pages/packages/payment.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index,
      meta: { layout: EmptyLayoutVue }
    },
    {
      path: '/demos',
      name: 'demos',
      component: DemoPagesVue,
      meta: { layout: EmptyLayoutVue }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { layout: EmptyLayoutVue }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: { layout: EmptyLayoutVue }
    },
    {
      path: '/home',
      name: 'dashboard-home',
      component: Home,
      // harus login
      meta: { requiresAuth: true }
    },
    {
      path: '/activity-log',
      name: 'activitylog',
      component: ActivityLog,
      meta: { requiresAuth: true }
    },
    {
      path: '/items',
      name: 'items',
      component: Items,
      meta: { requiresAuth: true }
    },
    {
      path: '/extention-download',
      name: 'extentiondownload',
      component: ExtentionDownload,
      meta: { requiresAuth: true }
    },
    {
      path: '/purchase-history',
      name: 'purchase-history',
      component: PurchaseHistory,
      meta: { requiresAuth: true }
    },
    {
      path: '/installation-guide',
      name: 'installation-guide',
      component: InstallationGuide,
      meta: { requiresAuth: true }
    },
    {
      path: '/settings/profile',
      name: 'settings-profile',
      component: Profile,
      meta: { requiresAuth: true }
    },
    {
      path: '/settings/account-information',
      name: 'settings-account-information',
      component: AccountInformation,
      meta: { requiresAuth: true }
    },
    {
      path: '/settings/billing',
      name: 'settings-billing',
      component: Billing,
      meta: { requiresAuth: true }
    },
    {
      path: '/settings/security',
      name: 'settings-security',
      component: Security,
      meta: { requiresAuth: true }
    },
    {
      path: '/settings/delete-account',
      name: 'settings-delete-account',
      component: DeleteAccount,
      meta: { requiresAuth: true }
    },
    {
      path: '/packages',
      name: 'packages',
      component: Packages,
      meta: { requiresAuth: true }
    },
    {
      path: '/packages/payment/:_id',
      name: 'packages-payment',
      component: PackagesPayment,
      meta: { requiresAuth: true }
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})
// ✅ Middleware untuk mengecek autentikasi sebelum mengakses rute
router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()
  const isLoggedIn = authStore.isLoggedIn
  const token = authStore.token

  // Jika sudah di halaman login, jangan looping terus ke /login
  if (to.path === '/login' && !isLoggedIn) {
    return next()
  }

  // Jika halaman butuh auth dan tidak login, langsung redirect
  if (to.meta.requiresAuth && !isLoggedIn) {
    console.log('Akses ditolak: Pengguna belum login.')
    return next('/login')
  }

  let response = null

  if (isLoggedIn) {
    try {
      response = await axios.get(`${import.meta.env.VITE_API_URL}api/user/profile/dashboard`, {
        withCredentials: true,
        headers: { Authorization: `Bearer ${token}` }
      })
    } catch (error: any) {
      console.error('Gagal mengambil data profil pengguna:', error?.response?.status)

      // Jika error 401 (Unauthorized), logout user dan redirect ke /login
      if (error?.response?.status === 401) {
        authStore.logout()
        return next('/login')
      }

      return next()
    }
  }

  if (to.meta.requiresAuth && response?.data?.currentSessionToken !== token) {
    console.log('Akses ditolak: Token tidak valid.')
    return next('/login')
  }

  next()
})

export default router
