export default function () {
  return {
    message: "",
    authUser: {
      id: undefined,
      email: "",
      password: "",
      username: "",
      role: {
        role: "",
      },
      full_name: "",
      last_name: "",
      additional_email: "",
      currency: "",
    },
    time_left: null,
    signUp: {
      email: "",
      password: "",
      username: "",
      role: "",
      full_name: "",
      last_name: "",
      password: "",
      timezone: "",
      country: "",
      captcha_res: "",
    },
    otp: null,
    forget_password: {
      email: "",
      token: "",
      otp: null,
    },
    reset_passwords: {
      email: "",
      password: "",
      confirmed_password: "",
    },
    active_branch: null,
    forgetStep: 1,
    signUpStep: 1,
    change_email: {
      current_email: "",
      email: "",
    },
    reset_password: {
      old_password: "",
      password: "",
      password_confirmation: "",
    },
    credentials: {
      email: "",
      password: "",
    },
  };
}
