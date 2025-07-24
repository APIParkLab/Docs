---
sidebar_position: 2
title: "📜 Changelog"
---

# Changelog
## 🎉 V1.9 Beta
### ✨ Added
- Third-Party Account Login Authorization
Supports user account login authorization via third-party accounts, currently prioritizing Lark account authorization. Seamlessly integrates with the company's Lark account management.

- Consumer-Level MCP Service
When calling MCP capabilities, only services subscribed to by a specific consumer can be accessed, providing more flexible MCP call scope configuration.

## 🎉 V1.8 Beta
### ✨ Added
- **Service Overview Dashboard**
  - Visual charts to display service usage stats:
    - Request count
    - Network traffic
    - Token consumption (total & average)
    - Average requests per consumer
    - Top APIs by call volume
  - Customizable time range for filtering data

- **API / MCP Request Logs**
  - Access historical request logs for APIs or MCP under **Service Management > Logs**
  - View request and response parameters
  - Streaming data is formatted for easier reading

### 🎨 Improved

- **Renamed** system setting “Logs” to **“Log Output”**
- **Renamed** “Logs” under “Data Sources” to **“Request Logs”**, and switched default log storage to **Loki**
- Improved layout of the service page
- Fixed miscellaneous bugs for enhanced stability

## 🎉 V1.7 Beta
### ✨ Added
- **System APIKey Functionality**
  - Manage and maintain system APIKeys in the UI.
  - Users can securely access APIPark's OpenAPI and system MCP services using valid API keys.
  - Quickly integrate with third-party systems.
- **Service-level MCP (Model Context Protocol) support**
  - One-click to enable MCP access for any HTTP or AI API on APIPark  
  - MCP-enabled services are tagged in the API Portal  
  - MCP configuration info is available in the service detail page, ready to use in your AI Agent

- **Platform-level MCP access**
  - System-wide MCP endpoint to access all public APIs via a unified interface
  - Perfect for building intelligent, multimodal agents
### 🎨 Improved
- **Service detail UI optimization**
- **Analytics dashboard optimization**  
## 🎉 V1.6 Beta
### New LLM Provider Integrations
Added pre-configured support for:
- Volcano Engine
- Alibaba Bailian Cloud 
- Hugging Face
- Ollama
- LM Studio
- Xinference  
Expanding service capabilities across multiple cloud platforms and open-source frameworks

### Custom Channel Integration
- Now supports custom API channel integration for any provider that strictly adheres to OpenAI-compatible interfaces
- Seamlessly integrate third-party LLM services into APIPark ecosystem

## Enhanced Model Customization
- Custom model options available across all channels
- Flexible configuration for model selection and parameter tuning

## Model Parameter Value Redirection
- Added model value mapping in service configurations
- Allows using simplified alias names instead of original model identifiers
- Example: Map "gpt-lite" → "azure-gpt-4-0125-preview"

## 🎉 V1.5 Beta
- Added one-click deployment capability for open-source LLMs. Supports deploying the world's most popular open-source large-scale models via APIPark, including simplified and full-featured versions of models like DeepSeek-R1 and DeepSeek-V3.
- Optimized the AI model deployment configuration page experience by migrating load balancing capabilities to a new standalone menu page and upgrading it to support model-level load balancing. This allows users to more flexibly define failover strategies between AI models.
- Continuously improved the AI model interface invocation process. When creating an AI service, the system now automatically initializes service access authorization, shortening the user configuration process and enhancing the overall user experience.


## 🎉 V1.4 Beta

- Added support for AI model load balancing, enabling smooth failover when the original AI provider is inaccessible, ensuring your customers are not affected by the provider's issues.
- Introduced support for an AI API KEY resource pool, allowing multiple API keys for the same AI provider to be entered, with the system automatically managing available API keys, overcoming original factory restrictions.
- Added support for token consumption statistics of AI APIs, allowing you to view the number of tokens consumed when calling various AI services' APIs over a specified time range.

## 🎉 V1.3 Beta

- Introduced a data masking strategy feature to filter sensitive data during API calls, ensuring data security when interfacing with AI.
- Added data masking interception logs to query each intercepted interface log, identifying consumers and triggered content.
- Enhanced API service integration capability, allowing external systems to obtain corresponding API documentation data via URL, facilitating the rapid integration of business capabilities with AI agent platforms.
- Added multiple report statistic capabilities, supporting analysis of interface calls by service dimension or consumer dimension, assisting enterprises in comprehensive traffic management.

## 🎉 V1.2 Beta
APIPark introduces a brand new AI Service (AI Gateway) feature, supporting the quick integration of multiple AI models, helping developers rapidly integrate and call various AI models. APIPark simplifies the calling process through a unified API format, reducing the complexity of switching models, and supports encapsulating Prompts into standard REST APIs for API reuse and sharing. APIPark supports the full lifecycle management of APIs, including design, release, invocation, and deprecation processes, while also providing a subscription approval mechanism to enhance data security.

🦄 APIPark has been released on ProductHunt:

<a href="https://www.producthunt.com/posts/apipark?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-apipark" target="_blank" rel="noopener"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=501061&theme=light" alt="APIPark - &#0035;1&#00332;Open&#00332;Source&#00332;AI&#00332;Gateway&#00332;&#0038;&#00332;API&#00332;Developer&#00332;Portal | Product Hunt" style={{ width: '100%', height: '54px' }}  height="54" /></a>


✨ Updates:
1. Support creating AI services, using a uniformly formatted Unified API to access 100+ AI models.
2. AI Services support converting Prompt instructions to standard REST APIs for easy management and use of Prompts.
3. AI Services support auto-generating API documentation.
4. Enhanced report analysis capabilities.
5. Improved UI display for a more appealing, faster, and stronger experience.
6. Simplified user operation flows; example projects are automatically created upon deployment.
7. Introduced more beginner guides.
8. "Application" changed to "Consumer" for easier understanding of product concepts.
9. Fixed known defects.

❤️ Thanks to the following Github users for their suggestions that made APIPark better, in no particular order:
@BeatlessLDJ, @jeak01, @Saury-t, @anyachuan, @dashenbibi, @DukeChaos2023, @Tropical-Strom, @NINGyv179, @EthanLeeDev, @Changeeer, @sunanzhi, @maggieyyy, @guowanjing, @marsdxx, @riverLethe, @scarqin, @krystalisa, @yingjoumong8, @snycloud, @yingjoumong8


## 🎉 V1.1 Beta
✨ Updates:
1. Released a demo website, welcome to visit https://demo.apipark.com to experience the product.
2. Added Japanese and traditional Chinese languages.
3. Included beginner guides.
4. Introduced analysis statistics to easily understand internal enterprise API calls.
5. Enhanced API documentation, fully supporting OpenAPI V2.0 and V3.0 formats, allowing uploading of OpenAPI YAML files to create API documents.
6. Improved product experience.