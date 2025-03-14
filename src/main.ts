// import 'devextreme/dist/css/dx.material.blue.light.compact.css'
import '@lottiefiles/lottie-player'
import '@/assets/css/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import moment from 'moment'
import { ApolloClient,createHttpLink, InMemoryCache } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { provide, h } from 'vue'
import './assets/css/tailwind.css'

const graphqlLink = import.meta.env.VITE_GRAPHQL_URL

const httpLink = createHttpLink({
  uri: graphqlLink,
})

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

const app = createApp({
  setup() {
      provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App),
})

app.config.globalProperties.$moment=moment;


app.use(createPinia())
app.use(router)
app.mount('#app')
