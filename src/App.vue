<template>
  <Button
    >Вход
    <template #icon>
      <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
        <use :href="`#${iconLogin}`" />
      </svg>
    </template>
  </Button>

  <Button modifier="rounded">
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <use :href="`#${iconAdd}`" />
    </svg>
  </Button>

  <Button disabled>Test</Button>

  <a href="#" class="link">Зарегистрируйтесь</a>

  <InputText
    v-model="test"
    placeholder="Значение"
    label="Заголовок"
    :counter="{ visible: true, max: 10 }"
  >
  </InputText>

  <InputText v-model="test2" placeholder="Введите значение" label="Заголовок" type="password">
  </InputText>

  <InputTextarea
    v-model="test3"
    placeholder="Введите значение"
    label="Заголовок"
    :rows="10"
    :counter="{ visible: true, max: 10 }"
    error="Сообщение ошибки Сообщение ошибки"
  ></InputTextarea>

  <CardNotice title="Lorem ipsum dolor sit amet consectetur adipisicing elit.">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus cum earum facere laborum,
    officia qui? Amet atque blanditiis culpa debitis, delectus distinctio eius esse et fugiat illo
    illum ipsam itaque laboriosam molestias odit perferendis porro possimus provident quae quaerat
    ratione saepe veniam?
    <template #deleteButton>
      <Button>
        <template #icon>
          <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <use :href="`#${iconClose}`" />
          </svg>
        </template>

        Удалить
      </Button>
    </template>
  </CardNotice>

  <transition name="fade" mode="out-in">
    <Modal v-if="isModalOpened" :isOpen="isModalOpened" @modal-close="closeModal">
      <keep-alive>
        <component
          :is="formComponent"
          @submit="getAuth"
          :error="formError.status"
          :success="formSuccess.status"
        >
          <template #buttonText>{{
            formComponent === formLogin ? 'Войти' : 'Зарегистрироваться'
          }}</template>

          <template #footerText>
            <div class="m-form__footer-text">
              <template v-if="formComponent === formLogin">
                У вас нет аккаунта?
                <a href="#" @click="formSwitcher('registration')" class="link">Зарегистрируйтесь</a>
              </template>

              <template v-else-if="formComponent === formRegistration">
                У вас уже есть аккаунт?
                <a href="#" @click="formSwitcher('login')" class="link">Войти</a>
              </template>
            </div>
          </template>

          <template #error>{{ formError.message }}</template>

          <template #success>{{ formSuccess.message }}</template>
        </component>
      </keep-alive>

      <template #closeButton="{ closeModal }">
        <Button modifier="rounded" @click.stop="closeModal">
          <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <use :href="`#${iconClose}`" />
          </svg>
        </Button>
      </template>
    </Modal>
  </transition>

  <Button @click.stop="openModal('login')">Open modal login</Button>
  <Button @click.stop="openModal('registration')">Open modal register</Button>
  <Button @click.stop="openModal('addNote')">Open modal addNote</Button>
  <Button @click="getAuth">Send auth</Button>
  <!--  <Button @click="getNotes">Get notes</Button>-->
  <!--  <Button @click="addNote">Add note</Button>-->
  {{ token }}
  <pre>
    {{ notes }}
  </pre>
</template>
<script setup lang="ts">
// Imports
import { defineAsyncComponent, ref, shallowRef } from 'vue';

// Composables
import useBody from '@/composables/dom/useBody';

// Icons
import iconAdd from './assets/images/icons/add.svg';
import iconLogin from './assets/images/icons/login.svg';
import iconClose from './assets/images/icons/close.svg';

// Components
import Button from './components/atoms/buttons/button.vue';
import InputText from './components/atoms/controls/inputs/inputDefault.vue';
import InputTextarea from './components/atoms/controls/textarea/textareaDefault.vue';
import CardNotice from './components/molecules/card/notice.vue';
import Modal from './components/molecules/modal/modal.vue';
// import FormLogin from './components/molecules/forms/formLogin/formLogin.vue';

const test = ref(null);
const test2 = ref(null);
const test3 = ref(null);

// Modal
const { toggleBodyClass } = useBody();
const isModalOpened = ref(false);

const openModal = (componentName: 'login' | 'registration' | 'addNote') => {
  formComponent.value = formSwitcher(componentName);
  isModalOpened.value = true;
  toggleBodyClass('add', 'overflow-hidden');
};
const closeModal = () => {
  isModalOpened.value = false;
  toggleBodyClass('remove', 'overflow-hidden');
};

// Forms
interface IFormStatus {
  status: boolean;
  message: string;
}

const formError = ref<IFormStatus>({
  status: false,
  message: '',
});
const formSuccess = ref<IFormStatus>({
  status: false,
  message: '',
});
// Import forms components
const formLogin = defineAsyncComponent(
  () => import('./components/molecules/forms/formLogin/formLogin.vue'),
);
const formRegistration = defineAsyncComponent(
  () => import('./components/molecules/forms/formRegistration/formRegistration.vue'),
);
const formAddNote = defineAsyncComponent(
  () => import('./components/molecules/forms/formAddNote/formAddNote.vue'),
);

const formComponent = shallowRef(formLogin as any);

const formSwitcher = (formName: 'login' | 'registration' | 'addNote', event?: Event) => {
  event?.preventDefault();
  formError.value.status = false;
  formSuccess.value.status = false;
  if (formName === 'login') {
    return (formComponent.value = formLogin);
  } else if (formName === 'registration') {
    return (formComponent.value = formRegistration);
  } else if (formName === 'addNote') {
    return (formComponent.value = formAddNote);
  }
};

// Requests
const token = ref(JSON.parse(localStorage.getItem('accessToken') || 'null'));
const notes = ref([]);
const authEndPoint = 'https://dist.nd.ru/api/auth';

const getAuth = () => {
  const data = {
    email: 'user@example.com',
    password: '123123',
  };
  fetch(authEndPoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      token.value = data.accessToken;
      localStorage.setItem('accessToken', JSON.stringify(data.accessToken));

      formSuccess.value.status = true;
      formSuccess.value.message =
        'Авторизация прошла успешно. Закройте окно или оно само будет закрыто через 5 секунд';

      setTimeout(() => {
        closeModal();
      }, 5000);

      formSuccess.value.status = false;
    })
    .catch((error) => {
      formError.value.status = true;
      formError.value.message = error.message;
    });
};

// const getNotes = () => {
//   fetch('https://dist.nd.ru/api/notes', {
//     method: 'GET',
//     headers: {
//       Authorization: `Bearer ${token.value}`,
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       notes.value = data;
//       console.log('Success:', data);
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
// };

// const addNote = () => {
//   fetch('https://dist.nd.ru/api/notes', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${token.value}`,
//     },
//     body: JSON.stringify({
//       title: 'Новая заметка',
//       content: 'Текст заметки',
//     }),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       notes.value.push(data);
//       console.log('Success:', data);
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
// };
</script>
