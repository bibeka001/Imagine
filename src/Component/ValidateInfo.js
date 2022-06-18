export default function ValidateInfo(values) {
    let errors = { username: "", email: "", password: "", password1: "" };
    if (!values.username.trim()) {
      errors.username = "Username required";
    }
    //Email
    if (!values.email) {
      errors.email = "Email required";
    } else if ('!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$i'.test(values.email)) {
      errors.email = "Email address is invalid";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password needs to be 6 characters or more";
    }
    if (!values.password1) {
      errors.password1 = "Password is required";
    } else if (values.password1 !== values.password) {
      errors.password1 = "Password1  do not match";
    }
    return errors;
  }
  