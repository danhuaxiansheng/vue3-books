import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/components/layout.vue"),
    redirect: "/videoIndex",
    children: [
      {
        path: "/videoIndex",
        name: "videoIndex",
        component: () => import("@/views/video/index.vue"),
      },
      {
        path: "/videoResult",
        name: "videoResult",
        component: () => import("@/views/video/modules/videoResult.vue"),
      },
      {
        path: "/bookIndex",
        name: "bookIndex",
        component: () => import("@/views/book/index.vue"),
      },
      {
        path: "/bookResult",
        name: "bookResult",
        component: () => import("@/views/book/modules/bookResult.vue"),
      },
      {
        path: "/bookInfo",
        name: "bookInfo",
        component: () => import("@/views/book/modules/bookInfo.vue"),
      },
      {
        path: "/readBooks",
        name: "readBooks",
        meta: {
          keepAlive: false,
        },
        component: () => import("@/views/book/modules/readBooks.vue"),
      },
      {
        path: "/videoPlaying",
        name: "videoPlaying",
        meta: {
          keepAlive: false,
        },
        component: () => import("@/views/video/modules/playing.vue"),
      },
      {
        path: "/videoiframe",
        name: "videoiframe",
        meta: {
          keepAlive: false,
        },
        component: () => import("@/views/video/modules/videoiframe.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
