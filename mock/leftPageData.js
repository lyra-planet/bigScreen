// 左侧界面数据
module.exports = {
  'GET /api/leftPageData': {
    accessFrequency: 1500,
    peakFlow: 300,
    trafficSitua: {
      timeList: ['9:00', '12:00', '15:00', '18:00', '21:00', '00:00'],
      outData: [502.84, 205.97, 332.79, 281.55, 398.35, 214.02],
      inData: [281.55, 398.35, 214.02, 179.55, 289.57, 356.14],
    },
    userSitua: {
      header: ['用户', '时间', '目的'],
      data: [
        ['用户1', '2024-03-21 12:00', '北京'],
        ['用户2', '2024-02-22 12:00', '上海'],
        ['用户3', '2024-01-23 12:00', '甘肃'],
        ['用户4', '2024-04-24 12:00', '湖南'],
        ['用户5', '2024-03-21 12:00', '天津'],
        ['用户6', '2024-03-24 12:00', '北京'],
        ['用户7', '2024-03-21 12:00', '四川'],
        ['用户8', '2024-02-25 12:00', '天津'],
        ['用户9', '2024-02-26 12:00', '湖北'],
        ['用户11', '2024-04-25 12:00', '甘肃'],
        ['用户12', '2024-01-26 12:00', '云南'],
        ['用户13', '2024-04-27 12:00', '北京'],
      ],
    },
  },
};
