import Mock from 'mockjs'
import loginAPI from './login'
import articleAPI from './article'
import personAPI from './person'
import businessAPI from './business'
import remoteSearchAPI from './remoteSearch'
import transactionAPI from './transaction'

// Mock.setup({
//   timeout: '350-600'
// })

// Authentication
Mock.mock(/\/login\/login/, 'post', loginAPI.loginByUsername)
Mock.mock(/\/login\/logout/, 'post', loginAPI.logout)
Mock.mock(/\/user\/info\.*/, 'get', loginAPI.getUserInfo)

// People
Mock.mock(/\/person\/list/, 'get', personAPI.getList)
Mock.mock(/\/person\/detail/, 'get', personAPI.getPerson)
Mock.mock(/\/person\/create/, 'post', personAPI.createPerson)
Mock.mock(/\/person\/update/, 'post', personAPI.updatePerson)

// Businesses
Mock.mock(/\/business\/list/, 'get', businessAPI.getList)
Mock.mock(/\/business\/detail/, 'get', businessAPI.getBusiness)
Mock.mock(/\/business\/create/, 'post', businessAPI.createBusiness)
Mock.mock(/\/business\/update/, 'post', businessAPI.updateBusiness)

// Articles
Mock.mock(/\/article\/list/, 'get', articleAPI.getList)
Mock.mock(/\/article\/detail/, 'get', articleAPI.getArticle)
Mock.mock(/\/article\/pv/, 'get', articleAPI.getPv)
Mock.mock(/\/article\/create/, 'post', articleAPI.createArticle)
Mock.mock(/\/article\/update/, 'post', articleAPI.updateArticle)

// Remote search api
Mock.mock(/\/search\/user/, 'get', remoteSearchAPI.searchUser)

// Transactions
Mock.mock(/\/transaction\/list/, 'get', transactionAPI.getList)

export default Mock
