import Vue from "vue";
import VueRouter from "vue-router";

import BaseRoot from '../views/root/Base'; 
import RootHome from '../views/root/Home'; 

import BaseStudents from '../views/students/Base';
import StudentHome from '../views/students/Home';  

import BaseOfficers from '../views/officers/Base'; 
import OfficeHome from '../views/officers/Home'; 
Vue.use(VueRouter);
const routes = [  
  {
    path: "/",
    component: BaseRoot,
    children: [
      {
        path: "",
        name: "RootHome",
        component: RootHome
      }
    ]
  },
  {
    path: "/student/",
    component: BaseStudents,
    children: [ 
      {
        path: "",
        name: "StudentHome",
        component: StudentHome
      } 
    ]
  },
  {
    path: "/officer/",
    component: BaseOfficers,
    children: [
      {
        path: "",
        name: "OfficeHome",
        component: OfficeHome
      }
    ],
    
  }
];

const router = new VueRouter({
  routes
});

export default router;
