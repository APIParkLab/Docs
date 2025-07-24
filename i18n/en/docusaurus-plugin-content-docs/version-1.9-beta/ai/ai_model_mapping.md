---
sidebar_position: 6
---

# Model Alias Mapping

Through the AI unified interface provided by `APIPark`, global model parameter routing is supported. You can directly call the target model in any connected AI interface using the format parameter **model=supplier ID/model name**. This automatically completes channel routing, authentication parameter passing, and response format standardization.

Example: `"model":"volcengine/llama3-8b"` calls the Llama3 model from Volcengine. You can view the specific model parameter values by clicking the number in the Models column of the AI Model list.

![](images/2025-04-10/440705fa8148789ea10d3e70bd8e2055832cda3a4802641944e25bb420d7a324.png)  

![](images/2025-04-10/6c30bfb5519f96df0bf758ab4d008f68a16128e0ddd23d2d9d96b3a1f033ba60.png)  

However, some model parameter names may be too long. To facilitate easier use during development, APIPark provides a model alias mapping feature. You can find the "Model Redirection" configuration in the respective "AI Service" settings to customize simplified model value mappings to the original model values.

![](images/2025-04-10/887d179822a1e5081d175613929dd64b53593eb60c8ea6a736202fdd217cb47b.png)  

For example, if you need to simplify the parameter value of the Doubao model under Volcengine, you can configure the following in JSON format to map the model parameter value "doubao" to "volcengine_maas/doubao-1-5-lite-32k-250115".

![](images/2025-04-10/3c7216b1595d2e5e623dfe2abe94a1950d0f002922dc22db4cd52fffadf6b60d.png)  

This feature is compatible with historical configurations, and the original model values can still be used as normal.

The API call is shown below:

![](images/2025-04-10/61b6dda540bee4c392c52b5b58c86a077da2ff5ed1ee99ac63b1353a5a696d0b.png)  