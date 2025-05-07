---
sidebar_position: 9
title: "📊 Analysis Report"
---

# API Call Analysis Report

APIPark analyzes historical call data to display long-term API call trends and performance changes, helping companies maintain API stability.

> 💡 APIPark's API call analysis report relies on the InfluxDB database. If you use the scripts provided by APIPark for deployment, InfluxDB will be installed by default. Learn more: [🔗 Deploy APIPark](deploy.md).
> 💡 You can also deploy an external InfluxDB database and fill in the InfluxDB data source information in the APIPark system settings. Learn more: [🔗 Set Data Source](system_setting/data_source.md).

## Global Overview

1. REST Service Call Overview
Provides visual analysis of multiple metrics, including but not limited to total request volume, data transfer volume, and average response time. Supports custom time period data filtering, with clear trend and change demonstrations on charts.

![](images/2025-05-07/d70f9d2a1c88912dfc6a1bd10eadb7d9bfe4b334b9f86a1df4d303676df30032.png)  

2. AI Service Call Overview
Displays key indicators for AI services, such as request count, token usage, average token duration, etc. Supports custom time period data filtering, presenting performance and usage through intuitive charts.

![](images/2025-05-07/8cb712bcdae75d2a6100c825115db7d78cfbbf8801f6ee62655eb9bb18bac68b.png)  

3. Multi-Dimensional Call Statistics
Supports multi-dimensional filtering analysis based on services, consumers, and APIs.

![](images/2025-05-07/38ae858deab94983eef4c9580fd5bf56972c533a69b95d42f6cd63748f76d78c.png)  

![](images/2025-05-07/0cb9a23ab3207bdda46fc50051efff63d1c94c31e10f5d6492f2bfa7175199fd.png)  


## Service Level Overview

Provides service call statistics, detailing the usage and performance of each service, supporting in-depth analysis and optimization decisions.

![](images/2025-05-07/e525fd8058e731f27a1410fccf4d265ca0af997517fc0033efbcc98cc651cbe9.png)  
