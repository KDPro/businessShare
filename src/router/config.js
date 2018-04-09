/**
 * Created by kdkjPC on 2018/3/27.
 */
import login from '@/page/loginS/loginS'
import header from '@/page/header/header'
import person from '@/page/person/person'
import personDetail from '@/page/personDetail/personDetail'
import bSM from '@/page/bSM/bSM'
import bSMDetail from '@/page/bSMDetail/bSMDetail'
import scroll from '@/page/scroll/scroll'
import scrollDetail from '@/page/scrollDetail/scrollDetail'
import myInfomation from '@/page/myInfomation/myInfomation'

export default [
  {
    path: '/',
    name: 'login',
    component: login
  },{
    path:'/header',
    name:'header',
    component:header,
    redirect:"/person",
    children:[{
        path:'/person',
        name:'person',
        component:person,
      },{
      path:'/personDetail',
      name:'personDetail',
      component:personDetail,
    },{
      path:'/bSM',
      name:'bSM',
      component:bSM,
    },{
      path:'/bSMDetail',
      name:'bSMDetail',
      component:bSMDetail,
    },{
      path:'/scroll',
      name:'scroll',
      component:scroll,
    },{
      path:'/scrollDetail',
      name:'scrollDetail',
      component:scrollDetail,
    },{
      path:'/myInfomation',
      name:'myInfomation',
      component:myInfomation,
    }
    ]
  }
]
