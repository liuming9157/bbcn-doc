# 触发器Trigger
每个自动化都必须有一个触发步骤，这本质上是一个观察者 - 等待满足特定条件，此时流程将启动。

![](https://files.readme.io/6d33e65-CleanShot_2022-03-08_at_15.02.022x.png)

目前，有六种方法可以触发自动化：

1. 在表中创建新记录/行时
2. 在表中删除新记录/行时
3. 当更新表中的新记录/行时
4. JSON Webhook 形式的外部触发器
5. 当应用程序中发生特定操作时
6. CRON 触发器（每天早上 6 点触发此自动化）
7. 
触发器是 Budibase 系统内部的，因此不能轻易更改 - 如果您有一个好的触发器的想法，请[告诉我们](https://github.com/Budibase/budibase/discussions)！

也可以使用外部 Webhook 创建自定义触发器 - 创建一个外部应用程序，将在您需要的条件下触发，并以您的 Budibase Webhook 为目标！