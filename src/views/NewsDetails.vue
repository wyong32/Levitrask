<template>
  <div class="news-post-page single-column-page">
    <PageHeader />
    <main class="content-area-single-column">
      <!-- 主内容区域 -->
      <article v-if="article" class="main-content-middle">
        <div class="post-body">
          <!-- 渲染完整的 HTML 内容字符串 -->
          <div v-html="article.content"></div>
        </div>
      </article>
      <!-- 可选：如果找不到文章，显示消息 -->
      <div v-else class="main-content-middle">
        <p>找不到文章。</p>
      </div>
    </main>
    <PageFooter />
  </div>
</template>

<script setup>
import { computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import PageHeader from '../components/PageHeader.vue' // 调整了路径
import PageFooter from '../components/PageFooter.vue' // 调整了路径

// 从单独的文件导入新闻数据
import allNewsData from '../Datas/newsData.js'

const route = useRoute()

// 计算属性，根据路由 id 获取当前文章
const article = computed(() => {
  const articleId = route.params.id
  return allNewsData[articleId] || null // 如果找不到文章则返回 null
})

// 更新 meta 标签的函数
const updateMetaTags = (articleData) => {
  if (articleData) {
    // 更新标题 - 使用 metaTitle，回退到 listTitle 或通用标题
    document.title = articleData.metaTitle || articleData.listTitle || '新闻文章 | Levitrask'

    // 更新 Meta Description
    let descriptionTag = document.querySelector('meta[name="description"]')
    if (!descriptionTag) {
      descriptionTag = document.createElement('meta')
      descriptionTag.setAttribute('name', 'description')
      document.head.appendChild(descriptionTag)
    }
    descriptionTag.setAttribute('content', articleData.metaDescription || '')

    // 更新 Meta Keywords
    let keywordsTag = document.querySelector('meta[name="keywords"]')
    if (!keywordsTag) {
      keywordsTag = document.createElement('meta')
      keywordsTag.setAttribute('name', 'keywords')
      document.head.appendChild(keywordsTag)
    }
    keywordsTag.setAttribute('content', articleData.metaKeywords || '')
  } else {
    // 处理找不到文章的情况（可选：设置默认标签）
    document.title = '找不到文章 | Levitrask'
    // 可选地移除或设置默认的 description/keywords
    const descriptionTag = document.querySelector('meta[name="description"]')
    if (descriptionTag) descriptionTag.setAttribute('content', '')
    const keywordsTag = document.querySelector('meta[name="keywords"]')
    if (keywordsTag) keywordsTag.setAttribute('content', '')
  }
}

// 组件挂载时更新 meta 标签
onMounted(() => {
  updateMetaTags(article.value)
})

// 监听文章数据的变化（例如，在不完全重新加载的情况下在新闻页面之间导航）
watch(article, (newArticle) => {
  updateMetaTags(newArticle)
})
</script>

<style scoped>
/* 调整了单列布局的样式 */
.single-column-page {
  /* 为了清晰起见，从 .blog-post-page 重命名 */
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content-area-single-column {
  /* 从 .content-area-3-column 重命名 */
  /* 移除了列的 flex 属性 */
  flex-grow: 1;
  max-width: 900px; /* 调整了单列的可读性最大宽度 */
  margin: 2rem auto;
  padding: 0 1rem;
  /* 移除了 gap */
}

/* 移除了 .sidebar-left 样式 */

.main-content-middle {
  /* 移除了 flex 属性 */
  min-width: 0;
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin: 0 auto; /* 居中内容 */
}

/* 移除了 .sidebar-right 样式 */

/* 针对 v-html 内部元素的样式需要使用 :deep() */
.post-body :deep(h1) {
  /* content 内部 H1 的样式 */
  font-size: 2rem;
  color: #343a40;
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.post-body :deep(hr) {
  /* content 内部 HR 的样式 */
  border: none;
  border-top: 1px solid #eee;
  margin: 1.5rem 0;
}

/* 保留其他 :deep() 样式，用于 h2, h3, p, ul, ol, li 等 */
.post-body :deep(h2) {
  font-size: 1.5rem;
  color: #343a40;
  margin-top: 2rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.5rem;
}

.post-body :deep(h3) {
  font-size: 1.3rem;
  color: #343a40;
  margin-top: 1.8rem; /* 比 h2 略小的外边距 */
  margin-bottom: 0.8rem;
}

.post-body :deep(p) {
  line-height: 1.7;
  margin-bottom: 1rem;
  color: #495057;
}

.post-body :deep(ul),
.post-body :deep(ol) {
  line-height: 1.7;
  margin-top: 1rem; /* 确保列表前有空间 */
  margin-bottom: 1rem;
  color: #495057;
  padding-left: 25px; /* 保留内边距 */
}

.post-body :deep(ul) {
  list-style: disc;
}
.post-body :deep(ol) {
  list-style: decimal;
}

.post-body :deep(li) {
  margin-bottom: 0.75rem;
}

/* 图片块样式 */
.post-body :deep(.content-image) {
  margin: 2rem 0;
  text-align: center; /* 居中图片和标题 */
}

.post-body :deep(.content-image img) {
  max-width: 100%;
  height: auto;
  border-radius: 4px; /* 可选 */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* 可选 */
}

.post-body :deep(.content-image figcaption) {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #6c757d;
  font-style: italic;
}

/* 表格块样式 */
.post-body :deep(.content-table-container) {
  margin: 2rem 0;
  overflow-x: auto; /* 在小屏幕上允许水平滚动 */
  border: 1px solid #dee2e6;
  border-radius: 4px;
}

.post-body :deep(.content-table-container table) {
  width: 100%;
  border-collapse: collapse;
  min-width: 400px; /* 确保最小宽度 */
}

.post-body :deep(.content-table-container caption) {
  padding: 0.75rem;
  font-weight: 600;
  text-align: left;
  background-color: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
}

.post-body :deep(.content-table-container th),
.post-body :deep(.content-table-container td) {
  border: 1px solid #dee2e6;
  padding: 0.75rem;
  text-align: left;
  vertical-align: top;
}

.post-body :deep(.content-table-container th) {
  background-color: #f8f9fa;
  font-weight: 600;
}

.post-body :deep(.content-table-container tbody tr:nth-child(odd)) {
  background-color: #f8f9fa;
}

.post-body :deep(.content-table-container tbody tr:hover) {
  background-color: #e9ecef;
}

/* 移除了与侧边栏相关的 @media (max-width: 992px) 规则 */

@media (max-width: 768px) {
  .content-area-single-column {
    margin: 1rem auto; /* 调整小屏幕的外边距 */
  }
  .main-content-middle {
    padding: 1.5rem;
  }
  /* 调整 :deep 选择器的尺寸 */
  .post-body :deep(h1) {
    font-size: 1.6rem;
  }
  .post-body :deep(h2) {
    font-size: 1.3rem;
  }
  .post-body :deep(h3) {
    font-size: 1.2rem;
  }

  /* 调整 v-html 标题尺寸 */
  .post-body div[v-html] h2 {
    /* 这个可能可以移除，因为上面的 :deep(h2) 应该能覆盖 */
    font-size: 1.3rem;
  }
}

/* 移除了特定的 .news-post-page h2 颜色规则或根据需要调整 */
</style> 