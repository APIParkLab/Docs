---
sidebar_position: 1
---
# Integrating LLM Providers

Before creating AI services, you first need to configure an AI model provider. APIPark supports over 100 AI models, including OpenAI, Anthropic, AWS Bedrock, Google Gemini, etc. After configuring the provider, you can choose different models to create AI services and manage all authorization information and cost statistics for AI services in APIPark.

Currently, APIPark is pre-integrated with six major service platforms:
- Volcengine (ByteDance Cloud Services)
- Alibaba Cloud (Alibaba Intelligent Computing Platform)
- Hugging Face (Open Source Model Community)
- Ollama (Local Large Model Framework)
- LM Studio (Desktop Model Tool)
- Xinference (Distributed Inference Platform)

## Adding a Built-in Provider

### Configuration Steps

1. Click on System Settings -> AI Models to enter the online model page, and click on Add New Provider.

![](images/2025-04-10/4bb7a196b58d3711542fd476ffeb468a93ae726ac6fba8ce5ac028120902e13d.png)  

2. Select the provider you need to configure, enter the provider's API Key information, enable LLM, and click save, like this:

![](images/2025-04-10/649c8885a013fe6f205fa9ca6894b66e43d336c127a2c55b495621b05c24e85f.png)  

After saving, you can [create and publish AI services](../services/ai_services.md).

## Adding a Custom Provider

APIPark not only has multiple built-in mainstream large language model (LLM) providers but also supports quickly adding third-party services that comply with the OpenAI interface standard as new LLM providers. Through a standardized configuration process, you can complete registration and integration within just 5 minutes, easily expanding model services suited to your business needs.

### Configuration Steps

1. Preparations.
Ensure your third-party LLM service is compatible with the OpenAI interface standard and obtain the API Key and endpoint address.
This example uses Alibaba Cloud's configuration for demonstration.

2. Add a Custom Provider
![](images/2025-04-10/a4b7fe92b088560c13293918311257673d137a9eb6140b58b0b053a1cc4487ee.png)  

![](images/2025-04-10/2ab1c0f9a68fff4a797632489649bb46ba83a4f33368deb703db294775c808ef.png)  

3. Add a Custom Model
When adding a custom model, the model name needs to be consistent with the provider's model name, as shown below:

![](images/2025-04-10/8859b9b84e33f4f73c9e105501bf951b82f0578e3db7cb55480dae240f4f302a.png)  

![](images/2025-04-10/e74955f79cf835e4211035c789c0702830941c49bb43d91f0c2c5da7883c8e32.png)  

4. Fill in the Basic Information about the Provider

Alibaba Cloud's `base_url` is `https://dashscope.aliyuncs.com/compatible-mode/v1`, and the API Key needs to be acquired individually.

![](images/2025-04-10/6db8436c512debb468cdf9145a049084751b9a557dc31652783955fd158a38e1.png)  

After saving, you can create AI APIs in the AI service and bind their providers and models.

![](images/2025-04-10/c4445958bd7a54c681f80c98969286e2b7fdd5940e792a41084696cdd1b5fb3d.png)  

![](images/2025-04-10/c7ea401390a07fb1f41d0cfdcc4d8912d56fdb4042b024bf89ed49cd1851149d.png)  

> 💡 If APIPark does not support the AI provider you use, feel free to [🔗 Submit an Issue to Us](https://github.com/APIParkLab/APIPark/issues/new)

![](images/2024-10-26-15-10-43.png)