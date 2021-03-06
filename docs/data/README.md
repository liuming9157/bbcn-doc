# 介绍
Budibase UI 中的数据部分是您添加和管理数据的地方。Budibase 应用程序依赖于数据，强烈建议在设计 Web 应用程序之前创建数据结构。您的数据结构将涉及表、列、行和视图 - 这些是以结构化方式保存和呈现数据的构建块。

预定义数据结构对构建 UI 也有很大帮助，因为 UI 可以根据数据结构以及任何逻辑、过滤和排序自动生成。

在 Budibase 中，我们有一个内置数据源和几个外部数据源。当使用 Budibase 的自托管实例时，外部数据源仍然可以存在于同一设备上，只是不在 Budibase 容器中。

### 数据入门
默认情况下，每个 App 安装都会以Budibase DB作为数据源。该数据库包含一个名为User的特殊表。该表不可删除，因为您的应用程序的功能取决于它。任何其他 BudibaseDB 表也将添加到同一源中。

### 添加新数据源
您可以轻松地将新数据源添加到您正在设置的任何应用程序中。您可以直接从 Budibase UI 连接到大量可用的外部数据源。当您在数据选项卡上的应用程序中时，您可以通过单击屏幕左上角的+图标来添加新数据源，如下图所示。

![通过单击此屏幕上的 + 图标添加数据源](https://files.readme.io/93609e7-add-data-source.png)  


单击“添加数据源”按钮后，您将看到一个显示可用数据源的模式。选择数据源，您将看到一个配置屏幕以连接到您的远程数据源。

![选择数据源](https://files.readme.io/c931e89-data-sources.png)


您可以轻松添加任意数量的数据源。要了解有关每个特定数据源的更多信息，请查看菜单中的相关文档页面。