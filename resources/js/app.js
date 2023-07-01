/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import axios from 'axios'
import Vue from 'vue';
import VueRouter from 'vue-router';
import vuetify from './vuetify';

require('./bootstrap');
window.Vue = require('vue').default;
var VueCookie = require('vue-cookie');
window.Vue.use(VueCookie);
window.Vue.use(VueRouter);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/Example.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))


import Layout from './components/Layout.vue';
import Goal from './components/Goal.vue';
import TextReaderSettings from './components/TextReader/TextReaderSettings.vue';
import TextReaderGlossary from './components/TextReader/TextReaderGlossary.vue';
import TextReaderChapterList from './components/TextReader/TextReaderChapterList.vue';
Vue.component('layout', Layout);
Vue.component('goal', Goal);
Vue.component('text-reader-settings', TextReaderSettings);
Vue.component('text-reader-glossary', TextReaderGlossary);
Vue.component('text-reader-chapter-list', TextReaderChapterList);




// dialogs
import StartReviewDialog from './components/dialogs/StartReviewDialog';
import ThemeSelectionDialog from './components/dialogs/ThemeSelectionDialog';
import LanguageSelectionDialog from './components/dialogs/LanguageSelectionDialog';
Vue.component('start-review-dialog', StartReviewDialog);
Vue.component('theme-selection-dialog', ThemeSelectionDialog);
Vue.component('language-selection-dialog', LanguageSelectionDialog);


const Home = require('./components/Home.vue').default;
const BookList = require('./components/BookList.vue').default;
const CreateBook = require('./components/CreateBook.vue').default;
const ChapterList = require('./components/ChapterList.vue').default;
const EditChapter = require('./components/EditChapter.vue').default;
const Reader = require('./components/Reader.vue').default;
const FlashcardCollectionList = require('./components/FlashcardCollectionList.vue').default;
const FlashcardCollection = require('./components/FlashcardCollection.vue').default;
const Review = require('./components/Review.vue').default;
const Vocabulary = require('./components/Vocabulary.vue').default;
const KanjiList = require('./components/KanjiList.vue').default;
const KanjiDetails = require('./components/KanjiDetails.vue').default;

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/books', component: BookList },
        { path: '/books/create', component: CreateBook },
        { path: '/chapters/:bookId', component: ChapterList },
        { path: '/chapters/read/:chapterId', component: Reader },
        { path: '/chapters/create/:bookId', component: EditChapter },
        { path: '/chapters/edit/:bookId/:chapterId', component: EditChapter },
        { path: '/flashcards', component: FlashcardCollectionList },
        { path: '/flashcards/edit/:flashcardCollectionId?', component: FlashcardCollection },
        { path: '/review/:practiceMode?/:bookId?/:chapterId?', component: Review },
        { path: '/vocabulary/search', component: Vocabulary },
        { path: '/vocabulary/search/:text/:stage/:book/:chapter/:translation/:phrases/:orderBy/:page', component: Vocabulary },
        { path: '/kanji/search', component: KanjiList },
        { path: '/kanji/:character', component: KanjiDetails },
    ]
})

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    router,
    el: '#app',
    vuetify
});


