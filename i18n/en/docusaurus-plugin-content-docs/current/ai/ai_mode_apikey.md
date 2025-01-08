---
sidebar_position: 3
---

# APIKEY Resource Pool

The APIKEY resource pool is a feature that centrally manages and allocates APIKEYs, providing strong support for the stable operation of AI services. In the resource pool, users can view and manage APIKEYs from various vendors, including their status (such as normal, exceeded, expired, etc.) and calling priority. Through drag-and-drop operations, users can easily adjust the priority order of APIKEYs to meet different business needs. When an APIKEY encounters issues like exceeded usage or expiration, the system automatically activates other APIKEYs based on priority to ensure the continuous availability of AI services.

Of course, you can also use the AI APIKEY resource pool to uniformly reallocate AI calling resources.

![](images/2025-01-08/87ff22e5f1d5fcbbf03fe34f838533dce459324b7bea1585f209623c04a1a197.png)  


## Default APIKEY

The APIKEY configured in the settings pop-up for AI vendors is the default APIKEY. This APIKEY cannot be deleted, ensuring that there is at least one APIKEY for the current vendor.

![](images/2025-01-08/f35fce59f1252b02242ce7089c98ab2534f27cfe3808e65d3800fd1ac3b4df08.png)  


## Adding More APIKEYs

In the APIKEY resource pool page, you can add APIKEYs for the corresponding vendor. Clicking the add button will pop up the following configuration window.

- Name: The name of the KEY. The system will automatically provide a default name like key+number, which can be modified.
- API Key: The actual APIKEY parameter configuration. Note that not only the API Key can be entered here, but also API URL and other configurations.
- Expiration Time: The default is never expire, but you can choose a specific expiration time. After the expiration time, the APIKEY can no longer be used.

![](images/2025-01-08/4727fa181337bac7ec366a5f24161661eaed2531fb4e88aebd2d3eb3de219446.png)  


## Disabling/Enabling APIKEYs

You can disable or enable APIKEYs in the APIKEY resource pool.

- Expired APIKEYs do not have enable or disable buttons; they can only be deleted.
- If an APIKEY is disabled, it cannot be called, and the system automatically calls the next APIKEY.
- If an APIKEY encounters a quota issue, it can be re-enabled to return to normal status. Once enabled, the APIKEY can be normally used in the next AI service call.

![](images/2025-01-08/f36eb1a0fba1cc570aef06ae86a974196d3a27d54a0f0555171af70687eb9b46.png)  

## Adjusting Priority

You can adjust the priority by dragging the button in front of each APIKEY row. The APIKEY with a higher priority will be used first.

![](images/2025-01-08/6a9f2a3fbda443ab9c54494bfe6a6c256fd03fcf78932fdcff4256e57ebd2b12.png)  
