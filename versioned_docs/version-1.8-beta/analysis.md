---
sidebar_position: 9
title: "📊 分析报告"
---

#  API 调用分析报告

APIPark 通过对历史调用数据的分析， 展示 API 长期的调用趋势和性能变化，帮助企业维持 API 的稳定。

> 💡 APIPark 的 API 调用分析报告依赖于 InfluxDB 数据库。如果你使用 APIPark 官方提供的脚本部署，默认会安装 InfluxDB，了解更多：[🔗 部署 APIPark](deploy.md)。
> 💡 你也可以部署外部的 InfluxDB 数据库，然后在 APIPark 的系统设置中填写 InfluxDB 的数据源信息，了解更多：[🔗 设置数据源](system_setting/data_source.md)。

## 全局Overview

1. REST服务调用概览
提供多维度指标的可视化分析，包括但不限于请求总量、流量传输量、平均响应时间等。支持自定义时间段筛选数据，图表清晰展示趋势与变化。

![](images/2025-05-07/d70f9d2a1c88912dfc6a1bd10eadb7d9bfe4b334b9f86a1df4d303676df30032.png)  

2. AI服务调用概览
展示AI服务关键指标，如请求数量、Token使用量、平均Token耗时等，支持自定义时间段数据筛选，通过直观图表呈现性能与使用情况。

![](images/2025-05-07/8cb712bcdae75d2a6100c825115db7d78cfbbf8801f6ee62655eb9bb18bac68b.png)  

3. 多维度统计调用情况。
支持按照服务、消费者、API进行多维度的筛选分析。

![](images/2025-05-07/38ae858deab94983eef4c9580fd5bf56972c533a69b95d42f6cd63748f76d78c.png)  

![](images/2025-05-07/0cb9a23ab3207bdda46fc50051efff63d1c94c31e10f5d6492f2bfa7175199fd.png)  


## 服务级别Overview

提供服务调用统计功能，详细展示各服务的使用情况与性能表现，支持深入分析与优化决策。

![](images/2025-05-07/e525fd8058e731f27a1410fccf4d265ca0af997517fc0033efbcc98cc651cbe9.png)  
