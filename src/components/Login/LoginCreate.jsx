import React, { useContext } from "react";
import useForm from "../../Hooks/useForm";
import { USER_POST } from "../../api";
import useFetch from "../../Hooks/useFetch";

// CONTEXTS
import { UserContext } from "../../UserContext";

// COMPONENTS
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import Error from "../Helper/Error";

const LoginCreate = () => {
  const { userLogin } = useContext(UserContext);
  const { loading, error, request } = useFetch();

  const username = useForm();
  const email = useForm("email");
  const password = useForm();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { response } = await request(url, options);
    if (response.ok) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input {...username} label="Usuário" type="text" name="username" />
        <Input {...email} label="Email" type="email" name="email" />
        <Input {...password} label="Senha" type="password" name="password" />
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  );
};

export default LoginCreate;
