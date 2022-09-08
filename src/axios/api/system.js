import myAxios from '../axios'
import Qs from 'qs'
const devServer = {
  projectApiSystem: '/projectApi/juggle-systemplat',
}

function userBase(type, paramsList) {
  return myAxios(
    {
      url: `${devServer.projectApiSystem}/api/system/user/${type}.json`,
      method: 'post',
      data: Qs.stringify(paramsList, { indices: false }),
    },
    {
      repeat_request_cancel: true,
      loading: false,
      error_message_show: true,
    }
  )
}

export { userBase }
