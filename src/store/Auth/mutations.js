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
