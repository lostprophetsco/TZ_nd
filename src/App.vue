<template>
  <header class="header">
    <div class="container header__container">
      <picture class="header__logo logo">
        <source
          media="(max-width: 768px)"
          width="37"
          height="36"
          srcset="@/assets/images/logo-mobile.svg"
        />
        <img
          src="@/assets/images/logo.svg"
          width="219"
          height="50"
          alt="logo"
          class="logo__image"
        />
      </picture>

      <div class="header__button">
        <Button v-if="!isUserAuth" @click.stop="openModal('login')">
          Вход
          <template #icon>
            <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
              <use :href="`#${iconLogin}`" />
            </svg>
          </template>
        </Button>

        <template v-else>
          <span class="header__button-email">{{ user.email || 'someLongLongTestEmail.com' }}</span>
          <Button modifier="rounded" @click.stop="showLogout = !showLogout">
            <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
              <use :href="`#${iconUser}`" />
            </svg>
          </Button>

          <div class="header__button-logout" v-if="showLogout">
            <!--            <a href="#" @click.stop="delAuth" class="link">Выйти</a>-->
          </div>
        </template>
      </div>
    </div>
  </header>

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
          @submit="formHandler($event)"
          :error="formError.status"
          :success="formSuccess.status"
          :loading="formLoading"
        >
          <template #buttonText>
            {{
              formComponent === formLogin
                ? 'Войти'
                : formComponent === formRegistration
                  ? 'Зарегистрироваться'
                  : 'Добавить заметку'
            }}
          </template>

          <template #footerText>
            <div class="m-form__footer-text">
              <template v-if="formComponent === formLogin">
                У вас нет аккаунта?
                <a href="#" @click.stop="openModal('registration')" class="link"
                  >Зарегистрируйтесь</a
                >
              </template>

              <template v-else-if="formComponent === formRegistration">
                У вас уже есть аккаунт?
                <a href="#" @click.stop="openModal('login')" class="link">Войти</a>
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
</template>
<script setup lang="ts">
// Imports
import { defineAsyncComponent, onMounted, ref, shallowRef } from 'vue';

// Composables
import useBody from '@/composables/dom/useBody';

// Icons
import iconUser from './assets/images/icons/icon-user.svg';
import iconAdd from './assets/images/icons/add.svg';
import iconLogin from './assets/images/icons/login.svg';
import iconClose from './assets/images/icons/close.svg';

// Components
import Button from './components/atoms/buttons/button.vue';
import CardNotice from './components/molecules/card/notice.vue';
import Modal from './components/molecules/modal/modal.vue';

// User
const isUserAuth = ref(true);
interface IUser {
  email: string | number | Date | null;
}
const user = ref<IUser>({
  email: null,
});
const showLogout = ref(true);

// Modal
const { toggleBodyClass } = useBody();
const isModalOpened = ref(false);
const openModal = (componentName: 'login' | 'registration' | 'addNote') => {
  formHandlerSwitcher(componentName);
  formError.value.status = false;
  formSuccess.value.status = false;
  formComponent.value = formSwitcher(componentName);
  isModalOpened.value = true;
  toggleBodyClass('add', 'overflow-hidden');
};
const closeModal = () => {
  formComponent.value = null;
  isModalOpened.value = false;
  toggleBodyClass('remove', 'overflow-hidden');
};

// Forms
const formComponent = shallowRef(null as any);
const formLoading = ref(false);
const formHandler = ref();

/**
 * @description Form status interface
 */
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
import { IFormLoginModel } from '@/components/molecules/forms/formLogin/formLogin.model.ts';
import { IFormRegistrationModel } from './components/molecules/forms/formRegistration/formRegistration.model.ts';
// import { IFormAddNoteModel } from './components/molecules/forms/formAddNote/formAddNote.model.ts';
const formLogin = defineAsyncComponent(
  () => import('./components/molecules/forms/formLogin/formLogin.vue'),
);
const formRegistration = defineAsyncComponent(
  () => import('./components/molecules/forms/formRegistration/formRegistration.vue'),
);
const formAddNote = defineAsyncComponent(
  () => import('./components/molecules/forms/formAddNote/formAddNote.vue'),
);

