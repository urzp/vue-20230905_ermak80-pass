import { defineComponent } from '../vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import { fetchMeetupById } from '../meetupService.js';

export default defineComponent({
  name: 'PageMeetup',

  components: {
    UiAlert,
    UiContainer,
  },

  props:{
    meetupId:{
      type: Number,
      require: true,
    }
  },

  template: `
    <div class="page-meetup">
      <!-- meetup view -->

      <UiContainer>
        <UiAlert>Загрузка...</UiAlert>
      </UiContainer>

      <UiContainer>
        <UiAlert>error</UiAlert>
      </UiContainer>
    </div>`,
});
