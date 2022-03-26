# PostgreSQL MySQL
如果您已经有一个数据库正在运行，或者希望单独管理数据库，那么从PostgreSQL或MySQL开始是一个很好的开始方式。只需单击几下鼠标，就可以通过Budibase界面添加外部数据库。

### 添加远程数据源
当您想添加一个新的远程数据源时，您需要转到BudibaseUI中的数据页，按左上角的+

![](https://files.readme.io/4e33800-add-data-source.png)

您可以选择PostgreSQL或MySQL。如果你想连接一个MariaDB数据库，你必须选择MySQL，因为它们是兼容的。

选择数据源后，系统将提示您配置连接。

![](https://files.readme.io/1b13908-mysql-postgresql.png)
::: tip
白名单IP<br>
如果您正在使用云托管解决方案，确保你已经Budibase IP加入白名单
:::

### 获取表
默认情况下，添加新数据源时，将在确认连接后获取表。但是，在配置新数据源的对话框中，可以跳过获取表。

在添加源之后的任何阶段也可以触发获取表。在添加到Budibase的连接后添加、删除或更新新表时，这尤其有用。

要获取表，请转到侧栏中添加的数据源，然后滚动查看数据源的配置。
![](https://files.readme.io/c960c81-fetch-tables.png)

### 建立关系
为了帮助Budibase理解您的数据库，您需要在不同的表之间创建关系。这可以从数据源的配置屏幕完成。要到达那里，请单击侧栏中的数据源并向下滚动，直到找到Relationships .

![](https://files.readme.io/0aec24a-define-relationship.png)

当您单击define relationship按钮时，您将得到一个表单，您可以在其中指定关系。

### 一对一/一对多
定义一对一或一对多关系时，需要选择“One”关系类型。然后必须选择要引用的主索引的表和列。之后，您需要选择引用这个主ID的表和列。例如，如果有一个pets表和一个owner表，那么首先必须选择owner主索引，然后选择pets“owner”列。

![](https://files.readme.io/9d4fd4b-one-one-relationship.png)

设置好这个之后owner_id列将添加到宠物表，以及pets要添加到主人表。这些列将只在内部添加，这意味着此列不会添加到远程数据源。这是为了在不干扰远程来源的情况下正确地跟踪关系。在视觉上，当您导航到这两个表时，您将看到关系显示为块，引用另一个表中的相关行。
![](https://files.readme.io/7fc4ba4-pets-owner.png)
![](https://files.readme.io/9d53fcb-owner-pets.png)

### 多对多
对于多对多关系，必须创建一个联接表。将遵循上述步骤，但在配置过程中需要选择“through”。这个through指需要创建的联接表。

如果每个宠物都有多个主人，这可能会很有用，就像上面的例子一样。

### 自定义查询
Budibase支持编写自定义查询的功能。如果您不想只获取单个表（行），那么这些查询非常有用。

编写这些查询非常简单。转到数据源，向下滚动，直到找到查询部分。单击Add Query按钮，该按钮将引导您进入配置查询的窗体。

一个例子是查询来自特定所有者的所有宠物名字。对于本演示，我们使用自定义绑定在查询中插入ownerID。

![](https://files.readme.io/4a73ef1-query-owners-pets.png)
