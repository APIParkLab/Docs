---
sidebar_position: 2
---
# One-click LLM Deployment

APIPark One-click deployment LLM capability enables users to deploy mainstream open-source large language models (such as DeepSeek, LLaMA, ChatGLM, QWen, etc.) through a visual interface with one click, automatically completing model optimization, service deployment, and gateway configuration initialization. Developers do not need to focus on the underlying architecture; they can deploy open-source models locally within minutes and transform them into API interfaces that comply with the openai request and response format. It can be integrated into existing business systems, significantly reducing the threshold for AI application implementation and helping enterprises quickly build intelligent service capabilities.

## 1. Deploy Open-Source LLM
- Click the "Deploy AI Locally & Generate API" card on the homepage

![](images/2025-02-20/d781b0c7e29dad3fdfc5d682edd6fc716b44902b2f0cac955eefd5207fec4df4.png)  

Note: If you click "Deploy Deepseek-R1" directly, the model will be deployed directly without further steps.

- Enter the required vendor name, select the corresponding model, and click confirm to initiate deployment.

![](images/2025-02-20/6bbe015b53401a8caf320ef1736c5b654928b400c16de678e4410f4bc69d688d.png)  

- The deployment process will go through three stages: "Download model files", "Deploy model", and "Initialize configuration". Users can view the deployment process log at any time.

![](images/2025-02-20/c0e8ed166a5f53f59c369b0aac8b7d0de3dee2d373ae367f81b25a1183636b6d.png)  

- After successful deployment, a service with the model name will be added to the service list, and you can enter the service to call the local model.

![](images/2025-02-20/de820c8c7b55c8b54573bff189623e226e5d512fd6d04970566654543646c2dd.png)  


## 2. Call Open-Source LLM
- In the consumer list, find the subscriber consumer of the service. Generally, it defaults to "Demo Application". Go to the consumer details and get its API Key. Copy this API Key for use when calling the interface.

![](images/2025-02-20/5adbcc3aef38b81892b62717094b15aedd7e80ad21aa43bd2c5d6339d1f2e0c7.png)  

- Enter the newly deployed open-source AI service and check for any errors in its detailed configuration. After confirming that there are no errors, you need to click the [New Publishment] button in the publishing menu. Publish the current configuration to the gateway before it can be called.

![](images/2025-02-20/372514bf3937dfd99e1187892adf0564d130749b74f5baa093197920f706b4b6.png)  

- After publishing, find the service in the API portal menu, and you can call the corresponding interface. When calling this interface, use the API Key mentioned above for authorization verification.

![](images/2025-02-20/0ed1159fa0950098bf35d1dea19884d115fa9cb420539a900813ff1bfba3ac10.png)  
