--- 
sidebar_position: 2
--- 

# AI Model Load Balancing

AI model load balancing is an intelligent scheduling mechanism designed to ensure the high availability and stability of AI services. When a primary AI provider service fails, the load balancing can automatically switch requests to a backup AI provider. This effectively avoids service interruptions caused by provider issues, ensuring continuous operation of AI applications and enhancing user experience.

Load balancing also supports prioritizing providers to ensure that in the event of an anomaly, switching can be done according to a preset priority sequence, further optimizing resource utilization and response speed.

![](images/2025-01-08/10e918a35428878f54fbf0a2928067b75b36b21cf2a05307485e934898217b14.png)

## Introduction to Model Load Balancing Diagram

On the AI model page, under the configured tab, a load balancing diagram of all currently configured AI model providers will be displayed. You can view the status information of each provider and their corresponding API keys.

- **Provider Card**: The provider card displays the provider's availability status and the default selected model. Users can click the edit button in the upper right corner to make edits.

![](images/2025-01-08/677ff1d30dae90dfdc94e6af0c05fbd0e5c12f34701067f7fd8ffc7c06958095.png)

- **API Key Card**: Connected to the right of the provider card is the API key card for that provider. Each color block represents an API key on that provider, with green indicating a normal status and red indicating an abnormal (unavailable) status.

![](images/2025-01-08/505a49b34c56ff704260ae7c6e0ffb79a4e767c010c194999e2fc63db7b22fac.png)

- **API Association Count**: The data on the connecting line between AI Services and provider cards represents how many APIs have called that provider's AI model. Clicking this data text opens a new page to view the specific AI API list.

![](images/2025-01-08/fa83cb6c7cc0618bb33f9b91e541bc8229cceca52b859e503c8a1a0275fda130.png)

- **API Key Count**: The data on the connecting line between the provider card and the API key card represents how many API keys exist for that provider. Clicking this data text opens a new page to view and manage the corresponding API key resource pool.

## Load Priority

There is a load priority field in the current provider configuration, which determines which provider's AI model is prioritized in case other providers fail. The lower the priority number, the higher the priority, meaning the default model of that provider is called first.

The system supports two methods for adjusting load priority:

- Directly drag the provider's card in the load balancing diagram to change the priority order.
- Adjust the load priority number in the corresponding provider configuration popup to the target rank number.

![](images/2025-01-08/bca54b8d2e9fd1c3188141323f5440a92e2bf8ca83c119df3ed757853b9f3798.png)