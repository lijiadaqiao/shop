// 使用mockjs提供mock数据接口
import Mock from 'mockjs'
import data from './data.json'


//返回goods接口
Mock.mock('/ShopGoods', { code: 0, data: data.goods })
    //返回ratings接口
Mock.mock('/ShopRatings', { code: 0, data: data.ratings })
    //返回info接口
Mock.mock('/ShopInfo', { code: 0, data: data.info })

//不需要向外暴露，只需要执行一次