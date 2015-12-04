@Config =
	name: 'Famous Templates'
	title: 'A Meteor Template with both Frontend and an Admin Dashboard'
	subtitle: 'Looking this good shouldnt take much code.'
	logo: ->
		'<b>' + @name + '</b>'
	footer: ->
		@name + ' - Copyright ' + new Date().getFullYear()
	emails:
		from: 'noreply@' + Meteor.absoluteUrl()
	blog: 'http://famousreader.com'
	about: 'http://famousreader.com'
	username: false
	homeRoute: '/'
	dashboardRoute: '/dashboard'
	socialMedia:
		facebook:
			url: 'http://facebook.com'
			icon: 'facebook'
		twitter:
			url: 'http://twitter.com'
			icon: 'twitter'
		github:
			url: 'http://github.com'
			icon: 'github'
		info:
			url: 'http://meteorfactory.io'
			icon: 'link'
	publicRoutes: ['home']