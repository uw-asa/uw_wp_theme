"use strict";uw_wp_theme.Twitter={},$(document).ready(function(){uw_wp_theme.Twitter.tweets=new uw_wp_theme.Twitter.Tweets,$.ajax({url:"/wp-content/themes/uw_wp_theme/pluggable/social/twitter-proxy.php?user=uw&count=10",success:uw_wp_theme.Twitter.tweets.parse,error:uw_wp_theme.Twitter.twitter_failure})}),uw_wp_theme.Twitter.twitter_failure=function(t){console.log(t)},uw_wp_theme.Twitter.Tweet=Backbone.Model.extend({initialize:function(){this.view=new uw_wp_theme.Twitter.View({model:this}),this.view.render()}}),uw_wp_theme.Twitter.View=Backbone.View.extend({template:_.template('<div><a href="<%= link %>"><p><%= text %></p><% if (image){ %><img src="<%= image %>"/><% } %></a></div>'),el:"#twitter",initialize:function(t){this.model=t.model},render:function(){var t=this.model.toJSON();this.$el.append(this.template(t)),this.$el.addClass("show")}}),uw_wp_theme.Twitter.Tweets=Backbone.Collection.extend({model:uw_wp_theme.Twitter.Tweet,initialize:function(){_.bindAll(this,"parse")},parse:function(t){for(var e,i=[],r=0;r<t.length;r++)if((e=t[r]).hasOwnProperty("text")){var w=!1;e.entities.hasOwnProperty("media")&&"photo"==e.entities.media[0].type&&(w=e.entities.media[0].media_url),i.push({text:uw_wp_theme.wrapHashtagsLinks(e.text),image:w,link:"https://www.twitter.com/UW/status/"+e.id_str})}this.add(i)}});