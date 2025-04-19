// vite.config.js
// !! Removed direct import of routes to avoid build error !!
import { fileURLToPath, URL } from 'node:url'
import fs from 'node:fs' // 导入 Node.js 文件系统模块
import path from 'node:path' // 导入 Node.js 路径模块

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import sitemap from 'vite-plugin-sitemap'

// --- 获取路由文件内容 --- // (修改)
const routerPath = path.resolve(__dirname, 'src/router/index.js')
let routerContent = ''
try {
  routerContent = fs.readFileSync(routerPath, 'utf-8')
} catch (error) {
  console.error('[Sitemap] Error reading router file:', error)
}

// --- 使用正则表达式提取静态路由路径 --- // (修改)
const staticPathRegex = /path:\s*'((?:\/[^\s:']*)?)'/g // 匹配 path: '/path/...'
let staticRoutes = []
let match
while ((match = staticPathRegex.exec(routerContent)) !== null) {
  // 确保捕获到的是有效的、非空的路径
  if (typeof match[1] === 'string' && !match[1].includes(':')) {
    staticRoutes.push(match[1])
  }
}
// 去重 (移除显式添加根路径的逻辑，依赖正则捕获和 Set)
staticRoutes = [...new Set(staticRoutes)]
console.log(`[Sitemap] Found static routes via regex: ${staticRoutes.join(', ')}`)

// --- 辅助函数：读取 JSON 文件并生成动态路由 --- // (保持不变)
const getDynamicRoutesFromJson = (filePath, routePrefix, idOrSlugKey) => {
  const fullPath = path.resolve(__dirname, filePath)
  let dynamicRoutes = []
  try {
    if (fs.existsSync(fullPath)) {
      const jsonData = JSON.parse(fs.readFileSync(fullPath, 'utf-8'))
      if (Array.isArray(jsonData)) {
        dynamicRoutes = jsonData.map((item) => `${routePrefix}${item[idOrSlugKey]}`)
        console.log(`[Sitemap] Found ${dynamicRoutes.length} routes from ${filePath}`)
      } else {
        console.warn(`[Sitemap] Data in ${filePath} is not an array.`)
      }
    } else {
      console.warn(`[Sitemap] Data file not found at: ${fullPath}`)
    }
  } catch (error) {
    console.error(`[Sitemap] Error processing ${fullPath}:`, error)
  }
  return dynamicRoutes
}

// --- 生成动态路由 --- // (保持不变)
// !! 请根据你的实际文件名和 JSON 结构调整这里的参数 !!
const blogRoutes = getDynamicRoutesFromJson('Datas/blogPosts.json', '/blog/', 'slug')
const questionRoutes = getDynamicRoutesFromJson('Datas/questions.json', '/questions/', 'id')
const newsRoutes = getDynamicRoutesFromJson('Datas/news.json', '/news/', 'id')

// --- 合并所有路由 --- // (保持不变)
const allRoutes = [...new Set([...staticRoutes, ...blogRoutes, ...questionRoutes, ...newsRoutes])]
console.log(`[Sitemap] Total unique routes for sitemap: ${allRoutes.length}`)

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    sitemap({
      hostname: 'https://levitrask.vercel.app/',
      dynamicRoutes: allRoutes, // 使用最终合并的路由列表
      // exclude: ['/admin/**'],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
