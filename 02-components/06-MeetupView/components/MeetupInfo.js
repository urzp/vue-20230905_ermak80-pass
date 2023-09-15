import { defineComponent } from '../vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupInfo',

  props:{
    organizer:{
      type: String,
      required: true,
    },
    place:{
      type: String,
      required: true,     
    },
    date:{
      type: Number,
      required: true,
    }
  },

  computed:{
    date_text(){
      return new Date(this.date).toLocaleDateString('en-En', { month: 'short', day: 'numeric' , year: 'numeric' })
    },
    date_attr(){
      return new Date(this.date).toLocaleDateString('fr-CA', { year: 'numeric', month: '2-digit', day: '2-digit'  })
    }
  },

  template: `
    <ul class="meetup-info">
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-user.svg" />
        {{ organizer }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-map.svg" />
        {{ place }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
        <time :datetime="date_attr">{{ date_text }}</time>
      </li>
    </ul>`,
});
