import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import Ember from 'ember';

const { inject } = Ember;

export default Ember.Route.extend(
  ApplicationRouteMixin, //To handle authenticationSucceeded and invalidationSucceeded events
  {
    sessionAccount: inject.service('session-account'),

    beforeModel() {
      return this._loadCurrentUser();
    },

    sessionAuthenticated() {
      this._super(...arguments);
      this._loadCurrentUser().catch(() => this.get('session').invalidate());
    },

    _loadCurrentUser() {
      return this.get('sessionAccount').loadCurrentUser();
    }

  });
