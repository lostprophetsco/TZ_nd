import { email, helpers, required } from '@vuelidate/validators';

const passwordsMatch = (password: string, confirmPassword: string) => {
  return password !== confirmPassword;
};

const validations = {
  required(message: string = 'Поле обязательно для заполнения') {
    return helpers.withMessage(message, required);
  },
  email: helpers.withMessage('Некорректный адрес электронной почты', email),
  password: helpers.withMessage('Некорректный пароль', required),
  confirmPassword: helpers.withMessage('Пароли не совпадают', passwordsMatch),
};

export default validations;
