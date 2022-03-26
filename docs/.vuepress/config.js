module.exports = {
	themeConfig: {
		title: 'Budibase中文文档',
		description: 'Budibase中文文档',
		head: [
			['link', {
				rel: 'icon',
				href: 'https://d33wubrfki0l68.cloudfront.net/aac32159d7207b5085e74a7ef67afbb7027786c5/2b1fd/img/logo/bb-emblem.svg'
			}]
		],
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
				path:'/install/',
				children: ['/install/cli', '/install/docker', '/install/k8s', '/install/do'],
				collapsable: false
			},
			{
				title: '快速入门',
				path:'/quickstart/',
				children: ['/quickstart/budibasedb', '/quickstart/postgreSQL'],
				collapsable: false
			},
			{
				title: '数据源',
				path:'/data/',
				children: ['/data/introduction'],
				collapsable: false
			}
		],
		lastUpdated: 'Last Updated',
		displayAllHeaders: true,
		repo: 'budibase/budibase',
		editLinkText: '帮助我们改善此页面！'
	}
}
