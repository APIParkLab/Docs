---
sidebar_position: 6
---

# 发布版本

发布服务版本是将最新配置的服务和 API 部署到生产环境的重要步骤，确保订阅者调用时可以访问到最新发布版本的 API。通过发布服务版本，可以统一管理 API 和服务的生命周期，确保服务和 API 的最新配置能够及时生效，保证系统的稳定性和可靠性。

执行发布操作后，若当前服务为`外部服务`，则该服务将会展示在服务广场中。

## 操作演示

:::tip

在操作前，需要满足以下条件：

1. APIPark已完成网关集群配置操作，且网关集群运行状况良好，若无，请参考教程 [配置网关集群](../pre-work/cluster.md#操作演示)。
2. 上游配置完成，若无，请参考教程 [配置上游](./upstream.md#操作演示)。
3. API已添加完成，若无，请参考教程 [添加API](./api.md#操作演示)。

:::

1. 选中需要配置的服务，进入服务内部页面。

![](../../tutorials/service/images/2024-08-14/cf9e5cd3b52f3977f4e5503e01234a4e538d9d9c1433c2ed9294e7de4afd00e5.png)

2. 点击`发布`，点击`新建版本`。

![](../../tutorials/service/images/2024-08-14/55ce074035abc44a450b59363fb730ac7dc9218d5a3b8b4206f3b296599c2f9f.png)  

3. 在弹出框中输入版本说明信息，填写完后，点击`确认`。

![](../../tutorials/service/images/2024-08-14/88e03577a3f92f5db00b934be613fe72002571c773640f1380cf5d965b6153ee.png)  

发布完成后，若服务为外部服务，则将会展示在服务广场中供订阅方订阅。