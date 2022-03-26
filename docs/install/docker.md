# Docker
### 使用Docker部署Budibase

使用Docker启动Budibase平台并运行的第一步是确保安装了以下各项：

1. [Docker Engine](https://docs.docker.com/engine/install/)-对于Windows和OSX，这意味着安装桌面客户机，对于Linux，请遵循发行版的说明；这将需要安装Docker引擎和CLI，以及 集装箱 .
2. [Docker Compose](https://docs.docker.com/compose/install/)-按照操作系统的说明安装Compose，它控制组成Budibase平台的Docker容器的编排。
安装Docker的先决条件很小，一般来说，最重要的因素是你的操作系统是最新的——在Linux系统上，你需要一个相对最新的内核。为此，我们提供了一些脚本来帮助在基于Linux的系统上进行安装和设置，如下所示：

[用于在基于Linux的系统上设置的脚本](https://github.com/Budibase/budibase/tree/master/hosting/scripts/linux)
运行Budibase平台的最低要求是安装和运行Docker所需的最低要求，可以查看[Docker文档](https://docs.docker.com/) .

对于在生产环境中运行，我们建议使用Linux主机。如果您在获取此设置时遇到任何问题，我们建议您检查此脚本的输出-如果您缺少一些服务，则可能需要执行分发升级。

### 安装Budibase
一旦你完全安装了Docker，剩下的程序应该很简单！您需要将以下文件下载到主机：

1. [docker-compose.yaml](https://raw.githubusercontent.com/Budibase/budibase/master/hosting/docker-compose.yaml)-这定义了Budibase使用的图像以及如何编排它们。
2. [.env](https://raw.githubusercontent.com/Budibase/budibase/master/hosting/.env)-这包含Budibase平台的所有默认设置。
::: tip
如果在生产环境中运行，请更新托管密钥<br>
如果您计划在生产环境中运行群集，则需要在继续之前更新一些设置，重要的是在中找到的托管密钥。关于这个的env信息可以在这里找到。
:::
如果你有一个基于ARM的CPU，你必须更新你的docker组合。山药。使用以下内容更新compose配置的couchdb服务部分：
```
 couchdb-service:
    platform: linux/amd64
    ...
```
下载完这些文件后，运行该平台非常简单：
```
docker-compose up
```
在提示符或终端中运行上面的命令将启动Budibase集群，为我们所需的服务安装最新的映像，并设置一个网络来运行它们——这可能需要一些时间来下载必要的资源。

当集群准备就绪时，您将看到来自各种Budibase服务的混合日志消息。

您可以在以下位置访问新安装：
```
<server-ip>:10000
```
如果您遇到任何问题，最简单的解决方法是 [在我们的社区里发起讨论](https://github.com/Budibase/budibase/discussions).

### 更多信息
对于那些对更高级的设置感兴趣的人，你可能需要对docker compose进行更改。yaml配置文件。下面，我们介绍了各种服务及其用途：

1. [CouchDB](https://couchdb.apache.org/)-这是我们的数据库服务，使用docker卷来保存数据。
2. [MinIO](https://min.io/)-S3的开源替代品，充当文件、二进制数据、附件等的对象存储。
3. [Nginx](https://www.nginx.com/)-我们的代理引擎，它提供了一个单一的接口，通过它可以根据需要与所有服务进行通信。
4. [Budibase Worker](https://github.com/Budibase/budibase/tree/master/packages/worker)-一个后台服务引擎，可以在主应用服务器的后台处理任务。
5. [Budibase Server](https://github.com/Budibase/budibase/tree/master/packages/server)-Budibase平台的主要界面，提供应用程序将使用的API。
所有这些服务都需要能够相互通信，但是，如果需要，它们可以单独托管，只要它们有正确的url来互相访问，它们就可以正常工作。