# 部署信息
如何部署Budibase

关于部署的一个常见问题是它是如何工作的——在其上构建工具之前要问的一个重要问题。

### 如何部署
#### 自托管
在自托管部署的情况下，答案很简单，应用程序、附件和所有数据都将上传到自托管平台，这些数据将在您的 MinIO 和 CouchDB 服务之间流动。有关这方面的更多信息，请查看[托管架构](/others/budibase-architecture)页面

#### 部署如何工作
另一个重要问题是部署应用程序时实际发生的技术。在这里，我将简要概述 Budibase 构建器和平台为使您的应用程序上线所采取的步骤！无论您是部署到自托管服务还是部署到 Budibase Cloud，此过程几乎相同；唯一的区别在于 Budibase 如何将每个人的应用程序分开并在云中限定用户配额。

1. 首先，构建器发送您的托管/API 密钥以确认您可以访问平台，如果接受，平台将返回令牌以允许一次性部署到各种服务
2. 接下来，构建器使用这些令牌通过我们的代理服务与数据库和对象存储引擎进行通信，存储应用程序数据、关于应用程序和 Budibase 客户端的元数据，Svelte 应用程序是每个 Budibase 应用程序的基础。
3. 所有元数据和应用程序数据都存储在CouchDB中，这是一个重要支持复制的 NoSQL 数据库。我们将数据从您的构建器复制到 CouchDB 服务，这意味着我们可以将现有应用程序的数据与您在构建器中所做的任何更新合并，并部署新的应用程序。
4. 最后，构建器确认部署是否成功，并将有关如何访问应用程序的信息返回给用户。这还将包括为现在在部署的应用程序中运行的任何 webhook 处理我们的 URL。

如您所见，部署过程非常简单，安全，上传，然后确认，然后您就可以开始使用该应用了！