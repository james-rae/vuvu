import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex, { Store } from 'vuex';

import app from './app.vue';
import breadcrumbs from './breadcrumbs.vue';
import languageToggle from './language-toggle.vue';
import { createStore, RootState } from './store';
import { i18n } from './lang';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes, faSlidersH, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faTimes, faSlidersH, faExternalLinkAlt);

Vue.use(VueRouter);
Vue.use(Vuex);

Vue.component('font-awesome-icon', FontAwesomeIcon);

const router = new VueRouter();

// initialize a new app-wide store
const store: Store<RootState> = createStore();

Vue.config.ignoredElements = ['rv-map'];
//TODO: re-enable and fix vue wanting to bind to everything in ramp again
Vue.config.silent = true;

new Vue({
    el: '#app',
    router,
    store,
    i18n,
    render: h => h('app'),
    components: { app }
});

new Vue({
    el: '#breadcrumbs',
    store,
    i18n,
    render: h => h('breadcrumbs'),
    components: { breadcrumbs }
});

new Vue({
    el: '#lng',
    store,
    i18n,
    render: h => h('languageToggle'),
    components: { languageToggle }
});
