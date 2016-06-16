import Ember from 'ember';

const { inject } = Ember;

export default Ember.Controller.extend({

  flashMessages: inject.service(),

  session: inject.service('session'),

  actions: {
    registerUser() {
      const user = this.get('model');
      const flashMessages = this.get('flashMessages');
      user.save()
      .then((user)=> {
        // I could logind the user after it is created
        // this.get('session')
        // .authenticate('authenticator:oauth2',
        //   newUser.get('email'), newUser.get('password'))
        //   flashMessages.success('User created');
        //   this.transitionTo('index');
        // .catch((reason) => {
        //   flashMessages.danger(reason.error ||reason);
        //   console.error(JSON.stringify(reason.error ||reason));
        // });
        let message = this.store.createRecord('message');
        message.set('text', "This user was created succesfully");
        message.set('owner', user);
        message.save();
        flashMessages.success('User created');
        this.transitionTo('index');
      })
      .catch((error) => {
        flashMessages.danger(error.responseJSON.message?error.responseJSON.message:error);
        console.error(JSON.stringify(error.responseJSON?error.responseJSON:error));
      });
    },
  },
});
