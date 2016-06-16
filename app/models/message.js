import DS from 'ember-data';

const { attr, belongsTo } = DS;

export default DS.Model.extend({
  text: attr('string'),
  owner: belongsTo('user'),
});
