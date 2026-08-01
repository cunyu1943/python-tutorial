import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {

    '/': [
        {
            text: '学习指引',
            link: '/guide',
        },
        {
            text: '基础教程',
            collapsed: true,
            items: [
                { text: 'Python 简介', link: '/basic/20210331-intro', },
                { text: '玩转 PyCharm', link: '/basic/20210401-pycharm', },
                { text: '语言元素', link: '/basic/20210402-language-element', },
                { text: '控制流程', link: '/basic/20210403-control-flow', },
            ],
        },
        {
            text: '基础实例',
            collapsed: true,
            items: [
                { text: '编程实例（1-5）', link: '/instance/20181003-1-5', },
                { text: '编程实例（6-10）', link: '/instance/20181004-6-10', },
                { text: '编程实例（11-15）', link: '/instance/20181005-11-15', },
                { text: '编程实例（16-20）', link: '/instance/20181006-16-20', },
                { text: '编程实例（21-25）', link: '/instance/20181007-21-25', },
                { text: '编程实例（26-30）', link: '/instance/20181008-26-30', },
                { text: '编程实例（31-35）', link: '/instance/20181009-31-35', },
                { text: '编程实例（36-40）', link: '/instance/20181010-36-40', },
                { text: '编程实例（41-45）', link: '/instance/20181011-41-45', },
                { text: '编程实例（46-50）', link: '/instance/20181012-46-50', },
                { text: '编程实例（51-55）', link: '/instance/20181013-51-55', },
            ],
        },
        {
            text: '实战训练',
            collapsed: true,
            items: [
                { text: 'Turtle 图形库', link: '/in-action/20180429-turtle', },
                { text: '绘制数码管', link: '/in-action/20180501-digital-time', },
                { text: '购物车', link: '/in-action/20220420-shopping', },
            ],
        },
        {
            text: 'Bug 解决',
            collapsed: true,
            items: [
                { text: 'Python 3.7 安装 polyglot', link: '/bug/20220421-polyglot-install', },
            ],
        },

    ],
}