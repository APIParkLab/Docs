---
sidebar_position: 8
title: "🔗 Calling the API"
canonicalUrl: https://docs.apipark.com/docs/next/call_api
---

# Calling the API

## Prerequisites

Before making a call, the following conditions must be met:

- The **consumer** has created an **authorization certificate**. Learn more: [🔗 Consumers](consumers.md).
- The **consumer** has successfully subscribed to the service. Learn more: [🔗 API Portal](developer_portal.md).


## Example

😜 Suppose:

- The **consumer**'s **authorization certificate** is as follows:
  - **Authentication Type**: API Key
  - **Parameter Location**: Header
  - **Parameter Name**: Authorization
  - **Key**: 96f55...ee4
- The API endpoint for the **service** is: **http://api.apipark.com/cda53bf2/demo_translation_api**

![](images/2024-10-28/5fbe42033e3fb02015f4ef886efd6b9d09ed560252a1fd2a35a94df3ebec5e16.png)  


You can use any of the following methods to call the service API.



### Postman or Other API Clients

In the API testing tool, add the Authorization parameter in the Header and set the parameter value to 96f55...ee4:

![](images/2024-10-29-01-47-24.png)


### cURL

Enter in the command line:

```sh
curl -X POST -H "Authorization: 96f55...ee4" \
-H "Content-Type: application/json" -d "request body content" \
http://api.apipark.com/cda53bf2/demo_translation_api
```