/**
 * @description Function to switch between login, registration and addNote forms
 * @param formName
 * @returns Current form component
 */
const formSwitcher = (formName: 'login' | 'registration' | 'addNote') => {
  if (formName === 'login') {
    return (formComponent.value = formLogin);
  } else if (formName === 'registration') {
    return (formComponent.value = formRegistration);
  } else if (formName === 'addNote') {
    return (formComponent.value = formAddNote);
  }
};

// Requests
const token = ref('');
const notes = ref([]);
const authEndPoint = 'https://dist.nd.ru/api/auth';
const regEndPoint = 'https://dist.nd.ru/api/reg';

/**
 * @description Send auth request to get access token
 */
const getAuth = (formData: IFormLoginModel) => {
  formLoading.value = true;
  formSuccess.value.status = false;
  formError.value.status = false;

  const bodyData = {
    email: formData.email,
    password: formData.password,
  };

  fetch(authEndPoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bodyData),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.statusCode !== 200) {
        console.log(data, 'эне ок');
        formError.value.status = true;
        formError.value.message = data.message;
      } else {
        console.log(data, 'ok');
        isUserAuth.value = true;
        token.value = data.accessToken;
        localStorage.setItem('accessToken', JSON.stringify(data.accessToken));
        localStorage.setItem('email', JSON.stringify(bodyData.email));
        user.value.email = bodyData.email;
        formSuccess.value.status = true;
        formSuccess.value.message =
          'Авторизация прошла успешно. Закройте окно или оно само будет закрыто через 5 секунд';

        setTimeout(() => {
          formSuccess.value.status = false;
          closeModal();
        }, 5000);
      }
    })
    .catch((error) => {
      console.log(error);
      formError.value.status = true;
      formError.value.message = error;
    });
  formLoading.value = false;
};

const getRegistration = (formData: IFormRegistrationModel) => {
  formLoading.value = true;
  formError.value.status = false;
  formSuccess.value.status = false;

  const bodyData = {
    email: formData.email,
    password: formData.password,
    confirm_password: formData.confirmPassword,
  };

  fetch(regEndPoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bodyData),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.statusCode) {
        console.log(data, 'эне ок reg');
        formError.value.status = true;
        formError.value.message = data.message;
      } else {
        console.log(data, 'ok reg');
        formSuccess.value.status = true;
        formSuccess.value.message = 'Теперь вы можете войти в аккаунт';

        setTimeout(() => {
          formSuccess.value.status = false;
          closeModal();
        }, 5000);
      }
    })
    .catch((error) => {
      console.log(error);
      formError.value.status = true;
      formError.value.message = error;
    });
  formLoading.value = false;
};

// const delAuth = () => {
//   const data = {
//     email: 'user@example.com',
//     password: '123123',
//   };
//   fetch(authEndPoint, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${token.value}`,
//     },
//     body: JSON.stringify(data),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
//   if (localStorage.getItem('accessToken')) {
//     if (token.value) {
//       localStorage.removeItem('accessToken');
//       token.value = null;
//       user.value.email = '';
//       showLogout.value = false;
//     }
//   }
// };

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

/**
 * Switches between different form handlers based on the given form name.
 *
 * @param formName - The name of the form for which to switch the handler.
 * @returns The form handler function associated with the given form name.
 */
const formHandlerSwitcher = (formName: 'login' | 'registration' | 'addNote') => {
  switch (formName) {
    case 'login':
      formHandler.value = getAuth;
      break;
    case 'registration':
      formHandler.value = getRegistration;
      break;
    case 'addNote':
      // formHandler.value = addNote;
      break;
  }
};

onMounted(() => {
  if (!token.value || token.value === 'null') return;

  isUserAuth.value = true;
  user.value.email = JSON.parse(localStorage.getItem('email') || '');
  token.value = JSON.parse(localStorage.getItem('accessToken') || '');
});
</script>
