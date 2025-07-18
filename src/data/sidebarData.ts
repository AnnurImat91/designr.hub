import {
  IconApiApp,
  IconApps,
  IconBorderAll,
  IconBriefcase,
  IconBuildingBank,
  IconChartPie,
  IconCoins,
  IconDeviceMobilePlus,
  IconFileImport,
  IconGrid4x4,
  IconGridGoldenratio,
  IconHeartHandshake,
  IconHome2,
  IconHourglassEmpty,
  IconLayoutGrid,
  IconLayoutList,
  IconList,
  IconNotes,
  IconReportAnalytics,
  IconSettingsBolt,
  IconShoppingBag,
  IconUserShield
} from '@tabler/icons-vue'
export const sidebarData = [
  {
    id: 1,
    title: 'Main Menu',
    items: [
      {
        id: 1,
        name: 'Dashboard',
        icon: IconHome2,
        submenus: [
          { title: 'Personal Style 01', url: '/dashboards/personal-1' },
          { title: 'Personal Style 02', url: '/dashboards/personal-2' },
          { title: 'Personal Style 03', url: '/dashboards/personal-3' }
        ]
      },
      {
        id: 2,
        name: 'Finance',
        icon: IconCoins,
        submenus: [
          { title: 'analytics Dashboard', url: '/dashboards/analytics' },
          { title: 'Stock Dashboard', url: '/dashboards/stock' },
          { title: 'Sales Dashboard', url: '/dashboards/sales' }
        ]
      },
      {
        id: 3,
        name: 'Banking',
        icon: IconBuildingBank,
        submenus: [
          { title: 'Banking Style 01', url: '/dashboards/banking-1' },
          { title: 'Banking Style 02', url: '/dashboards/banking-2' },
          { title: 'Banking Style 03', url: '/dashboards/banking-3' }
        ]
      },
      {
        id: 4,
        name: 'Business',
        icon: IconBriefcase,
        submenus: [
          { title: 'Flights Booking', url: '/dashboards/flights' },
          { title: 'Company Board', url: '/dashboards/company' },
          { title: 'HR Board', url: '/dashboards/hr' },
          { title: 'Course Dashboard', url: '/dashboards/course' },
          { title: 'Jobs Dashboard', url: '/dashboards/jobs' }
        ]
      },
      {
        id: 5,
        name: 'Lifestyle',
        icon: IconApiApp,
        submenus: [
          { title: 'Influencer', url: '/dashboards/influencer' },
          { title: 'Hobbies', url: '/dashboards/hobbies' },
          { title: 'Health ', url: '/dashboards/health' },
          { title: 'Writer', url: '/dashboards/writer' },
          { title: 'Video', url: '/dashboards/video' },
          { title: 'Soccer', url: '/dashboards/soccer' }
        ]
      },
      {
        id: 9,
        name: 'Ecommerce',
        icon: IconShoppingBag,
        submenus: [{ title: 'Ecommerce', url: '/dashboards/ecommerce' }]
      },
      {
        id: 6,
        name: 'Apps',
        icon: IconDeviceMobilePlus,
        submenus: [
          { title: 'Food Delivery', url: '/dashboards/food-delivery' },
          { title: 'Maps Style 01', url: '/dashboards/maps-style-01' },
          { title: 'Maps Style 02', url: '/dashboards/maps-style-02' },
          { title: 'inbox', url: '/dashboards/inbox' },
          { title: 'messaging', url: '/dashboards/messaging' }
        ]
      },
      {
        id: 7,
        name: 'Charts',
        icon: IconChartPie,
        submenus: [{ title: 'Apex Charts', url: '/apex-charts' }]
      },
      {
        id: 8,
        name: 'Widgets',
        icon: IconApps,
        submenus: [
          { title: 'UI Widgets', url: '/ui-widgets' },
          { title: 'Creative Widgets', url: '/creative-widgets' },
          { title: 'List Widgets', url: '/list-widgets' }
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'Layouts',
    items: [
      {
        id: 101,
        name: 'Lists',
        icon: IconList,
        submenus: [
          { title: 'List View Style 01', url: '/list-01' },
          { title: 'List View Style 02', url: '/list-02' },
          { title: 'List View Style 03', url: '/list-03' },
          { title: 'List View Style 04', url: '/list-04' }
        ]
      },
      {
        id: 102,
        name: 'Flex Lists',
        icon: IconLayoutList,
        submenus: [
          { title: 'Flex Lists Style 01', url: '/flex-01' },
          { title: 'Flex Lists Style 02', url: '/flex-02' },
          { title: 'Flex Lists Style 03', url: '/flex-03' }
        ]
      },
      {
        id: 103,
        name: 'Table Lists',
        icon: IconBorderAll,
        submenus: [
          { title: 'Table Lists Style 01', url: '/table-01' },
          { title: 'Table Lists Style 02', url: '/table-02' },
          { title: 'Table Lists Style 03', url: '/table-03' }
        ]
      },
      {
        id: 104,
        name: 'Form Layouts',
        icon: IconNotes,
        submenus: [
          { title: 'Company', url: '/company-layout' },
          { title: 'Doctor', url: '/doctor-layout' },
          { title: 'Checkout', url: '/checkout-layout' },
          { title: 'Event', url: '/event-layout' },
          { title: 'Password gen', url: '/password-gen' },
          { title: 'Meeting', url: '/meeting-layout' }
        ]
      },
      {
        id: 105,
        name: 'Placeloads',
        icon: IconHourglassEmpty,
        submenus: [
          { title: 'Placeloads Style 01', url: '/placeload-01' },
          { title: 'Placeloads Style 02', url: '/placeload-02' },
          { title: 'Placeloads Style 03', url: '/placeload-03' },
          { title: 'Placeloads Style 04', url: '/placeload-04' }
        ]
      },
      {
        id: 106,
        name: 'Card Grids',
        icon: IconLayoutGrid,
        submenus: [
          { title: 'Card Grid Style 01', url: '/card-grid-01' },
          { title: 'Card Grid Style 02', url: '/card-grid-02' },
          { title: 'Card Grid Style 03', url: '/card-grid-03' },
          { title: 'Card Grid Style 04', url: '/card-grid-04' }
        ]
      },
      {
        id: 107,
        name: 'Tile Grids',
        icon: IconGridGoldenratio,
        submenus: [
          { title: 'Tile Grid Style 01', url: '/tile-01' },
          { title: 'Tile Grid Style 02', url: '/tile-02' },
          { title: 'Tile Grid Style 03', url: '/tile-03' }
        ]
      },
      {
        id: 108,
        name: 'User Grids',
        icon: IconGrid4x4,
        submenus: [
          { title: 'User Grid Style 01', url: '/user-grid-01' },
          { title: 'User Grid Style 02', url: '/user-grid-02' },
          { title: 'User Grid Style 03', url: '/user-grid-03' },
          { title: 'User Grid Style 04', url: '/user-grid-04' }
        ]
      },
      {
        id: 109,
        name: 'Projects',
        icon: IconReportAnalytics,
        submenus: [
          { title: 'Project Style 01', url: '/project-01' },
          { title: 'Project Style 02', url: '/project-02' },
          { title: 'Project Style 03', url: '/project-03' },
          { title: 'Project Details', url: '/project-details' },
          { title: 'Kanban Board', url: '/kanban-board' }
        ]
      },
      {
        id: 110,
        name: 'Authenticaion',
        icon: IconUserShield,
        submenus: [
          { title: 'Login Style 01', url: '/login-1' },
          { title: 'Login Style 02', url: '/login-2' },
          { title: 'Login Style 03', url: '/login-3' },
          { title: 'Login Style 04', url: '/login-4' },
          { title: 'Signup Style 01', url: '/signup-1' },
          { title: 'Signup Style 02', url: '/signup-2' },
          { title: 'Signup Style 03', url: '/signup-3' },
          { title: 'Forgot Password', url: '/forgot-password' },
          { title: 'Code Verification', url: '/code-verification' },
          { title: 'Reset Password', url: '/reset-password' },
          { title: 'Check Mail', url: '/check-mail' }
        ]
      },
      {
        id: 111,
        name: 'Subpages',
        icon: IconFileImport,
        submenus: [
          { title: 'Profile', url: '/profile' },
          { title: 'Edit Profile', url: '/edit-profile' },
          { title: 'Notifications', url: '/notifications' },
          { title: 'Settings', url: '/settings' },
          { title: 'Search Results', url: '/search-results' },
          { title: 'Empty Search', url: '/empty-search' },
          { title: 'Sass Billing', url: '/sass-billing' },
          { title: 'Action Page Style 01', url: '/action-page-1' },
          { title: 'Action Page Style 02', url: '/action-page-2' }
        ]
      },
      {
        id: 112,
        name: 'Utility',
        icon: IconSettingsBolt,
        submenus: [
          { title: 'Confirm Account', url: '/confirm-account' },
          { title: 'Promotion', url: '/promotion' },
          { title: 'Invoice', url: '/invoice' },
          { title: 'Service Status', url: '/service-status' },
          { title: 'System Error', url: '/system-error' }
        ]
      },
      {
        id: 113,
        name: 'Onboarding',
        icon: IconHeartHandshake,
        submenus: [
          { title: '2 Factor', url: '/two-factor' },
          { title: 'Plan boarding', url: '/plan-boarding' },
          { title: 'Role selection', url: '/role-selection' }
        ]
      }
    ]
  }
]
