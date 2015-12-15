Accounts.config
	sendVerificationEmail : true

@Accounts =
  signIn: "Login"
  signInAccount: "Login with your Account"
  signin: "login"
  signOut: "Log Out"
  signUp: "Register"
  OR: "OR"
  forgotPassword: "Forgot your password?"
  emailAddress: "Email Address"
  emailResetLink: "Email Reset Link"
  dontHaveAnAccount: "Don't have an account?"
  resetYourPassword: "Reset your password"
  updateYourPassword: "Update your password"
  password: "Password"
  usernameOrEmail: "Username or email"
  email: "Email"
  ifYouAlreadyHaveAnAccount: "If you already have an account"
  signUpWithYourEmailAddress: "Register with your email address"
  username: "Username"
  optional: "Optional"
  signupCode: "Registration Code"
  clickAgree: "By clicking Register, you agree to our"
  privacyPolicy: "Privacy Policy"
  privacyPolicy: []
  terms: "Terms of Use"
  termsUrl: []
  sign: "Sign"
  configure: "Configure"
  with: "with"
  createAccount: "Create an Account"
  verificationPending: "Confirm your email address"
  verificationPendingDetails: "A confirmation email has been sent to the email address you provided. Click on the confirmation link in the email to activate your account."
  and: "and"
  "Match failed":  "Match failed"
  "User not found":  "User not found"

  error:
    minChar: "7 character minimum password."
    pwOneLetter: "Password requires 1 letter."
    pwOneDigit: "Password must have at least one digit."
    usernameRequired: "Username is required."
    emailRequired: "Email is required."
    signupCodeRequired: "Registration code is required."
    signupCodeIncorrect: "Registration code is incorrect."
    signInRequired: "You must be signed in to do that."
    usernameIsEmail: "Username cannot be an email address."

if Meteor.isClient
	Meteor.startup ->
		if Config.username
			AccountsEntry.config
				homeRoute: '/'
				dashboardRoute: '/dashboard'
				profileRoute: 'profile'
				passwordSignupFields: 'USERNAME_AND_EMAIL'
		else
			AccountsEntry.config
				homeRoute: '/'
				dashboardRoute: '/dashboard'
				profileRoute: 'profile'
				passwordSignupFields: 'EMAIL_ONLY'