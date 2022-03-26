# 反向代理
如何为Budibase配置反向代理

在将Budibase平台投入生产使用之前，您需要设置的主要内容之一是代理，它可以通过域控制对集群的访问（不需要端口号等），并且允许对您拥有的域使用HTTPS。在本节中，我们将提供一些配置选项，以方便地启动和运行NGINX公司或 凯蒂 .

### Caddy
Caddy是一个开放源码的web服务器，使用Go编写的自动HTTPS。如果您想使用caddy在Budibase实例上尽快启动HTTPS并运行，请执行以下步骤。

#### 安装Caddy
按照[Caddy安装说明](https://caddyserver.com/docs/install) .
完成此操作后，应该可以使用以下命令检查计算机上是否有可用的Caddy。
```
caddy version
```
接下来，创建Caddyfile有了你的域-基本上，创建一个名为Caddyfile（无扩展名）的文本文件，然后将你的域添加到该文件中。
```
yourdomain.com
```
要在域上设置HTTPs，只需运行：
```
caddy start
```
现在必须设置Caddy指向Budibase实例。您可以通过停止Caddy来执行此操作：
```
caddy stop
```
然后用下面的命令重新启动Caddy。（请记住用您使用的域名和URL替换您的域名和URL。）
```
caddy reverse-proxy --from yourdomain.com --to localhost:10000
```
就这样！完整的HTTPS和反向代理设置与Caddy和Budibase。

### NGINX
请注意，本节假设您了解NGINX的安装、设置和配置。有关NGINX的信息可以在这里找到：

+ [安装](https://docs.nginx.com/nginx/admin-guide/installing-nginx/installing-nginx-open-source/)
+ [设置](https://docs.nginx.com/nginx/admin-guide/basic-functionality/runtime-control/)
+ [配置](https://docs.nginx.com/nginx/admin-guide/basic-functionality/managing-configuration-files/)

我们建议运行Budibase是一种“多应用一服务器”的方法，可以将许多不同的应用部署到同一个自托管Budibase平台上。下面我们将详细介绍一个基本方法，用于启动Budibase并在反向代理之后运行，然后您可以更新该方法以将其添加到现有配置中或添加SSL信息。

下面是一个基本的反向代理配置，它只需将来自域/子域/路径的所有请求传递到Budibase平台。
```
# Budibase
set $budibase_host      <BUDIBASE_ADDRESS>;
set $budibase_port      10000;

server {
    listen 80;
    server_name yourdomain.com;
    
    location / {
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header Host $http_host;
        proxy_http_version 1.1;
        proxy_pass http://$budibase_host:$budibase_port;
    }
    
    client_max_body_size 50m;
}
```
在这个配置中，所有需要更新的是Budibase平台所在的位置。如果它托管在同一台计算机上，则只需替换<BUDIBASE_ADDRESS>具有本地服务器 .

有几种方法可以扩展/更改：

1. 这只是一个基本版本，将代理任何请求到您的域/子域到Budibase平台，您可以更改服务器名称以满足你的需要
2. 在哪里？位置/如果你想让你的Budibase应用服务器运行在特定路径上，而不是整个域或子域，你可以将斜杠改为路径名。
3. 最后，如果您想使用HTTPS/TLS，您可以将此基本配置配置配置为将流量重新定向到HTTPS，然后添加证书，或者可以使用 certbot自动为您的域自动生成和管理证书！