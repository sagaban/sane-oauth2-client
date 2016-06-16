import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('users-list');
  this.route('register');
  this.route('messages');
});

export default Router;
