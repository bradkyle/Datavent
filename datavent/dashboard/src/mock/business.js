import Mock from 'mockjs'
import { param2Obj } from '@/utils'
import { businessTypeOptions, importanceOptions, businessStatusOptions } from '@/utils/options'
import { fetchPerson } from '@/api/person'

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

const person = fetchPerson

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    timestamp: +Mock.Random.date('T'),
    name: '@first',
    'businessType|1': businessTypeOptions,
    location: '',
    'importance|1': importanceOptions,
    'status|1': businessStatusOptions,
    notes: '@title(5, 10)',
    people: person
  }))
}

export default {
  getList: config => {
    const { importance, name, businessType, page = 1, limit = 20, sort } = param2Obj(config.url)

    let mockList = List.filter(item => {
      if (importance && item.importance !== +importance) return false
      if (businessType && item.businessType.key !== businessType) return false
      if (name && item.name.indexOf(name) < 0) return false
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
  getBusiness: () => ({
    id: 120000000001,
    name: 'Bobbs burgers',
    businessType: 'sp',
    status: 'published'
  }),
  createBusiness: () => ({
    data: 'success'
  }),
  updateBusiness: () => ({
    data: 'success'
  })
}
