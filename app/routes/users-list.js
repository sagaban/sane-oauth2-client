import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import Ember from 'ember';

export default Ember.Route.extend(
  AuthenticatedRouteMixin, //Only authenticated users
  {
  model() {
    return this.store.findAll('user');
  }
});
