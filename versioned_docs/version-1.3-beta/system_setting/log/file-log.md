---
canonicalUrl: https://docs.apipark.com/zh-Hans/docs/next/log/file-log
---

# 文件日志

收集请求网关的日志信息，并将其输出到文件中，供开发者查询。

## 特性

文件日志：将请求信息输出到日志文件中，具备以下特性：

* 自定义文件的存放目录及文件名称
* 按照一定周期分割日志文件，避免单个文件过大不好查看的问题
* 定时删除过期文件，降低硬盘空间开销

## 操作演示

### 新建文件日志配置

1. 点击`系统设置` -> `日志` -> `文件日志`，点击`添加文件日志`。
![](images/2024-10-27/6e7b1882deeaa54d04707f7b6837a86918b368c297b5d35f634ef87c52dc4072.png)  


2. 填写文件日志配置

![](images/2024-10-27/a509fb623955445b04e898b407ea5f99ce152fc44661c6ecaeb7c2d57b3ffe0b.png)  


**配置说明**：

| 字段名称     | 说明                                                         |
| ------------ | ------------------------------------------------------------ |
| 文件名称     | 存放的文件名称，实际存放的名称会加上 `.log` 后缀，即为：\{文件名称\}.log |
| 存放目录     | 文件存放目录，支持相对路径和绝对路径                         |
| 日志分割周期 | 按照一定周期创建新日志文件，旧日志文件将会重命名，可选项：小时、天 |
| 过期时间     | 文件保存时间，单位：天，超过保存时间的，将定时清理删除       |
| 输出格式     | 输出日志内容格式，支持单行、Json格式输出                     |
| 格式化配置   | 输出格式模版，配置教程[点此](https://help.apinto.com/docs/formatter)进行跳转 |

**文件生命周期演示**

![img](http://data.eolinker.com/course/tgLQMA27ce951803c9e4c6ab3c82a899863c86f86624e01.png)

**格式化配置示例**

```json
{
   "fields": [
      "$time_iso8601",
      "$request_id",
      "@request",
      "@proxy",
      "@response",
      "@status_code",
      "@time"
   ],
   "request": [
      "$request_method",
      "$scheme",
      "$request_uri",
      "$host",
      "$header",
      "$remote_addr"
   ],
   "proxy": [
      "$proxy_method",
      "$proxy_scheme",
      "$proxy_uri",
      "$proxy_host",
      "$proxy_header",
      "$proxy_addr"
   ],
   "response": [
      "$response_headers"
   ],
   "status_code": [
      "$status",
      "$proxy_status"
   ],
   "time": [
      "$request_time",
      "$response_time"
   ]
}
```

填写完后，点击`提交`即可。

### 上线

1. 点击待上线配置后方的`上线`按钮。

![](images/2024-10-27/05a9a722c4dd14850c93058f6f8d0afa08b6f43b49e0f7bb0cf08c307962f792.png)  