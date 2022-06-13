import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'react-mobile-ship',
  description: 'react-mobile-ship',
  favicon: '/images/logo.png',
  logo: '/images/logo.png',
  outputPath: 'dist',
  mode: 'site',
  locales: [['zh-CN', '中文'], ['en-US', 'English']],
  navs: {
    'en-US': [
      null,
      { title: 'GitHub', path: 'https://github.com/Wangbaoqi/react-ship' },
      { title: 'Changelog', path: 'https://github.com/Wangbaoqi/react-ship/releases' },
      { title: 'blog', path: 'https://www.wangbaoqi.tech/' },
    ],
    'zh-CN': [
      null,
      { title: 'GitHub', path: 'https://github.com/Wangbaoqi/react-ship' },
      { title: '更新日志', path: 'https://github.com/Wangbaoqi/react-ship/releases' },
      { title: 'blog', path: 'https://www.wangbaoqi.tech/' },
    ],
  },
  themeConfig: {
    carrier: 'react-mobile-ship', // 设备状态栏左侧的文本内容
    hd: {
      // umi-hd 的 750 高清方案（默认值）
      // 根据不同的设备屏幕宽度断点切换高清方案
      rules: [],
    }
  },
  apiParser: {
    // 自定义属性过滤配置，也可以是一个函数，用法参考：https://github.com/styleguidist/react-docgen-typescript/#propfilter
    propFilter: {
      // 是否忽略从 node_modules 继承的属性，默认值为 false
      skipNodeModules: true,
      // 需要忽略的属性名列表，默认为空数组
      skipPropsWithName: ['title'],
      // 是否忽略没有文档说明的属性，默认值为 false
      skipPropsWithoutDoc: false,
    },
  },
  theme: {
    '@sp-prefix': 'sp'
  },
  cssLoader: {
    localsConvention: 'camelCase',
  }
  // more config: https://d.umijs.org/config
});
