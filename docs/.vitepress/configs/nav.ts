import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
    { text: '🏠 首页', link: '/' },
    { text: ' 我的主页', link: 'https://cunyu1943.github.io' },

    {
        text: '🗺️ 学习路线',
        items: [
            { text: '1️⃣ 基础教程', link: '/basic/index.md' },
            { text: '2️⃣ 基础实例', link: '/instance/index.md' },
            { text: '3️⃣ 实战训练', link: '/in-action/index.md' },
            { text: '4️⃣ Bug 解决', link: '/bug/index.md' },
        ]
    },
    
]