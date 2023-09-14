import { defineComponent } from '../vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import MeetupView from './MeetupView.js';
import { fetchMeetupById } from '../meetupService.js';

export default defineComponent({
  name: 'PageMeetup',

  components: {
    UiAlert,
    UiContainer,
    MeetupView,
  },

  data(){
    return{
      meetup: null,
      error: false,
      getMetup:async (id)=>{
        this.meetup = null
        this.error = false
        try {
          this.meetup = await fetchMeetupById(id)
        } catch (error) {
          this.error = error
        }
      },
    }
  },

  props:{
    meetupId:{
      type: Number,
      require: true,
    }
  },

  watch:{
    async meetupId(){
      this.getMetup(this.meetupId)
    }
  },

  async mounted(){
    this.getMetup(this.meetupId)
  },

  template: `
    <div class="page-meetup">
      <!-- meetup view -->
      <MeetupView v-if="!error&&!!meetup" :meetup="meetup" />
      <UiContainer v-else-if="!error">
        <UiAlert>Загрузка...</UiAlert>
      </UiContainer>
      <UiContainer v-if="error">
        <UiAlert>{{ error.message }}</UiAlert>
      </UiContainer>
    </div>`,
});
