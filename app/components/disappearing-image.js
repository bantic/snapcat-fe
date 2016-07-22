import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    Ember.run.later(() => this.fadeOut(), 3000);
  },

  fadeOut() {
    this.$().velocity({opacity: 0}, {duration: 1000});
  }
});
