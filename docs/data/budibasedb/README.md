# Budibase DB
该数据源是 Budibase 的原生数据源。您在此处添加的任何数据都直接存储在您的 Budibase 实例上。

### 创建表
当您在应用程序的data部分中时，您可以创建一个表。

推荐的流程是从侧边栏转到您的 Budibase 数据库实例，然后单击Create Table按钮。一个快捷方式是按下左上角的+按钮并选择 Budibase DB。

![使用此按钮创建一个新表](https://files.readme.io/2cdb03b-create-table.png)


创建新的 Budibase DB 表时，您可以选择您想要的内置（自动类型）列。每列都将根据属性自动维护、创建和更新。你可以选择跳过，然后通过“创建列”方法在创建后添加。

|名称|	描述|
|---|---|
|Auto ID|自动生成的 ID|
|Created by|创建行的用户|
|Created at|创建此行的时间|
|Updated by|最后更新行的用户|
|Updated at|最后更新行的时间|
### CSV 上传
如果您已经拥有现有数据，则可以在创建表时使用 CSV 文件将其导入。执行此操作时，它将自动识别列并为您创建它们，之后您可以指定每列的数据类型。

在下面的示例中，我导入了一个包含国家列表的 CSV，有 4 列。上传文件后，将显示以下屏幕。

![](https://files.readme.io/e3cb064-csv-data-types.png)

### 选择显示列
当您在表中设置关系时，显示列是一个重要方面。您选择作为显示列的列将是在另一个表的关系列中直观显示的列。

仅当您使用CSV文件导入数据时，才能在创建表期间选择列。要在任何其他情况下选择显示列，请通过侧边栏进入表格，将鼠标悬停在要制作显示列的列名上，然后单击铅笔图标编辑该列，您可以选择制作a column 显示列，如下图。

![](https://files.readme.io/abb36bc-edit-column.png)  
![](https://files.readme.io/6a5e268-make-display-column.png)

### 添加列
要将新列添加到现有 Budibase DB 表，请导航到要编辑的表，然后单击表顶部的Create Column按钮。这将显示一个对话框，您可以在其中配置要添加的列。
![](https://files.readme.io/f4ffcbd-add-new-column.png)

### 数据类型
在 Budibase DB 中有多种数据类型可供选择。

|Name					|Description																														|
|---					|---																															|
|Text					|Storage of (relatively) short text																								|
|Long Form Text			|Allows you to store large amounts of texts, also supports markdown																|
|Options				|Predefined list of options of which one can be selected																		|
|Multi-select			|Predefined list of options of which multiple can be selected																	|
|Number					|Storage of number																												|
|Boolean (True/False)	|Storage of true/false																											|
|Date/time				|Storage of a date with a time																									|
|Attachments			|Storage of a file. Limited to 20MB per file																					|
|Relationships			|Creates a link between this table and another table																			|
|Formula				|Allows you to set a formulated column, which will be calculated based on what you define. You can use handlebars or JavaScript	|
|JSON					|Allows you to store JSON within a row, with the option to define a schema														|
|Auto Column			|Auto columns can be added post-creation of the database by selecting data type.												|
### 列定义
下面定义的大多数列适用于所有数据类型

|Property Name				|Description																												|
|---						|---																						|
|Type						|The type of data you want to store.																						|
|Required					|Enabling this requires this field to be filled for all rows																|
|Use as table display column|Enabling this will make the newly created column the display column. This will also automatically make the field required	|
|Primary index				|Enabling this allows you to search in this field																			|
|Secondary index			|When primary index is in use, you can enable a second index for searching													|

下面定义的列仅限于某种数据类型
|Property Name					|Description																																|Data Types				|
|---						|---																						|---|
|Maximum Length					|The maximum length that can be stored in this column																						|Text					|
|Enable Rich Text Format Support|Enabling this will allow you to store markdown																								|Long Form Text			|
|Options						|The select-able options available for this column, one per line.																			|Options, Multi-select	|
|Min Value						|When set, any value entered in the database lower than this number will be rejected														|Number					|
|Max Value						|When set, any value entered in the database higher than this number will be rejected														|Number					|
|Earliest						|When set, any date before the specified date is rejected for new rows																		|Date/time				|
|Latest							|When set, any date after the specified date is rejected for new rows																		|Date/time				|
|Table							|Allow a relationship to the specified table																								|Relationship			|
|Column name in other table		|The relationship created will also be visible in the related table, this will set the new column name on the related table					|Relationship			|
|Formula						|Allows you to set a formulated column, which will be calculated based on what you define. Allows you to define handlebars and JavaScript	|Formula				|