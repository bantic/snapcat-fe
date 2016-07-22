import Ember from 'ember';
import getToken from 'snapcat-fe/requests/get-token';

export default Ember.Component.extend({
  isLoading: false,
  token: null,
  isViewed: false,
  isNotFound: false,

  didReceiveAttrs() {
    this.loadImage();
  },

  loadImage() {
    let token = this.get('token');

    // reset props
    this.setProperties({
      isLoading: false,
      isViewed: false,
      isNotFound: false
    });

    this.set('isLoading', true);

    getToken(token).then(token => {
      if (token.viewed) {
        this.set('isViewed', true);
      } else if (token.url) {
        this.set('url', token.url);
      }
    }).catch(() => {
      this.set('isNotFound', true);
    }).finally(() => {
      this.set('isLoading', false);
    });
  }
});
