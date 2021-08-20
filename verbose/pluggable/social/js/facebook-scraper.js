"use strict";

/* eslint-disable yoda */

/* eslint-disable vars-on-top */
wprig.Facebook = {};

window.fbAsyncInit = function () {
  FB.init({
    appId: '302805746586608',
    xfbml: true,
    version: 'v2.1'
  });
  wprig.Facebook.getPosts();
};

(function (d, s, id) {
  var js,
      fjs = d.getElementsByTagName(s)[0];

  if (d.getElementById(id)) {
    return;
  }

  js = d.createElement(s);
  js.id = id;
  js.src = '//connect.facebook.net/en_US/sdk.js';
  fjs.parentNode.insertBefore(js, fjs);
})(document, 'script', 'facebook-jssdk');

wprig.Facebook.getPosts = function () {
  var accessToken = '302805746586608|49d46cb114bc23c7957305bcd96ec21b';
  wprig.Facebook.posts = new wprig.Facebook.Posts();
  FB.api('/UofWA/posts?limit=10&access_token=' + accessToken, function (response) {
    wprig.Facebook.posts.parse(response.data);
  });
};

wprig.Facebook.Post = Backbone.Model.extend({
  initialize: function initialize() {
    this.view = new wprig.Facebook.View({
      model: this
    });
    this.view.render();
  }
});
wprig.Facebook.View = Backbone.View.extend({
  template: _.template('<div><a href="<%= link %>"><% if (picture) { %><img src="<%= picture %>"/><% } %><p><%= text %></p></a></div>'),
  el: '#facebook',
  initialize: function initialize(args) {
    this.model = args.model;
  },
  render: function render() {
    var atts = this.model.toJSON();
    this.$el.append(this.template(atts));
    this.$el.addClass('show');
  }
});
wprig.Facebook.Posts = Backbone.Collection.extend({
  model: wprig.Facebook.Post,
  initialize: function initialize() {
    _.bindAll(this, 'parse');
  },
  parse: function parse(data) {
    var postArray = [],
        post,
        selectedNum = 0;

    for (var i = 0; i < data.length; i++) {
      post = data[i];

      if (post.hasOwnProperty('message') && selectedNum < 7) {
        var idArr = post.id.split('_');
        var picture = false;
        selectedNum++;

        if (post.type == 'photo') {
          picture = post.picture;
        }

        postArray.push({
          text: wprig.wrapHashtagsLinks(post.message),
          picture: picture,
          link: 'https://www.facebook.com/' + idArr[0] + '/posts/' + idArr[1]
        });
      }
    }

    this.add(postArray);
  }
});