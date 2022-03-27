# 访问CouchDB
如何访问Budibase的底层数据库CouchDB
::: tip
以下内容仅适用于自托管部署
:::

Budibase使用CouchDB存储：

+ 有关应用程序和部署的元数据
+ 使用Budibase内置数据时存储的数据
+ 审计日志

你可以通过CouchDB官方客户端[Fauxton](https://couchdb.apache.org/fauxton-visual-guide/index.html)完全访问CouchDb。您可以通过以下网址访问Fauxton：
```
your-budibase-host/db/_utils/#
```
但是，您需要用户名和密码才能登录。你可以在你的 .env文件中找到用户名和密码，它与docker-composer.yaml在同级目录.

在.env文件中找到以下变量即可：

+ COUCH_DB_USER
+ COUCH_DB_PASSWORD