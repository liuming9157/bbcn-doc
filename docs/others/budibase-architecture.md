# Budibase架构
涵盖使 Budibase 平台工作的架构

Budibase 架构非常简单，由几个关键的 Budibase 服务和一系列 Budibase 构建的开源技术组成。您可以在下面看到使 Budibase 工作的服务以及它们如何交互的总体概述。
![](https://files.readme.io/aa08a14-architecture.png)

### 托管架构
在本节中，我们将介绍构成 Budibase 自托管平台的核心服务以及该架构如何组合在一起。

1. 应用程序服务- 这是 Budibase 基础架构的核心，应用程序服务在部署 Web 应用程序时托管它们，并提供 Web 应用程序用于访问/存储其数据的 REST API。
2. Worker 服务- 一个小型自定义 Budibase 服务，目前处理平台安全，确保尝试部署的用户有权这样做。该服务将来会扩展，以覆盖其他后台进程。
3.  (CouchDB) - 这是 Budibase 的主数据库，它是一个 NoSQL 高度可扩展和可靠的平台，支持简单的数据复制和分区。我们在部署应用程序时利用数据复制，并且它对于同步集群以进行大规模部署特别有用。我们将 CouchDB 服务划分为特定于每个应用程序的数据库，这意味着我们可以轻松安全地保持数据分离。
4. MinIO（对象存储） - 可以将大文件存储在 Budibase 应用程序中，以及在特定版本的 Budibase 客户端（每个 Budibase 网络应用程序的核心 Svelte 应用程序）之上构建的应用程序。为了存储这些文件，我们使用了与 AWS S3 类似的 MinIO。
5. 代理 (NGINX) - 为了简化 Budibase 平台的部署和使用，我们通过位于 Budibase 架构前端的代理引擎路由所有请求。没有服务直接通信，这也允许我们在系统增长时在必要时对服务进行负载平衡。

无论采用何种自托管方法，此架构看起来都一样，Budibase 需要上述所有服务才能运行。

### 生成器Builder架构
Budibase 的另一个尚未讨论的核心元素是构建器，在 Budibase 架构中，构建器（在此处下载）是您制作 Web 应用程序的地方。这是一个基于Electron的桌面应用程序，它将与 Budibase 平台（云或自托管）通信，以便在完成后部署您的应用程序。它由两个主要组件组成：

1. Builder svelte app - 这是构建器的界面组件，当使用电子应用程序时，这是您正在与之交互的组件。
2. Apps Service- 我们在构建器中运行应用程序服务的一个版本，这就是您能够预览应用程序并体验它们的方式，就像它们已部署一样。服务器还处理存储将构成您的应用程序的所有元数据，我们为此使用名为PouchDB的本地离线数据库。
3. Client library- 您制作的每个 Web 应用程序的核心是 Budibase 客户端，这是一个纤细的应用程序，它在运行时使用您在构建器中提供的信息塑造到您的应用程序中。

### 网络应用Web app架构
最后是 Budibase 最重要的组件，您制作的应用程序！每个 Budibase 应用程序都由几个核心库组成：

1. Svelte - Budibase 喜欢 Svelte，我们所有的核心网络应用程序都是用 Svelte 构建的。
2. Client library- 与构建器一样，每个 Budibase 应用程序都有一个用于构建它的客户端库版本，这提供了应用程序运行所需的交互性和数据连接。
3. Component library- 我们希望能够轻松快速地构建一致的 Web 应用程序，因此，我们提供了一组可以构建应用程序的核心组件 - 这包含在您的应用程序中。

希望本概述能够稍微解释一下 Budibase 平台的工作原理，从构建器到您部署的 Web 应用程序。