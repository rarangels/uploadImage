/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue';
import Loading from 'vue-loading-overlay';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vue from 'vue';
import VueCookies from 'vue-cookies';
import Helpers from "./scripts/Helpers";

require('./bootstrap');

window.Vue = require('vue').default;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(Loading);
Vue.use(VueAxios, axios);
Vue.use(VueCookies);

//Se agregan cabeceras personalizadas
require('./scripts/HeadersAxios');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('formulario-component', require('./components/FormularioComponent.vue').default);


Vue.mixin({
    methods: Helpers
});

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
