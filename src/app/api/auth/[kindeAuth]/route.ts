// import { handleAuth } from '@kinde-oss/kinde-auth-nextjs/server'
// export const GET = handleAuth({
//   authParams: {
//     scope: 'openid email profile'
//   }
// })

import { handleAuth } from '@kinde-oss/kinde-auth-nextjs/server'
export const GET = handleAuth()
