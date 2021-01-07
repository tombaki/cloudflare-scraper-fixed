const USER_AGENT_MAC =
  'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.121 Safari/537.36 Vivaldi/2.8.1664.44';
const USER_AGENT_WINDOWS =
  'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.121 Safari/537.36 Vivaldi/2.8.1664.44';
const USER_AGENT_LINUX =
  'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.121 Safari/537.36 Vivaldi/2.8.1664.44';

function getUserAgent() {
  const { platform } = process;
  if (platform === 'darwin') {
    return USER_AGENT_MAC;
  }
  if (platform === 'win32') {
    return USER_AGENT_WINDOWS;
  }
  return USER_AGENT_LINUX;
}

function extract(string, regexp, errorMessage) {
  const match = string.match(regexp);
  if (match) {
    return match[1];
  }
  if (errorMessage) {
    throw new Error(errorMessage);
  }
}

function isCloudflareJSChallenge(body) {
  return body.includes('cf-browser-verification');
}

function isCloudflareCaptchaChallenge(body) {
  return body.includes('cf_captcha_kind');
}

module.exports = { extract, isCloudflareJSChallenge, isCloudflareCaptchaChallenge, getUserAgent };
