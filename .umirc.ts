import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'react-ship',
  description: 'react-ship ',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  navs: {
    'en-US': [
      null,
      { title: 'GitHub', path: 'https://github.com/umijs/dumi' },
      { title: 'Changelog', path: 'https://github.com/umijs/dumi/releases' },
    ],
    'zh-CN': [
      null,
      { title: 'GitHub', path: 'https://github.com/umijs/dumi' },
      { title: '更新日志', path: 'https://github.com/umijs/dumi/releases' },
    ],
  },
  themeConfig: {
    carrier: 'react-ship', // 设备状态栏左侧的文本内容
    hd: {
      // umi-hd 的 750 高清方案（默认值）
      // 根据不同的设备屏幕宽度断点切换高清方案
      rules: [],
    }
  },
  theme: {
    '@sp-prefix': 'sp'
  },
  cssLoader: {
    localsConvention: 'camelCase',
  }
  // more config: https://d.umijs.org/config
});
