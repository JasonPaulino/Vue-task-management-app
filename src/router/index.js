import { createRouter, createWebHistory } from "vue-router";
import TaskListView from "../views/TaskListView.vue";
import AddTaskView from "../views/AddTaskView.vue";

const routes = [
  {
    path: "/",
    name: "taskListView",
    component: TaskListView,
  },
  {
    path: "/addTask",
    name: "addTaskView",
    component: AddTaskView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
