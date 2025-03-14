
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import HomeView from '@/views/HomeView.vue'
import TestView from '@/views/TestView.vue'
import LoginView from '@/views/LoginView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import WelcomePage from '@/components/Pages/Welcome.vue'
import { DashboardEISManagement } from '@/components/Pages/Dashboard-EIS-Management'
import { DashboardMonitoringWO } from '@/components/Pages/Dashboard-Monitoring-WO'
import { ReguTracking } from '@/components/Pages/Regu-Tracking'
import { ReguHistoryTrack } from '@/components/Pages/Regu-History-Track'
import { InfoPelangganPadam } from '@/components/Pages/Info-Pelanggan-Padam'
import { DrawAreaLayananYantek } from '@/components/Pages/Draw-Area-Layanan-Yantek'
import EmptyPage from '@/components/Pages/EmptyPage.vue'
import qs from 'qs'

export const routes: RouteRecordRaw[] = [
  {
    path: '/home',
    name: 'Home',
    component: HomeView,
    children: [
      {
        path: '',
        name: 'Home Page',
        component: WelcomePage,
      },
      {
        path: 'regu-tracking',
        name: 'Regu Tracking',
        component: ReguTracking,
      },
      {
        path: 'regu-history-track',
        name: 'Regu History Track',
        component: ReguHistoryTrack,
      },
      {
        path: 'draw-area-layanan-yantek',
        name: 'Draw Area Layanan Yantek',
        component: DrawAreaLayananYantek,
      },
      {
        path: 'info-pelanggan-padam',
        name: 'Info Pelanggan Padam',
        component: InfoPelangganPadam,
      },
      {
        path: 'dashboard-eis-management',
        name: 'Dashboard EIS Management',
        component: DashboardEISManagement,
      },
      {
        path: 'dashboard-monitoring-wo',
        name: 'Dashboard Monitoring WO',
        component: DashboardMonitoringWO,
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/playground',
    name: 'Playground',
    component: TestView
  },
  {
    path: '/404',
    name: 'Not Found',
    component: NotFoundView
  },
  {
    path: '/',
    redirect: {
      name: 'Home'
    }
  }
]

export const mergeChildrenRoutes = (routes: RouteRecordRaw[]): RouteRecordRaw[] => {
  const mergedRoutes: RouteRecordRaw[] = [];

  for (const route of routes) {
    if (route.children && route.children.length > 0) {
      // Buat salinan route tanpa children
      const topLevelRoute: RouteRecordRaw = { ...route, children: [] };

      // Salin setiap route children ke children route paling atas
      for (const childRoute of route.children) {
        const fullPath = `${route.path}/${childRoute.path}`.replace(/\/+/g, '/');
        const mergedChildRoute: RouteRecordRaw = { ...childRoute, path: fullPath };
        topLevelRoute.children?.push(mergedChildRoute);
      }

      mergedRoutes.push(topLevelRoute);
    } else {
      // Jika route tidak memiliki children, tambahkan as is
      mergedRoutes.push(route);
    }
  }

  return mergedRoutes;
}

export const extractLeafRoutes = (routes: RouteRecordRaw[], parentPath = ''): RouteRecordRaw[] => {
  const leafRoutes: RouteRecordRaw[] = [];

  for (const route of routes) {

    const fullPath = `${parentPath}/${route.path}`.replace(/\/+/g, '/');

    if (route.children && route.children.length > 0) {
      leafRoutes.push(...extractLeafRoutes(route.children, fullPath));
    } else {
      const leafRoute = { ...route, path: fullPath };
      leafRoutes.push(leafRoute);
    }
  }

  return leafRoutes;
}

export const fixRoute = (route: RouteRecordRaw[]): RouteRecordRaw[] => {
  var newRoute: RouteRecordRaw[] = []

  const getRoute = (route: RouteRecordRaw[], parent: string = '') => {
    route.forEach((r) => {
      if (r.children) {
        if (r.component) {
          const fullPath = `${parent.replace('/', '')}/${r.path.replace('/', '')}`
          newRoute.push({
            path: fullPath,
            name: r.name,
            component: r.component
          } as RouteRecordRaw)
        }
        getRoute(r.children, `${parent}/${r.path}`)
      } else {
        const fullPath = `${parent.replace('/', '')}/${r.path.replace('/', '')}`
        if (newRoute.find((nr) => nr.path !== '/' && nr.path === '/home' && fullPath.includes(nr.path))) {
          const index = newRoute.findIndex((nr) => nr.path !== '/' && fullPath.includes(nr.path))
          newRoute[index] = {
            ...newRoute[index], children: [...newRoute[index].children ?? [], {
              path: fullPath === '/home/' ? '' : fullPath.includes('/home/') ? fullPath.replace('/home/', '') : fullPath,
              name: r.name,
              component: r.component
            } as RouteRecordRaw]
          }
        } else {
          newRoute.push({
            path: fullPath,
            name: r.name,
            component: r.component
          } as RouteRecordRaw)
        }
      }
    })
  }
  getRoute(route)

  // remove duplicate route path and sort by path length
  const uniqueRoute = newRoute.filter((nr, index, self) => self.findIndex((n) => n.path === nr.path) === index).sort((a, b) => b.path.length - a.path.length)
  // console.log('route', newRoute);

  // return uniqueRoute
  return newRoute
}


const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  stringifyQuery: qs.stringify,
  routes: fixRoute(routes),
  strict: true,
})

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const auth = useAuthStore();

  // next()

  // if to is not found, redirect to 404
  if (to.matched.length === 0) {
    if (to.path === '/') {
      if (auth.isLoggedIn) {
        next('/home')
      } else {
        next('/login')
      }
    } else {
      next('/404')
    }
  } else {
    // if to is not login and user is not logged in, redirect to login
    if (auth.isLoggedIn) {
      // if to is login and user is logged in, redirect to home
      if (to.path === '/login') {
        next('/home')
      } else {
        next()
      }
    } else {
      // if to is 404, redirect to 404
      if (to.path !== '/404' && to.path !== '/login') {
        next('/login')
      } else {
        next()
      }
    }
  }
})

export default router
