# 快速入门：PostgreSQL
本教程将花费 5 到 10 分钟，最后，您将成功构建完整的 CRUD 应用程序。
本指南将向您展示如何构建“车辆维护日志”应用程序。对于本指南，我们将使用 PostgreSQL。在Budibase里，无论您使用什么类型的数据库，该过程都是相同的。

在本教程中，我们将创建一个车辆维护日志应用程序，其中包括：

+ 车辆表，用于查看车辆
+ 服务日志表，用于记录车辆的服务历史  
我们将使用以下表结构：


### 入门
1. 运行以下脚本
SQL
```
CREATE TABLE public."Vehicles" (
  "id" SERIAL PRIMARY KEY,
  "Registration" TEXT NULL,
  "Make" TEXT NULL,
  "Model" TEXT NULL,
  "Colour" TEXT NULL,
  "Year" INT NULL);
  

CREATE TABLE public."ServiceLog" (
  "id" SERIAL PRIMARY KEY,
  "Description" TEXT NULL,
  "VehicleId" INT NULL,
  "ServiceDate" TIMESTAMP NULL,
  "Category" TEXT NULL,
  "Mileage" INT NULL);


INSERT INTO public."Vehicles"("Registration", "Make", "Model", "Colour", "Year")
VALUES ('FAZ 9837','Volkswagen','Polo','White',2002);
INSERT INTO public."Vehicles"("Registration", "Make", "Model", "Colour", "Year")
VALUES ('JHI 8827','BMW','M3','Black',2013);
INSERT INTO public."Vehicles"("Registration", "Make", "Model", "Colour", "Year")
VALUES ('D903PI','Volvo','XC40','Grey',2014);
INSERT INTO public."Vehicles"("Registration", "Make", "Model", "Colour", "Year")
VALUES ('YFI002','Volkswagen','Golf','Dark Blue',2018);
INSERT INTO public."Vehicles"("Registration", "Make", "Model", "Colour", "Year")
VALUES ('HGT5677','Skoda','Octavia','Graphite',2009);
INSERT INTO public."Vehicles"("Registration", "Make", "Model", "Colour", "Year")
VALUES ('PPF9276','Skoda','Octavia','Graphite',2021);
INSERT INTO public."Vehicles"("Registration", "Make", "Model", "Colour", "Year")
VALUES ('J893FT','Toyota','Corolla','Red',2015);
INSERT INTO public."Vehicles"("Registration", "Make", "Model", "Colour", "Year")
VALUES ('MJK776','Honda','HR-V','Silver',2015);


INSERT INTO public."ServiceLog"("Description", "VehicleId", "ServiceDate", "Category", "Mileage")
VALUES ('Change front brakes', 1, '2021-05-04', 'Brakes', 20667);
INSERT INTO public."ServiceLog"("Description", "VehicleId", "ServiceDate", "Category", "Mileage")
VALUES ('Tyres - full set', 1, '2021-05-04', 'Tyres', 20667);
INSERT INTO public."ServiceLog"("Description", "VehicleId", "ServiceDate", "Category", "Mileage")
VALUES ('Engine tune up', 2, '2021-07-14', 'Engine', 50889);
INSERT INTO public."ServiceLog"("Description", "VehicleId", "ServiceDate", "Category", "Mileage")
VALUES ('Replace transmission', 3, '2021-09-26', 'Transmission', 98002);
```
2. 在https://account.budibase.app/register创建一个新帐户（仅需要几秒钟）
3. 登录后，创建一个新应用程序并将其命名为：车辆维护日志
### 连接到您的 SQL 表
4. 当被问到你想使用什么数据库时，选择 PostgreSQL
5. 完成配置以连接到您的 PostgreSQL 数据库
::: tip
请注意，如果您要连接到 上的数据库，则您的主机应设置为，或者如果在 Linux 上运行。localhosthost.docker.internal172.17.0.1
:::
6. 添加连接详细信息后，单击Fetch tables from database。这将读取数据库中的表。

### 从 SQL 表创建屏幕
一旦 Budibase 知道您的 SQL 表，它就可以自动生成屏幕（用户界面），允许列出、创建、编辑从表中删除记录。当然，这些生成的屏幕是完全可定制的——但 Budibase 为您提供了一个巨大的领先优势。

7. 转到“设计”部分。
8. 创建一个新屏幕，然后从自动生成的屏幕列表中选择Vehicle。
### 使用 SQL 表之间的关系
Budibase 允许您声明表之间的关系。我们将在 Vehicles 和 Deals 之间建立一对多的关系。

::: tip
Budibase 不会修改您的表格。我们只是告诉 Budibase 您现有的数据库结构。
:::
要定义关系：

9.选择您的 SQL 数据源
10. 单击定义关系，然后：
+ 将关系类型设置为“One to One”。
+ from（“One”）表是“Vehicles”。
+ to（“Many”）表是“Service Logs”。
+ “From Table Column”是您的关系在您的 Vehicles 表中的命名方式。我们称之为服务日志。
+ “到表列”是您的关系在服务日志表中的命名方式。我们将其称为“车辆”
现在创建了关系，默认情况下，每个表的第一列将用作显示列。
显示列告诉 Budibase 如何从服务日志表中描述车辆，反之亦然。这等效于列别名：
```
SELECT ServiceLogs.*,  Registration as Vehicle 
FROM ServiceLogs 
INNER JOIN Vehicle on ServiceLog.VehicleId = Vehicle.id
```
更改显示列

11. 选择服务日志表
12. 单击“类别”列旁边的“编辑”图标
13. 切换“用作表格显示列”
14. 点击“保存列”
现在 Vehicles 表应该显示 Service Log 类别，而不是描述。


### 添加服务日志 CRUD 屏幕
15. 转到“设计”部分。
16. 创建一个新屏幕，然后从自动生成的屏幕列表中选择Service Logs。
17. 单击预览按钮并查看您的新车辆维护日志应用程序  
成功  
您现在拥有一个完全正常工作的车辆维护日志应用程序。
