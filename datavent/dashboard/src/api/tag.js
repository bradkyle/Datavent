import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/tag/list',
    method: 'get',
    params: query
  })
}

export function fetchTag() {
  return request({
    url: '/tag/detail',
    method: 'get'
  })
}

export function createTag(data) {
  return request({
    url: '/tag/create',
    method: 'post',
    data
  })
}

export function updateTag(data) {
  return request({
    url: '/tag/update',
    method: 'post',
    data
  })
}
