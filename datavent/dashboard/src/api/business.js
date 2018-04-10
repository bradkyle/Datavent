import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/business/list',
    method: 'get',
    params: query
  })
}

export function fetchBusiness() {
  return request({
    url: '/business/detail',
    method: 'get'
  })
}

export function createBusiness(data) {
  return request({
    url: '/business/create',
    method: 'post',
    data
  })
}

export function updateBusiness(data) {
  return request({
    url: '/business/update',
    method: 'post',
    data
  })
}
