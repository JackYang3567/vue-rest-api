const DOMIN = '127.0.0.1' // ip地址或域名
const PREFIX = 'api/v2'  // 前缀
const PORT = '8484'            // '7001', // 端口；
const __PORT = PORT != '80'? `:${PORT}`:``
const SOCKET_PORT = '2120'            // '2120', //socket 端口；

const config = {
  /**
   * built-in config
   * @type {Vue config}
   **/
  SOCKET: `//${DOMIN}:${SOCKET_PORT}`,
  AIP: `//${DOMIN}${__PORT}`,
  AIP_PREFIX: `//${DOMIN}${__PORT}/${PREFIX}`,
  SIGNIN_CAPTCHA: `//${DOMIN}${__PORT}/handler/session.php?type=signin`,
  SIGNUP_CAPTCHA: `//${DOMIN}${__PORT}/handler/session.php?type=signup`,
  FORGOT_CAPTCHA: `//${DOMIN}${__PORT}/handler/session.php?type=forgot`,
  FREE_CAPTCHA: `//${DOMIN}${__PORT}/handler/session.php?type=free`
}

module.exports=config
  