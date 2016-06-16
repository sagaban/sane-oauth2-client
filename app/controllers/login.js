import Ember from 'ember';

const { inject } = Ember;

export default Ember.Controller.extend({

  session: inject.service('session'),
  flashMessages: inject.service(),

  email: '',
  password: '',

  actions: {
    authenticate() {
      let data = this.getProperties('email', 'password');
      let flashMessages =   this.get('flashMessages');
      let session = this.get('session');
      
      session
        .authenticate('authenticator:oauth2', data.email, data.password, 'User')
        .then(() => {
          flashMessages.success('You are loged in');

          // console.log(this.get('session').data.authenticated.token);
          // TODO The data is not being saved properlly in the session service
          console.log(session);
        })
        .catch((error) => {
          let errorMsg = error ? error.message : "Login error";
          flashMessages.danger( errorMsg );

          console.error("Error:", errorMsg);
      });
    },
  },
});
