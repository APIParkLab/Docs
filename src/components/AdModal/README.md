# 广告弹窗组件使用说明

## 概述

这是一个为Docusaurus网站设计的广告弹窗组件，支持自定义内容、样式和行为。

## 功能特性

- ✅ 响应式设计，支持移动端和桌面端
- ✅ 支持暗色主题自动适配
- ✅ 可配置显示延迟和自动关闭
- ✅ 支持localStorage记忆用户关闭状态
- ✅ 平滑的动画效果
- ✅ 可自定义图片、文本和按钮
- ✅ 支持多种广告配置切换

## 快速开始

广告弹窗已经集成到网站的根组件中，会在页面加载后自动显示。

## 自定义配置

### 1. 修改默认广告内容

编辑 `src/config/adConfig.ts` 文件中的 `defaultAdConfig`：

```typescript
export const defaultAdConfig: AdConfig = {
  title: "你的广告标题",
  content: "你的广告内容描述",
  buttonText: "按钮文字",
  buttonUrl: "https://your-link.com",
  showDelay: 5000, // 5秒后显示
  autoClose: 0, // 不自动关闭
  storageKey: "your_modal_key",
  showOnce: true,
  enabled: true
};
```

### 2. 启用特殊活动广告

在 `adConfig.ts` 中将 `promotionAdConfig.enabled` 设置为 `true`：

```typescript
export const promotionAdConfig: AdConfig = {
  // ... 其他配置
  enabled: true // 启用活动广告
};
```

### 3. 添加广告图片

1. 将图片文件放到 `static/img/` 目录下
2. 在配置中设置 `imageUrl: "/img/your-image.png"`

### 4. 临时禁用广告

在 `adConfig.ts` 中将所有配置的 `enabled` 设置为 `false`。

## 配置参数说明

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `title` | string | - | 弹窗标题 |
| `content` | string | - | 弹窗内容描述 |
| `imageUrl` | string | "" | 广告图片URL（可选） |
| `buttonText` | string | - | 按钮文字 |
| `buttonUrl` | string | - | 按钮链接 |
| `showDelay` | number | 3000 | 延迟显示时间（毫秒） |
| `autoClose` | number | 0 | 自动关闭时间（毫秒），0表示不自动关闭 |
| `storageKey` | string | - | localStorage键名，用于记住关闭状态 |
| `showOnce` | boolean | true | 是否只显示一次 |
| `enabled` | boolean | true | 是否启用此广告配置 |

## 样式自定义

如需自定义样式，可以编辑 `src/components/AdModal/styles.module.css` 文件。

### 常用样式修改

1. **修改弹窗大小**：
```css
.modal {
  max-width: 600px; /* 修改最大宽度 */
}
```

2. **修改按钮样式**：
```css
.actionButton {
  background: your-color;
  border-radius: your-radius;
}
```

3. **修改动画效果**：
```css
.modal {
  transition: transform 0.5s ease; /* 修改动画时长 */
}
```

## 最佳实践

1. **合理设置显示延迟**：建议3-5秒，给用户足够时间浏览页面内容
2. **避免过于频繁**：使用 `showOnce: true` 避免重复打扰用户
3. **内容简洁明了**：标题和描述要简洁有力，突出核心价值
4. **测试多设备**：确保在不同屏幕尺寸下都有良好体验
5. **A/B测试**：可以通过修改 `storageKey` 来测试不同版本的效果

## 故障排除

### 弹窗不显示
1. 检查 `enabled` 是否为 `true`
2. 检查浏览器localStorage是否已记录关闭状态
3. 清除浏览器缓存和localStorage

### 样式异常
1. 检查CSS模块是否正确导入
2. 确认没有其他CSS规则冲突
3. 检查暗色主题适配

### 按钮链接无效
1. 确认URL格式正确
2. 检查是否需要添加协议（http/https）

## 更新日志

- v1.0.0: 初始版本，支持基础弹窗功能
- v1.1.0: 添加配置文件支持
- v1.2.0: 增加响应式设计和暗色主题支持