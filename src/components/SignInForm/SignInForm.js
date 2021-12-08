import './styles.css'
import { Input } from "../Input"
import { useForm } from "react-hook-form"
import { emailPattern } from "../../utils/regex"

export const SignInForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    alert(JSON.stringify(data, null, 2));
  }
  return <form className='sign-in-form' onSubmit={handleSubmit(onSubmit)}>
    <h1>Welcome friend!</h1>
    <Input label="User e-mail"
           placeholder="Enter e-mail"
           color={errors.email ? 'red' : null}
           aria-invalid={errors.email ? "true" : "false"}
           {...register("email",  { pattern: emailPattern })}  />
    <Input label="Password"
           placeholder="Enter password"
           type="password"
           color={errors.password ? 'red' : null}
           aria-invalid={errors.password ? "true" : "false"}
           {...register("password",  { required: true })}  />
    <button type="submit" className='button'>Sign in</button>
  </form>
}
