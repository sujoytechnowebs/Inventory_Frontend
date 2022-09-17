export function setAuthUser(state, payload) {
  state.authUser = payload;
}

export function setTimeLeft(state, payload) {
  state.time_left = payload;
}

export function setForgetStep(state, payload) {
  state.forgetStep = payload;
}

export function setSignUpStep(state, payload) {
  state.signUpStep = payload;
}

export function passwordResetToken(state, payload) {
  state.forget_password.token = payload;
}

export function setActiveBranch(state, payload) {
  state.active_branch = payload;
}

export function resetChangeEmailForm(state, payload) {
  state.change_email = {
    current_email: "",
    email: ""
  }
}

export function resetResetPasswordForm(state, payload) {
  state.reset_password = {
    old_password: "",
    password: "",
    password_confirmation: ""
  }
}
