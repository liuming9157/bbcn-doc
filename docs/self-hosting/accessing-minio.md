# 访问MinIO
如何访问MinIO
::: tip
以下内容仅适用于自托管部署
::: 

Budibase使用MinIO对象存储，以存储：

+ Web前端文件
+ 附件

您可以通过官方客户端完全访问MinIO。在访问MinIO客户端之前，请执行以下步骤：

1. 启用MinIO Browsing。你的docker-compose.yaml应该包含一个名为MINIO_BROWSER的设置-确保其值为on.
2. 如果你改变了docker-compose.yaml，则需要保存文件并重新启动群集。
3. 现在，找到你的访问密钥和密码。你的 .env文件文件应该包含这些值
+ MINIO_访问密钥，和
+ 密匙

现在您应该可以通过以下URL访问MinIO：
```
your-budibase-host/minio
```