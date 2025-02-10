---
sidebar_position: 2
title: 📜 Changelog
icon: scroll
---

# Changelog

## 🎉 V1.4 Beta

* Added support for AI model load balancing, enabling smooth failover when the original AI provider is inaccessible, ensuring your customers are not affected by the provider's issues.
* Introduced support for an AI API KEY resource pool, allowing multiple API keys for the same AI provider to be entered, with the system automatically managing available API keys, overcoming original factory restrictions.
* Added support for token consumption statistics of AI APIs, allowing you to view the number of tokens consumed when calling various AI services' APIs over a specified time range.

## 🎉 V1.3 Beta

* Introduced a data masking strategy feature to filter sensitive data during API calls, ensuring data security when interfacing with AI.
* Added data masking interception logs to query each intercepted interface log, identifying consumers and triggered content.
* Enhanced API service integration capability, allowing external systems to obtain corresponding API documentation data via URL, facilitating the rapid integration of business capabilities with AI agent platforms.
* Added multiple report statistic capabilities, supporting analysis of interface calls by service dimension or consumer dimension, assisting enterprises in comprehensive traffic management.

## 🎉 V1.2 Beta

APIPark introduces a brand new AI Service (AI Gateway) feature, supporting the quick integration of multiple AI models, helping developers rapidly integrate and call various AI models. APIPark simplifies the calling process through a unified API format, reducing the complexity of switching models, and supports encapsulating Prompts into standard REST APIs for API reuse and sharing. APIPark supports the full lifecycle management of APIs, including design, release, invocation, and deprecation processes, while also providing a subscription approval mechanism to enhance data security.

🦄 APIPark has been released on ProductHunt:

[\<img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post\_id=501061\&theme=light" alt="APIPark - #1ŌOpenŌSourceŌAIŌGatewayŌ&ŌAPIŌDeveloperŌPortal | Product Hunt" style=\{{ width: '100%', height: '54px' \}} height="54" />](https://www.producthunt.com/posts/apipark?embed=true\&utm_source=badge-featured\&utm_medium=badge\&utm_souce=badge-apipark)

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

❤️ Thanks to the following Github users for their suggestions that made APIPark better, in no particular order: @BeatlessLDJ, @jeak01, @Saury-t, @anyachuan, @dashenbibi, @DukeChaos2023, @Tropical-Strom, @NINGyv179, @EthanLeeDev, @Changeeer, @sunanzhi, @maggieyyy, @guowanjing, @marsdxx, @riverLethe, @scarqin, @krystalisa, @yingjoumong8, @snycloud, @yingjoumong8

## 🎉 V1.1 Beta

✨ Updates:

1. Released a demo website, welcome to visit https://demo.apipark.com to experience the product.
2. Added Japanese and traditional Chinese languages.
3. Included beginner guides.
4. Introduced analysis statistics to easily understand internal enterprise API calls.
5. Enhanced API documentation, fully supporting OpenAPI V2.0 and V3.0 formats, allowing uploading of OpenAPI YAML files to create API documents.
6. Improved product experience.
