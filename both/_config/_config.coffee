@Config =
  name: 'My App'
  title: 'Make Meteor Apps. Fast.'
  subtitle: 'A boilerplate from MeteorFactory.io'
  logo: ->
    '<b>' + @name + '</b>'
  footer: ->
    @name + ' - Copyright ' + (new Date).getFullYear()
  emails: from: 'noreply@' + Meteor.absoluteUrl()
  blog: 'http://blog.com'
  about: '/about'
  contact: '/contact'
  username: false
  homeRoute: '/'
  version: '1.0.0'
  dashboardRoute: '/dashboard'
  socialMedia:
    facebook:
      url: 'http://www.facebook.com/'
      icon: 'facebook'
    twitter:
      url: 'http://www.twitter.com/'
      icon: 'twitter'
    github:
      url: 'http://www.github.com/'
      icon: 'github'
    twitter:
      url: 'http://www.twitter.com'
      icon: 'twitter'
    pinterest:
      url: 'http://www.pinterest.com'
      icon: 'pinterest'
    piedpiper:
      url: 'http://www.piedpiper.com'
      icon: 'piedpiper'
    info:
      url: 'http://famousreader.com'
      icon: 'link'
  publicRoutes: [ 'home' ]