# OpenID Connect
OpenID Connect (OIDC) 是建立在 OAuth 2.0 协议之上的简单身份层，它允许客户端根据授权服务器或身份提供者 (IdP) 执行的身份验证来验证最终用户的身份，以及获取有关最终​​用户的基本配置文件信息。
![](https://files.readme.io/afb9eda-oidc.png)

### 设置
要为您的 IdP 启用 OIDC，请执行以下设置步骤。

#### 配置您的 IdP
任何支持 OIDC 协议的提供者都可以集成到 Budibase 中，您甚至可以实现自己的。

为您记录了最常见提供商的指南，您可以在边栏中找到它们。其中包括 Auth0、Azure AD、Okta 等。

##### 回调地址
+ 在配置期间，您需要输入 Budibase 安装的回调 URL。
+ 例如：https://{your-budibase-host.com}/api/admin/auth/oidc/callback
#### 在 Budibase 中配置 OIDC
要在 Budibase 中配置 OIDC 集成，请访问构建器部分。Auth

从您的 IdP 中填写以下选项：

+ 配置网址  
    + Budibase 可以在其中找到OpenID 提供程序配置文档的 URL
    + 例如：https://{your-identity-provider.com}/.well-known/openid-configuration
+ 客户编号
    + 您的 IdP 颁发的唯一 ID
+ 客户Secret
    + 您的 IdP 发布的唯一密钥
    + 保存配置以在您的登录页面上启用 OIDC。

#### 自定义您的登录
使用登录配置选项自定义 OIDC 登录按钮。



填写以下任何一项：

+ Name
    + 登录按钮上的名称。这将被替换为Sign in with {name}
+ 图标
    + 登录按钮上的图标。从中选择：
        + 默认图标之一
        + 上传自定义图标
### 重要信息
下面重点介绍了有关 OIDC 集成的一些其他详细信息。

#### 用户配置
与需要预先存在本地用户帐户的 Google 集成不同，OIDC 用户在首次登录时会在 Budibase 中自动创建。重要的是，只有您希望访问 Budibase 的用户已分配给您在 IdP 中配置的应用程序。

您仍然可以使用电子邮件入职提前为用户创建帐户，前提是该电子邮件与您 IdP 中用户的电子邮件相匹配。