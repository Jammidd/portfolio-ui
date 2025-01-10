import { createRouter, createWebHistory } from 'vue-router'

import ContactView from '@/views/ContactView.vue'
import HomeView from '@/views/HomeView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ResumeView from '@/views/ResumeView.vue'
import TravelView from '@/views/TravelView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
	meta: {
		pageTitle: "titles.home"
	}
  }, {
	path: '/resume',
	name: 'resume',
	component: ResumeView,
	meta: {
		pageTitle: "titles.resume"
	}
  }, {
	path: '/projects',
	name: 'projects',
	component: ProjectsView,
	meta: {
		pageTitle: "titles.projects"
	}
  }, {
	path: '/travels',
	name: 'travels',
	component: TravelView,
	meta: {
		pageTitle: "titles.travels"
	}
  }, {
	path: '/contact',
	name: 'contact',
	component: ContactView,
	meta: {
		pageTitle: "titles.contact"
	}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
