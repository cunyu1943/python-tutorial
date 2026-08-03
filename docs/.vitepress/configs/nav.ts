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

    {
        text: '📋 开源项目',
        items: [
            { text: '🅱️ 博客', link: 'https://github.com/cunyu1943/blog' },
            { text: '☕️ JavaPark', link: 'https://github.com/cunyu1943/JavaPark' },
            { text: '📰 好物周刊', link: 'https://github.com/cunyu1943/weekly' },
            { text: '💾 MySQL 学习指南', link: 'https://github.com/cunyu1943/mysql-tutorial' },
            { text: '🐍 Python 学习指南', link: 'https://github.com/cunyu1943/python-tutorial' },
            { text: '🖥️ 计算机学习指南', link: 'https://github.com/cunyu1943/cs-guide' },
            { text: '🍃 Spring Boot Demos', link: 'https://github.com/cunyu1943/spring-boot-demos' },

        ]
    },

]