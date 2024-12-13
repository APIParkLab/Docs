---
sidebar_position: 2
title: REST Service
canonicalUrl: https://docs.apipark.com/docs/next/services/rest_services
---

# REST Services (API Gateway)

REST services are web services that follow the REST (Representational State Transfer) architectural style. They use standard HTTP methods to process data and interactions, making the services easy to understand and use. On the APIPark platform, REST services can be easily created and managed to support the needs of various web and mobile applications.

In the API Gateway, **REST Services** refer to a collection of **REST APIs** that together provide specific functionality or business logic. **REST Services** are the fundamental units used on the platform to organize and manage APIs. Through **REST Services**, developers can define, publish, manage, and monitor a series of APIs for use by other users or systems.

Consumers can choose and subscribe to the **REST Services** that meet their needs. By subscribing, consumers gain access to specific API interfaces, allowing them to make tailored calls based on actual business requirements. The system employs an efficient authentication mechanism to ensure that access requests carry valid authentication information when making API calls, safeguarding data security and user privacy.

# Creating and Publishing REST Services
## 1. Create a REST Service

Enter the **Workspace** module, select **Services** from the sidebar, and then **Create Service**, fill in:

- **Service Name**
- **Service ID**: A unique identifier for the service, once saved it cannot be changed.
- **Service Type**, select **REST Service**:
  - **AI Service**: An AI Gateway that transforms different AI models and prompts into a unified REST API through APIPark.
  - **REST Service**: A traditional API gateway that can connect to microservices or HTTP REST APIs.
- **API Request Prefix**: Set a unified request prefix for all APIs of the service, once saved it cannot be changed.
- **Team**: If you have joined multiple teams, you need to set which team is responsible for managing this service.
- **Subscription Review**:
  - **No Review Needed**: All consumers can subscribe to and call this service.
  - **Manual Review**: Only consumers who pass the review can call the service.
- **Service Category**: Choose which category to publish the service to in the API portal.

![](images/2024-10-26-15-36-33.png)

## 2. Fill in the API Upstream


## 3. Create an API


## 4. Publish the Service

✨ If there are changes to the **API, API documentation, usage instructions, or upstream** of the service, you need to publish a new version to make the new configurations take effect.

In the sidebar, select **Publish**, then click **Create New Version** and fill in:

- **Version Number**
- **Version Description**

Click **Confirm** to complete the publishing.

> 💡 If this is the first time publishing the service, it will appear in the **API Portal** and be available for subscription by **consumers**.
> 💡 If the service is set to **Manual Review**, consumers who subscribe to the service need to wait for approval from the **Service Administrator** before they can call the API.

![](images/2024-10-27-01-44-55.png)

# <span style={{ color: "#999" }}>[Optional]</span> Create a Consumer and Subscribe to the Service

APIPark offers an **API Portal** feature, allowing users to publish services to the API portal to be viewed, subscribed to, and called by other users.

To ensure secure and standardized use of APIs and reduce management costs, users need to first create a **Consumer** and subscribe to services through the consumer, then use the consumer's **authorization certificate** to call APIs.

[🔗 Learn More: Consumers](../consumers.md)

# <span style={{ color: "#999" }}>[Optional]</span> Call the API

[🔗 Learn More: Calling API](../call_api.md)