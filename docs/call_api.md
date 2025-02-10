---
sidebar_position: 8
title: 🔗 调用 API
icon: cloud-bolt
---

# 调用API

## 前提条件

在调用前需要满足以下条件：

* **消费者** 已经创建了 **授权证书**，了解更多：[🔗 消费者](consumers.md)。
* **消费者** 已经成功订阅了服务，了解更多：[🔗 API 门户](developer_portal.md)。

## 示例

😜 假设:

* **消费者** 的 **授权证书**：
  * **认证类型**：API Key
  * **参数位置**：Header
  * **参数名称**：Authorization
  * **密钥**：96f55...ee4
* **服务** 的 API 调用地址为： **http://api.apipark.com/cda53bf2/demo\_translation\_api**

![](images/2024-10-28/5fbe42033e3fb02015f4ef886efd6b9d09ed560252a1fd2a35a94df3ebec5e16.png)

您可以使用以下任意一种方式进行调用服务API。

### Postman or Other API Clients

在 API 测试工具中，在 Header 中添加 Authorization 参数，并且将参数值设置为 96f55...ee4：

![](images/2024-10-29-01-47-24.png)

### cURL

在命令行中输入：

```sh
curl -X POST -H "Authorization: 96f55...ee4" \
-H "Content-Type: application/json" -d "request body content" \
http://api.apipark.com/cda53bf2/demo_translation_api
```
