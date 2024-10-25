import { email, helpers, required } from '@vuelidate/validators';

const validations = {
  required(message: string = 'Поле обязательно для заполнения') {
    return helpers.withMessage(message, required);
  },
  email: helpers.withMessage('Некорректный адрес электронной почты', email),
  password: helpers.withMessage('Некорректный пароль', required),
  sameAs: helpers.withMessage('Пароли должны совпадать', required),
};

export default validations;
