import Ember from 'ember';

const { inject } = Ember;

export default Ember.Controller.extend({

  session: inject.service('session'),
  flashMessages: inject.service(),

  email: '',
  password: '',

  actions: {
    authenticate() {
      const data = this.getProperties('email', 'password');
      const flashMessages =   this.get('flashMessages');
      this.get('session')
        .authenticate('authenticator:oauth2', data.email, data.password, 'User')
        .then(() => {
          flashMessages.success('You are loged in');

          console.log(this.get('session').data.authenticated.token);
        })
        .catch((error) => {
          let errorMsg = error.message ? error.message : error;
          errorMsg = error.responseJSON ? error.responseJSON.message : errorMsg;
          flashMessages.danger( errorMsg );

          console.error("Error:", errorMsg || "Login error");
      });
    },
  },
});
