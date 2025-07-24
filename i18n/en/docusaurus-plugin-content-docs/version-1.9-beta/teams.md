---
sidebar_position: 6
title: "🤝 Team"
---

# Team

In APIPark, you can create multiple teams. A team is similar to the concept of a tenant, where each team has its own members, services, and consumers. The team function helps manage complex organizational structures.

![](images/2024-10-28-22-11-37.png)

## Create a Team
Go to the **Workspace** module, select **Team** in the sidebar, and then click **Create Team** and fill in the following details:

- **Team Name**
- **Team ID**: A unique identifier for the team, which cannot be changed once saved.
- **Team Administrator**: The team admin has the highest privileges within the team, able to manage members, add services, and consumers within the team.
- **Description**

![](images/cd907e5cc59c79d0f0.png)

## Add Members to the Team
In the team details page, select **Members** in the sidebar, and then click **Add Member**. In the popup, choose the member you want to add to the team.

> 💡 When adding team members, you can only choose from the list of accounts in APIPark. If you haven't created an APIPark account for the members, please refer to [🔗 Manage APIPark Account](system_setting/account_role.md)

![](images/2024-10-28-21-53-07.png)

## Create AI Services
APIPark's AI Service (AI Gateway) provides unified access management for multiple AI models, helping developers quickly integrate and call various AI models. It simplifies the calling process with a standardized API format, reduces the complexity of model switching, and supports encapsulating prompts into standard REST APIs for easier API reuse and sharing. APIPark supports full API lifecycle management, including the entire process from design, publishing, to calling and deprecation, and provides a subscription approval mechanism to enhance data security.

If you need to create AI services within the team, please visit [🔗 Create AI Services](services/ai_services.md)

## Create REST Services
APIPark has a powerful cloud-native API gateway that offers better performance than Nginx and supports cluster deployments for large-scale traffic.

By sharing REST APIs within the team through APIPark and managing API call relationships, you can avoid management costs and data leakage problems caused by chaotic API calls.

If you need to create REST services within the team, please visit [🔗 Create REST Services](services/rest_services.md)

## Create Consumers
In APIPark, a **Consumer** is an entity that **subscribes to services** and **calls APIs**. Consumers gain the right to call the APIs within the service by subscribing, ensuring data security and compliance with access rights.

Consumers support various authentication methods, including API Key, Basic, JWT, and AK/SK, to meet different application security requirements.

If you need to create consumers within the team, please visit [🔗 Create Consumers](consumers.md)