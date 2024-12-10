---
sidebar_position: 4
---

# AI Model Management

Before starting to create AI services, you first need to configure AI model providers. APIPark supports over 100 AI models, including OpenAI, Anthropic, AWS Bedrock, Google Gemini, etc. After configuring the providers, you can choose different models to create AI services and manage all AI service authorization information and cost statistics unifiedly in APIPark.

Enter the **System Settings** module, select **AI Model Management** in the sidebar, and you can see all AI providers supported by APIPark in the list.

![](images/2024-10-26-14-37-38.png)

To integrate with OpenAI as an example, click the settings button. In the popup window:

- Select the **default AI model**: When creating an API in AI services later, the system will automatically set the default AI model for the API, reducing the number of operations needed by the user.
- Fill in the **provider configuration**: Each provider has different configuration information. The system will automatically generate the required configuration information based on the provider you choose. Configuration information is generally available in the provider's Open API management dashboard. You can find a button for quickly jumping to the provider's official website at the bottom left of the popup.

> 💡 If APIPark does not support the AI provider you are using, feel free to [🔗 submit an issue to us](https://github.com/APIParkLab/APIPark/issues/new)

![](images/2024-10-26-15-10-43.png)