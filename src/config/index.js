const Hello  = {template: `<div>Hello world !!!</div>`}
const About  = {template: `<div>About !!!</div>`}
export const routes = [
  {
    path: '/hello',
    name: 'hello',
    meta: {
      disable: false
    },
    component: Hello
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      disable: true
    },
    component: About
  },
]

export const userInfo = {
  name: '张三',
  age: 18,
  isAble: true
}


export default {
  routes,
  userInfo
}