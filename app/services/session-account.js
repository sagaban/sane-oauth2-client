import Ember from 'ember';

const { inject: { service }, isEmpty, RSVP } = Ember;

export default Ember.Service.extend({
  session: service('session'),
  store: service(),

  loadCurrentUser() {
    return new RSVP.Promise((resolve, reject) => {
      const accountId = this.get('session.data.authenticated.account_id');
      if (!isEmpty(accountId)) {
        return this.get('store').find('user', accountId).then((account) => {
          this.set('account', account);
          resolve();
        }, error => {
          console.error(error);
          reject(error);
        });
      } else {
        resolve();
      }
    });
  },
});
