
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  // devtool: '#cheap-module-eval-source-map',
  routes: [
    { 
      path: '/', 
      component: '../pages/index',
      routes: [
        { path: '/login', component: '../pages/login' },
        {
          path: '/',
          component: '../layouts/index',
          routes: [
            { path: '/', component: '../pages/home' },
            { path: '/user', component: '../pages/user' },
            { path: '/account', component: '../pages/account' },
          ]
        }
      ]
  },

  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: 'umi项目umi-app',
      dll: false,
      locale: {
        enable: true,
        default: 'en-US',
      },
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  proxy: {
    "/api": {
      "target": "http://localhost:3000",
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "" }
    }
  }
}
