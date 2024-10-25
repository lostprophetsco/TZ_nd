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
          <span class="header__button-email">{{
            userData.email || 'someLongLongTestEmail.com'
          }}</span>
          <Button
            modifier="rounded"
            @click.stop="isShowLogoutLinkVisible = !isShowLogoutLinkVisible"
            aria-label="Show Logout Link"
            :aria-expanded="isShowLogoutLinkVisible"
          >
            <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
              <use :href="`#${iconUser}`" />
            </svg>
          </Button>
        </template>
      </div>

      <div class="header__logout" v-if="isShowLogoutLinkVisible && isUserAuth">
        <a href="#" @click.stop="delAuth" class="link">Выйти</a>
      </div>
    </div>
  </header>

  <section v-if="!isUserAuth" class="hero">
    <div class="container hero__container">
      <div class="hero__title">
        <h1 class="hero__title-header">Мои заметки</h1>
        Не забывай о важном, храни его в облаке.
      </div>

      <img
        class="hero__image"
        src="@/assets/images/hero.svg"
        width="898"
        height="864"
        alt="notes"
      />
    </div>
  </section>

  <section v-if="isUserAuth" class="notes">
    <div class="container notes__container">
      <CardNotice v-for="note in notes" :title="note.title" :key="note.id">
        {{ note.content }}
        <template #deleteButton>
          <Button @click.stop="deleteNote(note.id)">
            <template #icon>
              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <use :href="`#${iconClose}`" />
              </svg>
            </template>

            Удалить
          </Button>
        </template>
      </CardNotice>
    </div>
  </section>

  <Button
    v-if="isUserAuth"
    @click.stop="openModal('addNote')"
    modifier="rounded"
    class="add-note-button"
    aria-label="Add note"
  >
    <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
      <use :href="`#${iconAdd}`" />
    </svg>
  </Button>

  <transition name="fade" mode="out-in">
    <Modal v-if="isModalOpened" :isOpen="isModalOpened" @modal-close="closeModal">
      <keep-alive>
        <component
          :is="formComponent"
          @submit="formHandlerFunction($event)"
          :error="formErrorState.status"
          :success="formSuccessState.status"
          :loading="formLoadingState"
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

          <template #error>
            <template v-if="Array.isArray(formErrorState.message)">
              <span v-for="(error, index) in formErrorState.message">
                <span style="display: block" :key="index">{{ error }}</span>
              </span>
            </template>

            <template v-else>
              {{ formErrorState.message }}
            </template>
          </template>

          <template #success>
            {{ formSuccessState.message }}
          </template>
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
const isUserAuth = ref(false);
interface IUserData {
  email: string | number | Date | null;
}
const userData = ref<IUserData>({
  email: null,
});
const isShowLogoutLinkVisible = ref(false);

// Modal
const { toggleBodyClass } = useBody();
const isModalOpened = ref(false);
const openModal = (componentName: 'login' | 'registration' | 'addNote') => {
  formHandlerSwitcher(componentName);
  formErrorState.value.status = false;
  formSuccessState.value.status = false;
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
const formLoadingState = ref(false);
const formHandlerFunction = ref();

/**
 * @description Form status interface
 */
interface IFormState {
  status: boolean;
  message: string;
}
const formErrorState = ref<IFormState>({
  status: false,
  message: '',
});
const formSuccessState = ref<IFormState>({
  status: false,
  message: '',
});

// Import forms components
import { IFormLoginModel } from '@/components/molecules/forms/formLogin/formLogin.model.ts';
import { IFormRegistrationModel } from './components/molecules/forms/formRegistration/formRegistration.model.ts';
import { IFormAddNoteModel } from './components/molecules/forms/formAddNote/formAddNote.model.ts';
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
interface INotes {
  id: number;
  title: string;
  content: string;
}
const token = ref('');
const notes = ref<INotes[]>([]);
const authEndPoint = 'https://dist.nd.ru/api/auth';
const regEndPoint = 'https://dist.nd.ru/api/reg';
const noteEndPoint = 'https://dist.nd.ru/api/notes';

/**
 * @description Send auth request to get access token
 */
const getAuth = (formData: IFormLoginModel) => {
  formLoadingState.value = true;
  formSuccessState.value.status = false;
  formErrorState.value.status = false;

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
      if (data.statusCode) {
        formErrorState.value.status = true;
        formErrorState.value.message = data.message;
      } else {
        isUserAuth.value = true;
        token.value = data.accessToken;
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('email', bodyData.email);
        userData.value.email = bodyData.email;
        formSuccessState.value.status = true;
        formSuccessState.value.message =
          'Авторизация прошла успешно. Закройте окно или оно само будет закрыто через 5 секунд';
        getNotes();

        setTimeout(() => {
          formSuccessState.value.status = false;
          closeModal();
        }, 5000);
      }
    })
    .catch((error) => {
      console.log(error);
    });
  formLoadingState.value = false;
};

const delAuth = () => {
  fetch(authEndPoint, {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .then((data) => {
      isUserAuth.value = false;
      token.value = '';
      localStorage.removeItem('accessToken');
      localStorage.removeItem('email');
      userData.value.email = null;
    })
    .catch((error) => {
      console.log(error);
    });
};

const getRegistration = (formData: IFormRegistrationModel) => {
  formLoadingState.value = true;
  formErrorState.value.status = false;
  formSuccessState.value.status = false;

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
        formErrorState.value.status = true;
        formErrorState.value.message = data.message;
      } else {
        localStorage.setItem('email', bodyData.email);
        userData.value.email = bodyData.email;
        formData.email = bodyData.email;
        formSuccessState.value.status = true;
        formSuccessState.value.message = 'Теперь вы можете войти в аккаунт.';
      }
    })
    .catch((error) => {
      console.log(error);
    });
  formLoadingState.value = false;
};

const getNotes = () => {
  fetch(noteEndPoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token.value}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      notes.value = data;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

const addNote = (formData: IFormAddNoteModel) => {
  const bodyData = {
    title: formData.title,
    content: formData.text,
  };
  fetch(noteEndPoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token.value}`,
    },
    body: JSON.stringify(bodyData),
  })
    .then((response) => response.json())
    .then((data) => {
      if (!data.statusCode) {
        getNotes();
        formSuccessState.value.status = true;
        formSuccessState.value.message = 'Заметка добавлена';
      } else {
        formErrorState.value.status = true;
        formErrorState.value.message = data.message;
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

const deleteNote = (id: number) => {
  fetch(noteEndPoint + '/' + id, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token.value}`,
    },
    body: JSON.stringify({}),
  })
    .then((response) => response)
    .then((data) => {
      getNotes();

      console.log(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

/**
 * Switches between different form handlers based on the given form name.
 *
 * @param formName - The name of the form for which to switch the handler.
 * @returns The form handler function associated with the given form name.
 */
const formHandlerSwitcher = (formName: 'login' | 'registration' | 'addNote') => {
  switch (formName) {
    case 'login':
      formHandlerFunction.value = getAuth;
      break;
    case 'registration':
      formHandlerFunction.value = getRegistration;
      break;
    case 'addNote':
      formHandlerFunction.value = addNote;
      break;
  }
};

onMounted(() => {
  token.value = localStorage.getItem('accessToken') || '';

  if (token.value) {
    isUserAuth.value = true;
    userData.value.email = localStorage.getItem('email');
    getNotes();
  }
});
</script>
