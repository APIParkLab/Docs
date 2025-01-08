---
sidebar_position: 3
---

# API Gateway

The **API Gateway** is the core of **APIPark**, responsible for forwarding API traffic, controlling API access permissions, and other functions.

> 💡 If you have deployed using the script provided by APIPark, the API Gateway will be installed by default. Learn more: [🔗 Deploy APIPark](deploy.md).

## Modifying API Gateway Configuration

Go to the **System Settings** module, select **API Gateway** in the sidebar, and then click **Modify Settings**:

1. Enter the **Admin Node** address of the **API Gateway Cluster** in the interface and click Next.
2. APIPark will automatically retrieve the cluster information of the API Gateway from the address you provided and display it on the interface. After verifying that everything is correct, click the **Confirm** button.

![](images/2024-10-29-01-59-02.png)

## How to Obtain the Address of the Admin Node

If you used the script provided by APIPark for deployment, the **Admin Node** address of the **API Gateway Cluster** will be displayed upon completion of the deployment.

![](images/2024-10-27/69fbddbcdfc141759b8483877dd2b3f3cb91e189df08291ba7159d1aaa155702.png)