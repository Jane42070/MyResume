//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    stringArray: [
      [
        {
          str: '蹇棋林',
          styleClass: 'textH1'
        },
        {
          str: '男 | 20岁（2020 年 4 月 20 日）',
          styleClass: ''
        },
        {
          str: 'Vimer',
          styleClass: ''
        },
        {
          str: '极客',
          styleClass: ''
        },
        {
          str: '全栈开发',
          styleClass: ''
        },
        {
          str: '开源爱好者',
          styleClass: ''
        },
        {
          str: '-> 重庆高校《我的青春》征文大赛优秀组织奖',
          styleClass: ''
        },
        {
          str: '-> 移通学院年度庆典视频制作人员',
          styleClass: ''
        },
        {
          str: '-> 移通学院算法比赛优秀奖',
          styleClass: ''
        },
        {
          str: '-> 天悦好书 Web 全栈项目 独立开发者',
          styleClass: ''
        },
        {
          str: '-> DWM 源码修改，补丁制作',
          styleClass: ''
        },
        {
          str: '-> Vim FileCompileRun 插件独立开发',
          styleClass: ''
        },
        {
          str: '联系方式：153-1032-7717',
          styleClass: ''
        },
        {
          str: 'Email：1377219787@qq.com',
          styleClass: ''
        },
        {
          str: 'GitHub：https://github.com/jane42070',
          styleClass: ''
        }
      ],
      [
        {
          str: '重庆邮电大学移通学院本科',
          styleClass: 'textH1'
        },
        {
          str: '2018年 10 月 ~ 2019年 10 月',
          styleClass: 'textH1'
        },
        {
          str: '-> 自学 PR, AE（视频剪辑）',
          styleClass: ''
        },
        {
          str: '-> 自学 OpenCore（电脑启动项引导驱动）',
          styleClass: ''
        },
        {
          str: '-> 自学 Linux',
          styleClass: ''
        },
        {
          str: '2019年 11月 ~ 2020年 5 月',
          styleClass: 'textH1'
        },
        {
          str: '-> 自学 Python全栈，爬虫，数据分析，机器学习',
          styleClass: ''
        },
        {
          str: '-> 自学 Markdown，Latex（文档编写排版语言）',
          styleClass: ''
        },
        {
          str: '-> 自学 MongoDB, Redis，Mysql',
          styleClass: ''
        },
        {
          str: '-> 自学 Photoshop，Sketch 矢量绘图 （UI 设计）',
          styleClass: ''
        },
        {
          str: '-> 自学单片机，焊接',
          styleClass: ''
        },
        {
          str: '2020年 7 月 ~ 2020年 9 月',
          styleClass: 'textH1'
        },
        {
          str: '-> 自学 Golang，C语言，C++',
          styleClass: ''
        },
        {
          str: '-> 自学摄影，后期',
          styleClass: ''
        },
        {
          str: '-> 自学 Shell 编程',
          styleClass: ''
        },
        {
          str: '2020年 9 月 ~ 至今',
          styleClass: 'textH1'
        },
        {
          str: '-> 学习 微信小程序开发',
          styleClass: ''
        },
        {
          str: '-> 学习 UI 设计',
          styleClass: ''
        }
      ],
      [
        {
          str: '2018年 10 月 ~ 2019 年 10 月',
          styleClass: 'textH1'
        },
        {
          str: '-> 参与年度庆典，“移通杯”辩论赛，老干部欢送酒会视频制作',
          styleClass: ''
        },
        {
          str: '2020年 9 月 ~ 至今',
          styleClass: 'textH1'
        },
        {
          str: '淘宝店铺代写项目：',
          styleClass: 'textH1'
        },
        {
          str: '-> 爬虫，Web 项目，数据分析，毕业设计，机器学习',
          styleClass: ''
        },
        {
          str: 'GitHub 独立开源项目',
          styleClass: 'textH1'
        },
        {
          str: '-> TianYue，基于 Django 框架的小说网站',
          styleClass: ''
        },
        {
          str: '-> 天天生鲜，Django 框架为后端的生鲜在线商城',
          styleClass: ''
        },
        {
          str: '-> DWM 基于源码修改，Linux 下的窗口管理器',
          styleClass: ''
        },
        {
          str: '-> SLOCK 基于源码修改，Linux 下的锁屏软件',
          styleClass: ''
        }
      ]
    ],
  },
  //事件处理函数
  bindViewTap: function () {},
  onLoad: function () {},
  tel: function (e) {
    console.log(e)
    wx.makePhoneCall({
      phoneNumber: app.globalData.phoneNumber,
    })
  }
})
