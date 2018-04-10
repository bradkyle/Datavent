import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/campaign/list',
    method: 'get',
    params: query
  })
}

export function fetchCampaign() {
  return request({
    url: '/campaign/detail',
    method: 'get'
  })
}

export function createCampaign(data) {
  return request({
    url: '/campaign/create',
    method: 'post',
    data
  })
}

export function sendCampaign(data) {
  return request({
    url: '/campaign/send',
    method: 'post',
    data
  })
}

export function updateCampaign(data) {
  return request({
    url: '/campaign/update',
    method: 'post',
    data
  })
}
