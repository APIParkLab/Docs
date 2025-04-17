---
sidebar_position: 2
title: "📜 更新日志"
---

# 更新日志
## 🎉 V1.7 Beta
### ✨ 新增
- **提供系统APIKey功能**
  - 在UI界面上管理和维护系统APIKey。
  - 用户可通过合法有效的 API 密钥，安全访问 APIPark 提供的 OpenAPI、系统MCP服务
  - 快速实现与第三方系统的集成。
  
- **服务级别 MCP（Model Context Protocol）功能**
  - 一键开启 MCP 接入，支持将 HTTP 或 AI API 转换为 MCP 服务  
  - 已开启 MCP 的服务在服务广场会显示 **MCP 标签**  
  - 在服务详情页可查看 MCP 接入信息，复制后即可集成到 AI Agent 中

- **系统级 MCP 接入能力**
  - 支持通过统一的 MCP 接口访问平台上所有公开服务  
  - 适合构建多模态智能体和自动化流程

### 🎨 优化
- **服务详情页体验优化**  
- **数据分析页面体验优化**

## 🎉 V1.6 Beta
### 统一模型调度接口
- 新增全局model参数路由在任意已接入渠道中，通过model=供应商ID/模型名称格式参数即可直接调用目标模型
- 示例："model":"volcengine/llama3-8b" 调用火山引擎的Llama3模型
- 自动完成渠道路由、鉴权参数传递、响应格式标准化
### 新增LLM供应商接入
预集成六大服务平台：
- 火山引擎（字节跳动云服务）
- 阿里百炼云（阿里巴巴智能计算平台）
- Hugging Face（开源模型社区）
- Ollama（本地大模型框架）
- LM Studio（桌面端模型工具）
- Xinference（分布式推理平台）
### 自定义供应商接入
- 支持兼容OpenAI接口标准的第三方服务快速接入为LLM供应商
- 通过标准化配置流程，5分钟完成新LLM供应商注册
### 支持自定义模型
- 全渠道支持自定义模型选项
- 支持自定义渠道模型参数（最大token数/温度值/频率惩罚等），提供新增的模型参数预设模板功能，加快模型参数配置
### 模型别名映射
- AI服务配置新增模型名称重定向功能
- 示例：可将model的参数值通过「doubao」映射为「volcengine_maas/doubao-1-5-lite-32k-250115」
- 兼容历史配置，原有模型标识仍可正常使用

## 🎉 V1.5 Beta
- 新增一键部署开源 LLM 能力。支持通过 APIPark 部署全球最热门的开源大模型，包括简化版和满血版的DeepSeek-R1 和 DeepSeek-V3 等模型部署。
- 优化 AI 模型部署配置页面体验，把负载均衡能力迁移到新的独立菜单页，并升级为支持模型级的负载均衡。以便于用户更加灵活的定义AI模型间的故障转移策略。
- 持续优化AI模型接口的调用流程，创建AI服务时系统自动初始化配置服务访问授权，缩短用户配置流程，提升使用体验。

## 🎉 V1.4 Beta

- 新增支持 AI 模型负载均衡，当原定的 AI 服务商无法访问时实现平滑的故障转移，使您的客户不会受到 AI 服务商的异常影响。
- 新增支持 AI APIKEY资源池，可针对同一 AI 服务商录入多个APIKEY，系统自动调度可用的APIKEY，摆脱原厂的各种限制。
- 新增支持 AI API 的 token 消耗统计，可查看指定时间范围内，调用各AI服务的API所消耗的token数量。

## 🎉 V1.3 Beta

- 新增数据脱敏策略功能，可对API调用中的敏感数据进行过滤，保障与AI对接时的数据安全。
- 新增数据脱敏拦截日志，可对每一次拦截的接口日志进行查询，发现消费者和触发内容。
- 新增API服务集成能力，外部系统可通过URL获取对应API文档数据，助力业务能力快速对接AI agent平台。
- 新增多种报表统计能力，支持按服务维度或按消费者维度分析接口调用情况，协助企业全面管控流量。

## 🎉 V1.2 Beta
APIPark 带来全新的 AI Service (AI Gateway)功能，支持快速接入多个 AI 模型，帮助开发者快速集成和调用各种 AI 模型。APIPark 通过统一的 API 格式来简化调用过程，减少切换模型的复杂性，并且支持将 Prompt 封装成标准 REST API，以便于 API 的复用和共享。APIPark 支持 API 全生命周期的管理，包括从设计、发布到调用和下线的全过程，同时还提供订阅审批机制，有助于提高数据安全性。

🦄 APIPark 已经发布到 ProductHunt：

<a href="https://www.producthunt.com/posts/apipark?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-apipark" target="_blank" rel="noopener"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=501061&theme=light" alt="APIPark - &#0035;1&#0032;Open&#0032;Source&#0032;AI&#0032;Gateway&#0032;&#0038;&#0032;API&#0032;Developer&#0032;Portal | Product Hunt" style={{ width: '100%', height: '54px' }}  height="54" /></a>


✨ 更新：
1. 支持创建 AI 服务，使用格式统一的聚合 API （Unified API）接入 100+ AI 模型。
2. AI 服务支持将 Prompt 提示词转换为标准 REST API，便于管理和使用 Prompt 提示词。
3. AI 服务支持自动生成API文档。
4. 强化分析报表功能。
5. 优化界面显示，更美观、更快速、更强大。
6. 简化用户操作流程，部署完成会自动创建示例项目。
7. 新增更多新手引导。
8. “应用 Application”改为“消费者 Consumer”，让产品概念更容易理解。
9. 修复已知的缺陷。

❤️ 感谢以下Github用户的建议让 APIPark 变得更好，排名不分先后：
@BeatlessLDJ，@jeak01，@Saury-t，@anyachuan，@dashenbibi，@DukeChaos2023，@Tropical-Strom，@NINGyv179，@EthanLeeDev，@Changeeer，@sunanzhi，@maggieyyy，@guowanjing，@marsdxx，@riverLethe，@scarqin，@krystalisa，@yingjoumong8，@snycloud，@yingjoumong8


## 🎉 V1.1 Beta
✨ 更新：
1. 发布Demo网站，欢迎访问 https://demo.apipark.com 体验产品
2. 新增日语、繁体中文语言
3. 加入新手引导
4. 加入分析统计，方便了解企业内部API调用情况
5. 强化API文档，全面支持 OpenAPI V2.0、V3.0 格式，可以上传 OpenAPI YAML 文件创建 API 文档
6. 优化产品体验