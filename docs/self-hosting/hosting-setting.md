# 托管设置
有关Budibase托管设置的信息

您可以在自己的infra上运行Budibase，方法是：

+ [Docker](/install/docker)
+ [Kubernetes](/install/k8s)
+ [Digital Ocean](/install/do)  
每个自托管的Budibase平台默认都有一些设置，我们建议您熟悉这些设置，并根据您的需要进行更新。所有这些设置都通过使用环境变量传递到集群。在本节中，我们将介绍每种方法的用途。

需要注意的是，如果您希望修改这些设置中的任何一个，则需要重新启动Budibase平台，以便它识别这些新设置。如果您已经在运行它，那么更改其中一些设置可能会影响用户体验，例如更改JWT-SECRET将注销所有人

完整的变量集可以在我们的仓库中找到[.env](https://raw.githubusercontent.com/Budibase/budibase/develop/hosting/.env)文件。这些变量应该被包括在您的托管解决方案中：

1. MAIN_PORT-这是您的平台将运行的主端口，我们已将其公开，以方便您更改此端口。
2. HOSTING_KEY-为了保护你的应用部署，我们引入了一个密钥，可以用来保护你的Budibase平台。这意味着只有拥有密钥的用户才能从其构建器中进行部署；将来，我们将对此进行扩展，以提供更细粒度的控制。
3. JWT_SECRET-用于保护[JSON Web令牌（JWT)](https://jwt.io/)由平台生成的用户身份验证，我们建议将其更改为随机的，理想情况下是UUID。
4. MINIO_ACCESS_KEY-我们使用开源S3替代方案 [MinIO](https://min.io/)作为对象存储，该项特制用于保护集群的访问密钥。我们建议改变这个。
5. MINIO_SECRET_密钥-如上所述，这是另一个用于保护MINIO的组件，我们建议更改它。
6. COUCH_DB_PASSWORD-用于保护主机[CouchDB](https://couchdb.apache.org/)服务的密码，我们建议更改此项。
7. COUCH_DB_USER-用于保护托管CouchDB服务的用户名，我们建议更改此用户名。
8. WORKER_API_密钥-用于保护平台内部服务之一的密钥，我们建议为此随机生成一些内容，理想情况下是[UUID](https://www.uuidgenerator.net/) .

在您只需要更改端口的情况下，该文件中的其他设置不需要更改。我们可以在端口号上直接访问群集使用的所有服务。（例如登陆CoucbDB上的[Fauxton](https://couchdb.apache.org/fauxton-visual-guide/index.html)）。