import Vue from "vue";
import Datepicker from "vuejs-datepicker";
import { zh } from "vuejs-datepicker/dist/locale";

Datepicker.props.language.default = () => zh;
Vue.component("datepicker", Datepicker);
