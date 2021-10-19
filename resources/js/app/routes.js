import ExampleComponent from '../ExampleComponent.vue'
import Login from '../Login.vue'
export const routes = [
  {
    path: '/example',
    name: 'exa',
    component: ExampleComponent,
    meta: { title: 'Example' },
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { title: 'Login' },
  }
]

export default { routes }