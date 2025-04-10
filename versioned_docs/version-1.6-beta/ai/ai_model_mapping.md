---
sidebar_position: 6
---

# 模型别名映射
通过`APIPark`输出的 AI 统一接口，支持全局model参数路由。可在任意已接AI接口中，通过**model=供应商ID/模型名称**的格式参数即可直接调用目标模型。并且自动完成渠道路由、鉴权参数传递、响应格式标准化。

示例：`"model":"volcengine/llama3-8b"`调用火山引擎的 Llama3 模型
具体指定的 model 参数值可以在 AI Model 列表中点击 Models 的数字查看具体的模型参数值。

![](images/2025-04-10/440705fa8148789ea10d3e70bd8e2055832cda3a4802641944e25bb420d7a324.png)  

![](images/2025-04-10/6c30bfb5519f96df0bf758ab4d008f68a16128e0ddd23d2d9d96b3a1f033ba60.png)  

但部分模型的参数值名称过长，为了在开发调用过程中使用更加便捷，APIPark 提供了模型别名映射的功能。
可在对应的「AI 服务」配置中找到「模型重定向」配置，自定义简化的模型值映射为原模型值。

![](images/2025-04-10/887d179822a1e5081d175613929dd64b53593eb60c8ea6a736202fdd217cb47b.png)  

例如：如果需要简化火山引擎下的豆包模型的参数值，那么可通过以下的Json格式配置，将model的参数值通过「doubao」映射为「volcengine_maas/doubao-1-5-lite-32k-250115」。

![](images/2025-04-10/3c7216b1595d2e5e623dfe2abe94a1950d0f002922dc22db4cd52fffadf6b60d.png)  

该功能兼容历史配置，原有模型值仍可正常使用。

调用API如下图所示：

![](images/2025-04-10/61b6dda540bee4c392c52b5b58c86a077da2ff5ed1ee99ac63b1353a5a696d0b.png)  
