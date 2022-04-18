import { TitledForm, Input } from './index';

const Login = ({ login }) => {

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const password = formElements.password.value;

    await login({ username, password });
  };

  return (
    <TitledForm
      title="Welcome back!"
      submitFunction={handleLogin}
      buttonText="Login"
      titleMargin={36}
    >
      <Input
        label="Username"
        type="text"
      />
      <Input
        label="Password"
        type="password"
        adornmentText="Forgot?"
        marginBottom={57}
      />
    </TitledForm>
  );
};

export default Login;
