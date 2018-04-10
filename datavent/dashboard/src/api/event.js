import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/event/list',
    method: 'get',
    params: query
  })
}

export function fetchEvent() {
  return request({
    url: '/event/detail',
    method: 'get'
  })
}

export function createEvent(data) {
  return request({
    url: '/event/create',
    method: 'post',
    data
  })
}

export function updateEvent(data) {
  return request({
    url: '/event/update',
    method: 'post',
    data
  })
}
