# Budibase CLI安装
### 下载Budibase CLI
Budibase CLI是初始化、管理和更新Budibase安装的方式。

如果安装了NodeJS，只需运行以下命令即可安装Budibase CLI：

```
$ npm i -g @budibase/cli
```
或者，您也可以在此处下载适用于您的操作系统的Budibase CLI：

+ [Windows](https://github.com/Budibase/budibase/releases/latest/download/cli-win.exe)
+ [Mac](https://github.com/Budibase/budibase/releases/latest/download/cli-macos)
+ [Linux](https://github.com/Budibase/budibase/releases/latest/download/cli-linux)  

如果您确实从上述链接下载，则步骤与从NPM下载CLI略有不同。下载CLI后，您必须使其可执行。以cli linux为例：

```
# optional - if you have already downloaded this just navigate to the file
wget https://github.com/Budibase/budibase/releases/latest/download/cli-linux

chmod +x cli-linux

# optional - rename to budi
mv cli-linux budi
```
在遵循本指南的其余部分时，当您看到正在使用的budi命令时，您需要将其替换为：

```
./budi
```
### 运行Budibase
安装CLI后，导航到要存储Budibase安装文件的目录，然后运行：
```

budi hosting --init # or ./cli-linux hosting --init
```
```

? This will create multiple files in the current directory, should continue? Yes

# Feel free to configure your port
? Please enter the port on which you want your installation to run:  10000

The configuration has been written successfully - please check the .env file for more details.
```
::: warning
如果你有一个基于ARM的CPU，你将不得不对你的docker-compose.yaml做一个小小的更新,使用平台amd64更新compose配置的couchdb服务部分
:::

```
YAML

couchdb-service:
    platform: linux/amd64
    ...
```
### 首次安装Budibase
现在可以使用以下命令启动Budibase服务：

```

budi hosting --start
```
::: tip
译者注：如果您没有安装docker及docker-compose,执行此步骤时会报错。所以说，cli安装方式有点鸡肋，不如直接使用docker安装。
:::
然后您将看到：

```
Starting services, this may take a moment.
Services started, please go to http://localhost:10000 for next steps.
```