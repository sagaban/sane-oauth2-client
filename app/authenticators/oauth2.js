import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';

export default OAuth2PasswordGrant.extend({
  serverTokenEndpoint: 'http://localhost:1337/api/v1/oauth/token',
  makeRequest(url, data) {
    data.client_id = '31IS7OF1PA';
    data.client_secret = 'rDzlw1bsAk9P0EZhNmktSXecYxlopb';
    return this._super(...arguments);
  }
});
