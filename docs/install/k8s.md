# Kubernetes
在 Kubernetes 集群中安装 Budibase。

开始在 Kubernetes 上使用 Budibase 之前，我们必须安装一些命令行实用程序。按照以下指南安装 Kubectl 和 Helm。

+ [Helm CLI](https://helm.sh/docs/intro/install/)
+ [kubectl CLI](https://kubernetes.io/docs/tasks/tools/#kubectl)

:::tip
我们建议在具有至少 2GB 内存的 K8S 节点上运行，但对于更高容量的用例，我们建议使用更大的实例。
:::

### 安装 Kubernetes 集群
如果您还没有现有的 Kubernetes 集群，请遵循以下针对您的提供商的指南之一。

+ [AWS 指南](https://docs.aws.amazon.com/eks/latest/userguide/getting-started-eksctl.html)
+ [谷歌云指南](https://cloud.google.com/kubernetes-engine/docs/how-to)
+ [Minikube](https://v1-18.docs.kubernetes.io/docs/tasks/tools/install-minikube/)
+ [K3S](https://rancher.com/docs/k3s/latest/en/quick-start/)
+ [MicroK8S](https://microk8s.io/docs)

### 安装 Budibase Helm Chart
现在您的 Kubernetes 集群已启动并运行，您现在可以安装 Budibase helm chart，它将为在 K8S 环境中运行 Budibase 提供所有相关的基础设施。运行以下命令从我们的存储库下载 helm chart，并安装它。

::: tip 
您必须在名为 Budibase 的 Kubernetes 命名空间中安装 Budibase。这有助于将 Budibase 资源与集群的其余部分隔离开来。
:::
```
helm repo add budibase https://budibase.github.io/budibase/
helm repo update
helm install --create-namespace --namespace budibase budibase budibase/budibase
```
稍等片刻，Budibase 将创建所有容器和资源。然后你可以运行：
```
kubectl get pods -n budibase
```
您现在应该能够看到 Budibase 安装程序在您的 K8S 集群中启动并运行。

![Budibase安装K8S](https://res.cloudinary.com/daog6scxm/image/upload/v1646670651/docs/Screenshot_2021-08-16_at_22.19.58_pnzppx.png)

您需要获取ingress controller的 IP 地址。Budibase 利用NGINX ingress controller将传入流量引导到其他 Budibase 服务。

您可以使用ingress controller的 IP 地址访问 Budibase 安装，您可以使用以下命令获取该地址：
```
kubectl get ingress -n budibase
```
在浏览器中访问入口 URL，您将看到 Budibase 安装已启动并正在运行。

![Budibase 管理界面](https://files.readme.io/022091e-Screenshot_2021-08-17_at_18.06.17.png)

#### 升级Chart
要获得最新最好的，您可以运行以下命令来更新 repo 并将最新的 Budibase Helm Chart 安装到您的环境中！
```
helm repo update
helm upgrade budibase-kubernetes budibase/budibase
```
### 配置
### 负载均衡
默认情况下，Budibase 配置一个基本的 NGINX ingress controller来将流量路由到您的 Budibase 服务。如果您想运行自己的负载均衡器，您可以关闭与 Budibase 捆绑的 NGINX ingress controller并运行您自己的ingress controller。
```
ingress:
  nginx: false
  aws: true
```
### 使用自定义域名
如果您使用自定义域名进行安装，则需要将其添加到values.yaml中ingress controller的host部分。请注意我们是如何添加yourdomain.com的。然后，您应该能够在您的 DNS 提供商中加入一条 A 记录，以指向您的ingress controller的 URL。
```
ingress:
  enabled: true
  nginx: true
  className: ""
  annotations: 
    kubernetes.io/ingress.class: nginx
  hosts:
    - host: yourdomain.com
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: proxy-service
            port:
              number: 10000 
```
### 扩展 Budibase
您可以通过在 Budibase helm chart的values.yaml中更新给定服务的replicaCount来扩展安装中的节点。例如，如果我们想因高负载而扩大worker and app service，我们可以更新我们的values.yaml以获得更高的replicaCount。更新后，升级您的chart以应用更改。
```
services:
  dns: cluster.local

  proxy:
    port: 10000
    replicaCount: 1

  apps:
    port: 4002
    replicaCount: 2
    logLevel: info

  worker:
    port: 4001
    replicaCount: 2
```
### Secret管理
如果您在 values.yaml 中将 createSecrets 设置为 true，budibase 将为您创建以下凭据：

+ internal API key，可用于 API 请求。
+ 一个 JWT Secret
+ 对象存储访问密钥（如果使用 MinIO）
+ 对象存储密钥（如果使用 MinIO）

如果您需要读取密钥的值，可以使用kubectl和以下命令从 k8s 密钥中读取值：
```
# for internal API key
kubectl get secret budibase-budibase -o go-template='{{ .data.internalApiKey }}' -n budibase | base64 --decode

# JWT secret
kubectl get secret budibase-budibase -o go-template='{{ .data.jwtSecret }}' -n budibase | base64 --decode

# MinIO Access Key
kubectl get secret budibase-budibase -o go-template='{{ .data.objectStoreAccess }}' -n budibase | base64 --decode

# MinIO Secret Key
kubectl get secret budibase-budibase -o go-template='{{ .data.objectStoreSecret }}' -n budibase | base64 --decode
```
### Redis
Budibase helm chart 附带一个默认包含的Redis服务器。如果要使用自己的外部 Redis 集群，可以在 helm chart 中配置 values.yaml 文件，通过 enable off 来关闭 Budibase 之一。如果您想绕过默认捆绑的 Redis 并使用托管在myrediscluster.io上的外部 Redis 集群，您的配置可能如下所示。
```
  redis:
    enabled: false # disable if using external redis
    port: 6379
    replicaCount: 1
    host: "myrediscluster.io"
    password: "your-redis-password"
```
### CouchDB
Budibase helm chart 将在您的环境中自动启动一个 3 节点 couchDB 集群。如果您更愿意使用现有的 CouchDB 实例，您可以关闭 Budibase 提供的一个并指向您自己的实例。请注意 - 您必须在CouchDB 集群中安装搜索才能使用 Budibase 提供的所有搜索功能。以下是如何将 Budibase 指向托管在 mycouch.io 上的 CouchDB 安装的示例配置：
```
  couchdb:
    enabled: false
    replicaCount: 3
    url: "http://mycouch.io:1234"
    user: "couchuser"
    password: "couchpassword"
```
### MinIO / 亚马逊 S3
Budibase 附带了一个用于对象存储的 MinIO 服务器。由于 MinIO 与 Amazon S3 兼容，因此您可以为 AWS 账户中的 S3 存储桶切换捆绑的 MinIO。如果您想使用 S3 而不是 MinIO，这就是values.yaml的外观。
```
  objectStore:
    minio: false
    browser: false
    port: 9000
    replicaCount: 1
    accessKey: "your-access-key" # AWS_ACCESS_KEY
    secretKey: "your-secret-key" # AWS_SECRET_ACCESS_KEY
```	
### 故障排除
#### 集群中的连接问题
确保您的 Budibase 安装正在 Kubernetes 的 Budibase 命名空间中运行。将流量路由到 Budibase 服务的代理依赖于此。

#### 仍有问题？
如果您需要帮助或发现了错误，请在我们的 GitHub 讨论论坛上提出讨论。对于 Kubernetes 安装，请尝试在您的讨论中包含以下信息：

您正在使用哪个 K8S 提供商（AWS/MiniKube 等）
正在发生的错误的屏幕截图/日志
如果您更改了任何配置，则为您的 values.yaml 的屏幕截图
与您遇到的问题相关的任何其他内容。