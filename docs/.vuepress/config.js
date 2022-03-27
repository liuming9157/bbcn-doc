module.exports = {
	title: 'Budibase中文文档',
	description: 'Budibase中文文档',
	head: [
		['link', {
			rel: 'icon',
			href: 'https://d33wubrfki0l68.cloudfront.net/aac32159d7207b5085e74a7ef67afbb7027786c5/2b1fd/img/logo/bb-emblem.svg'
		}]
	],
	themeConfig: {

		nav: [{
				text: '文档',
				link: '/overview',
				target: '_self',
				rel: ''
			},
			{
				text: '官网',
				link: 'https://budibase.com',
				target: '_blank'
			}
		],
		sidebar: [{
				title: '概要',
				path: '/overview',
				collapsable: false,
				sidebarDepth: 1,

			},
			{
				title: '安装',
				path: '/install/',
				children: ['/install/cli', '/install/docker', '/install/k8s', '/install/do'],
				collapsable: false
			},
			{
				title: '快速入门',
				path: '/quickstart/',
				children: ['/quickstart/budibasedb', '/quickstart/postgreSQL'],
				collapsable: false
			},
			{
				title: '数据源',
				children: [{
					title: '介绍',
					path: '/data/'
				},
				{
					title: 'BudibaseDB',
					path: '/data/budibasedb/',
					children:['/data/budibasedb/text','/data/budibasedb/number','/data/budibasedb/datetime']
				},
				{
					title: 'PostgreSQL MySQL',
					path: '/data/postgresql'
				}],
				collapsable: false
			},
			{
				title: '界面设计',
				path: '/design/',
				children: ['/data/postgresql'],
				collapsable: false
			},
			{
				title: '自动化',
				path: '/automation/',
				children: ['/data/postgresql'],
				collapsable: false
			},
			{
				title: '权限管理',
				path: '/user/',
				children: ['/data/postgresql'],
				collapsable: false
			},
			{
				title: '自托管',
				path: '/self-hosting/',
				children: ['/self-hosting/hosting-setting', '/self-hosting/reverse-proxy',
					'/self-hosting/accessing-couchdb', '/self-hosting/accessing-minio'
				],
				collapsable: false
			},
			{
				title: '其他',
				path: '/others/',
				children: ['/others/budibase-architecture','/others/deployment-information'],
				collapsable: false
			},
		],
		lastUpdated: 'Last Updated',
		displayAllHeaders: true,
		repo: 'liuming9157/bbcn-doc',
		docsRepo: 'liuming9157/bbcn-doc',
		docsDir: 'docs',
		docsBranch: 'master',
		editLinks: true,
		editLinkText: '帮助我们改善此页面！'
	}
}
