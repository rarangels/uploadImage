import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faHome,
    faArrowAltCircleRight,
    faSearch,
    faLongArrowAltDown,
    faFileExport,
    faHistory,
    faShare,
    faCheck,
    faSpinner,
    faSync,
    faReplyAll,
    faWallet,
    faStickyNote,
    faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHome);
library.add(faArrowAltCircleRight);
library.add(faSearch);
library.add(faFileExport);
library.add(faHistory);
library.add(faShare);
library.add(faLongArrowAltDown);
library.add(faCheck);
library.add(faSpinner);
library.add(faSync);
library.add(faReplyAll);
library.add(faWallet);
library.add(faStickyNote);
library.add(faExclamationTriangle);

Vue.component('font-awesome-icon', FontAwesomeIcon)
