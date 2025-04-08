// Common Firebase Auth error codes and their user-friendly messages
export const AUTH_ERROR_MESSAGES = {
  'auth/invalid-credential': 'Incorrect credentials. Please try again!',
  'auth/user-not-found': 'We couldn\'t find your account. Want to create one?',
  'auth/wrong-password': 'Oops! That password doesn\'t match. Try again!',
  'auth/email-already-in-use': 'Looks like you already have an account. Try logging in!',
  'auth/weak-password': 'Make your password stronger - at least 6 characters!',
  'auth/invalid-email': 'That email doesn\'t look quite right. Check and try again!',
  'auth/network-request-failed': 'Having trouble connecting. Check your internet!',
  'auth/popup-closed-by-user': 'Login window closed. Want to try again?',
  'auth/operation-not-allowed': 'This login method isn\'t available right now',
  'auth/account-exists-with-different-credential': 'Try logging in with a different method!',
  'default': 'Something went wrong. Please try again!'
}

export function getAuthErrorMessage(error) {
  return AUTH_ERROR_MESSAGES[error.code] || AUTH_ERROR_MESSAGES.default
}