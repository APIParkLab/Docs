// 广告弹窗配置文件
export interface AdConfig {
  title: string;
  content: string;
  imageUrl?: string;
  buttonText: string;
  buttonUrl: string;
  showDelay: number; // 延迟显示时间（毫秒）
  autoClose: number; // 自动关闭时间（毫秒），0表示不自动关闭
  storageKey: string; // localStorage键名
  showOnce: boolean; // 是否只显示一次
  enabled: boolean; // 是否启用广告
}

// XRoute.AI 广告配置
export const xrouteAdConfig: AdConfig = {
  title: "🚀 GPT-5 接口重磅上线！",
  content: "XRoute.AI 统一大语言模型接口 - 更好的价格，更好的吞吐量，无需订阅！🎁 注册即送 ¥3 双渠道充值，支持支付宝、微信支付。",
  imageUrl: "/img/xroute-gpt5.svg", // XRoute.AI的高清广告横幅
  buttonText: "立即注册领取",
  buttonUrl: "https://xroute.ai/",
  showDelay: 3000, // 3秒后显示
  autoClose: 0, // 不自动关闭
  storageKey: "xroute_ai_modal_v2", // 更新版本号，重新显示
  showOnce: false, // 允许多次显示，便于测试
  enabled: true // 启用广告
};

// 默认广告配置
export const defaultAdConfig: AdConfig = {
  title: "🚀 APIPark - 开源API管理平台",
  content: "一站式API管理解决方案，支持AI模型接入、API网关、开发者门户等功能。立即体验，开启您的API管理之旅！",
  imageUrl: "", // 可以添加广告图片URL
  buttonText: "免费体验",
  buttonUrl: "https://apipark.com/install",
  showDelay: 5000, // 5秒后显示
  autoClose: 0, // 不自动关闭
  storageKey: "apipark_promo_modal_v1",
  showOnce: true, // 只显示一次
  enabled: false // 暂时关闭，优先显示XRoute.AI
};

// 特殊活动配置示例
export const promotionAdConfig: AdConfig = {
  title: "🎉 限时优惠活动",
  content: "APIPark企业版限时免费试用！立即注册享受30天免费试用，体验完整的企业级API管理功能。",
  imageUrl: "/img/promotion-banner.png", // 活动横幅图片
  buttonText: "立即注册",
  buttonUrl: "https://apipark.com/enterprise-trial",
  showDelay: 3000, // 3秒后显示
  autoClose: 15000, // 15秒后自动关闭
  storageKey: "apipark_promotion_modal_2024",
  showOnce: true,
  enabled: false // 默认关闭，需要时启用
};

// 新功能发布配置示例
export const featureAdConfig: AdConfig = {
  title: "✨ 新功能发布",
  content: "APIPark v1.9 正式发布！新增AI模型管理、MCP协议支持等强大功能。",
  buttonText: "查看更新",
  buttonUrl: "/docs/release",
  showDelay: 4000,
  autoClose: 0,
  storageKey: "apipark_feature_modal_v19",
  showOnce: true,
  enabled: false
};

// 获取当前激活的广告配置
export function getActiveAdConfig(): AdConfig | null {
  // 按优先级返回启用的广告配置
  if (xrouteAdConfig.enabled) return xrouteAdConfig;
  if (promotionAdConfig.enabled) return promotionAdConfig;
  if (featureAdConfig.enabled) return featureAdConfig;
  if (defaultAdConfig.enabled) return defaultAdConfig;
  return null;
}