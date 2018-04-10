import Mock from 'mockjs'
import { param2Obj } from '@/utils'
import { genderTypeOptions, ethnicityTypeOptions, dietaryOptions, importanceOptions, jobTitleOptions, nationalityOptions } from '@/utils/options'

const List = []
const count = 100

// const ethnicities = ['caucasian', 'chinese', 'indian', 'colored', 'black', 'other']

// todo firstName, lastName, title, gender, added, joined, member of, attended, primary email, emails, position, affiliations, occupation, diet, nationality, ethnicity, birth date, age, cell phone, phone, locations, importance, image, facebook, linkedin, notes
// jobDescriptor: faker.name.jobDescriptor(),
// jobArea: faker.name.jobArea(),
// jobType: faker.name.jobType(),
// diet: faker.name.lastName(),
// nationality: faker.name.lastName(),
// ethnicity: randpick(ethnicities),
// birthDate: faker.date.past(),
// age: faker.name.lastName(),
// cell: faker.phone.phoneNumber(),
// phone: faker.phone.phoneNumber(),
// importance: faker.name.lastName(),
// image: faker.image.avatar(),
// notes: faker.lorem.sentance()

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    timestamp: +Mock.Random.date('T'),
    firstName: '@first',
    lastName: '@last',
    email: '@email',
    'gender|1': genderTypeOptions,
    'ethnicity|1': ethnicityTypeOptions,
    'jobTitle|1': jobTitleOptions,
    jobDescriptor: '',
    nationality: nationalityOptions,
    jobArea: 'South Africa',
    age: +Mock.Random.integer(20, 80),
    image: "@image('50x50')",
    'diet|1': dietaryOptions,
    notes: '@title(5, 10)',
    'importance|1': importanceOptions,
    'status|1': ['published', 'draft', 'deleted'],
    display_time: '@datetime'
  }))
}

export default {
  getList: config => {
    const { importance, type, title, ethnicity, diet, jobTitle, gender, page = 1, limit = 20, sort } = param2Obj(config.url)

    let mockList = List.filter(item => {
      if (importance && item.importance !== +importance) return false
      if (type && item.type !== type) return false
      if (gender && item.gender.key !== gender) return false
      if (ethnicity && item.ethnicity.key !== ethnicity) return false
      if (diet && item.diet.key !== diet) return false
      if (jobTitle && item.jobTitle.key !== jobTitle) return false
      if (title && item.title.indexOf(title) < 0) return false
      return true
    })

    if (sort === '-id') {
      mockList = mockList.reverse()
    }

    const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

    return {
      total: mockList.length,
      items: pageList
    }
  },
  getPerson: () => ({
    id: 120000000001,
    author: { key: 'mockPan' },
    source_name: '原创作者',
    category_item: [{ key: 'global', name: '全球' }],
    comment_disabled: true,
    content: '<p>我是测试数据我是测试数据</p><p><img class="wscnph" src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943" data-wscntype="image" data-wscnh="300" data-wscnw="400" data-mce-src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>"',
    content_short: '我是测试数据',
    display_time: +new Date(),
    email: 'bradkyleduncan@gmail.com',
    image_uri: 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3',
    platforms: ['a-platform'],
    source_uri: 'https://github.com/PanJiaChen/vue-element-admin',
    status: 'published',
    tags: [],
    title: 'vue-element-admin'
  }),
  createPerson: () => ({
    data: 'success'
  }),
  updatePerson: () => ({
    data: 'success'
  })
}
