import { defineComponent } from '../vendor/vue.esm-browser.js';
import MeetupAgendaItem from './MeetupAgendaItem.js';

export default defineComponent({
  name: 'MeetupAgenda',

  components: {
    MeetupAgendaItem,
  },

  props:{
    agenda:{
      type: Array,
      require: true,
    }
  },

  template: `
    <ul class="agenda">
      <li v-for="itemAgenda in agenda" class="agenda__item" >
        <div>
          <MeetupAgendaItem :agenda-item="itemAgenda" />
        </div>
      </li>
    </ul>`,
});
