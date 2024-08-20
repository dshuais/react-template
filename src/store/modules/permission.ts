import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import { createJSONStorage } from 'zustand/middleware';

import router from '@/router';
import { deepClone } from '@/utils';
import { getPath, modules } from '@/router/routes';
import { ProtectedLoader } from '@/permission';
import { dynamicRoutes, StoreKey } from '@/common';
import { MakeState, createCustomStore } from '../store';

type Store = {
  routes: Array<Route>
}

type Actions = {
  SET_ROUTER: (routes: Array<Route>) => void
  REMOVE_ROUTER: () => void
  GenerateRoutes: () => Promise<string>
}

export type Route = App.Route

/**
 * 路由表内的路由
 */
const routes = router.routes;

/**
 * 当前store版本
 * 更改后需要手动修改并添加migrate逻辑
 */
const APP_STORE_VERSION: number = 0.1;

const initialState = (): Store => ({
  routes: []
});

export const usePermission = createCustomStore<Store, Actions>(
  StoreKey.PERMISSION,

  initialState(),

  (set, get) => ({

    /**
     * 设置路由
     * @param routes
     */
    SET_ROUTER(routes: Array<Route>) {
      set({ routes });
    },

    REMOVE_ROUTER() {
      set({ routes: [] });
    },

    /**
     * 生成路由表
     */
    GenerateRoutes: () => {
      return new Promise((resolve) => {
        // dynamicRoutes 可 替换为接口获取
        get().SET_ROUTER(dynamicRoutes);
        const r = filterToRouter(dynamicRoutes);

        if(r.size === 0) return resolve('动态路由数据为空:>> ');

        Array.from(r.keys()).map(k => {
          const index = routes.findIndex(item => item.path === k);
          /**
           * routes[index].children 所需要的 AgnosticDataRouteObject[] 类型在@remix-run包内
           * @remix-run包是router的依赖包 所以导入版本更新后会有问题
           * 这里直接使用any[]
           */
          const pre = routes[index].children || [],
            children = r.get(k)?.filter(item => pre.findIndex(i => i.path === item.path) === -1) || [];

          routes[index].children = [...pre, ...children as any[]];
        });

        resolve('动态路由创建成功:>> ');
      });
    }

  }),

  {
    name: StoreKey.PERMISSION, // unique name
    storage: createJSONStorage(() => sessionStorage),
    version: APP_STORE_VERSION, // a migration will be triggered if the version in the storage mismatches this one

    // migration logic
    migrate: (persistedState, version) => {
      type State = Store & MakeState

      const state = initialState();

      if(version !== APP_STORE_VERSION) {
        Object.assign(state, persistedState);
      }

      return state as State;
    }
  }
);

/**
 * new 动态加载路由
 * @param {Route[]} routes
 * @returns Map<string, RouteObject[]>()
 */
function filterToRouter(routes: Route[]) {
  const newRoutes = filterAsyncRouter(routes);

  const rs = new Map<string, RouteObject[]>();

  newRoutes.map(route => {
    const { parent, ...r } = route;
    const k = parent || '/';
    const v = rs.get(k);
    if(v) rs.set(k, [...v, r]);
    else rs.set(k, [r]);
  });

  return rs;
}

/**
 * 处理动态路由
 * @param routes
 * @returns
 */
function filterAsyncRouter(routes: Route[]) {
  const newRoutes = deepClone<Route[]>(routes);

  return newRoutes.map(route => {

    const r: RouteObject & { parent: string } = {
      index: route.index,
      id: route.id,
      path: joinPath(route.path, route.parent),
      Component: createComponent(route.component),
      // children: route.children && route.children.length ? filterAsyncRouter(route.children) : void 0,
      handle: route.handle,
      parent: route.parent || '/'
    };

    if(route.protected !== false) {
      r.loader = ProtectedLoader;
    }

    if(route.children && route.children.length) {
      r.children = filterAsyncRouter(route.children);
    }

    return r;

  });
}

/**
 * 所有pages下页面文件
 */
// const modules = import.meta.glob('@/pages/*/index.tsx') as unknown as Module

/**
 * 所有pages下页面文件 去除了目录前缀
 */
// const components = Object.keys(modules).reduce<Record<string, any>>((prev, cur) => {
//   prev[cur.replace('/src/pages/', '')] = modules[cur]
//   return prev
// }, {})

/**
 * 获取动态页面
 * @param name
 * @returns
 */
function createComponent(name: string) {
  // return lazy(components[`${name}/index.tsx`])
  return lazy(modules[getPath(name)]);
}

/**
 * 拼接path
 * @param path
 * @param parent
 * @returns
 */
function joinPath(path?: string, parent?: string) {
  if(!path) return void 0;
  return `${parent || '/'}/${path.replace(/^\/+/, '')}`;
}
