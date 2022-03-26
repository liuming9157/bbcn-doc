# 访问CouchDB
如何访问Budibase的底层数据库CouchDB
::: tip
以下内容仅适用于自托管部署
:::

Budibase使用CouchDB存储：

+ 有关应用程序和部署的元数据
+ 使用Budibase的内置表时存储的数据
+ 审计日志

你可以完全访问CouchDb，通过福克斯顿-CouchDB官方客户端。您可以通过以下网址访问Faxton：
```
your-budibase-host/db/_utils/#
```
但是，您需要用户名和密码才能登录。你可以在你的 .env文件文件，它与docker-composer.yaml .

使用您的以下值。环境文件：

+ COUCH_DB_USER
+ COUCH_DB_PASSWORD