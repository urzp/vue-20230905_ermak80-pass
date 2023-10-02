<template>
  <div class="calendar-view">
    <div class="calendar-view__controls">
      <div class="calendar-view__controls-inner">
        <button class="calendar-view__control-left" type="button" aria-label="Previous month" @click="selectedMonthNumber--"></button>
        <div class="calendar-view__date">{{ titelCalendat() }}</div>
        <button class="calendar-view__control-right" type="button" aria-label="Next month" @click="selectedMonthNumber++"></button>
      </div>
    </div>

    <div class="calendar-view__grid">
      <div v-for="item, i in calendarGrid" :key = i class="calendar-view__cell"  :class="{'calendar-view__cell_inactive':item.inactive}" tabindex="0">
        <div class="calendar-view__cell-day">{{ item.day.getDate() }}</div>
        <div class="calendar-view__cell-content">
          <a v-for="meetap in item.meetups" :key = meetap.id href="/meetups/1" class="calendar-event">{{ meetap.title }}</a>
        </div>
      </div>
    </div>

    <!-- <div class="calendar-view__grid">
      <div class="calendar-view__cell calendar-view__cell_inactive" tabindex="0">
        <div class="calendar-view__cell-day">28</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell calendar-view__cell_inactive" tabindex="0">
        <div class="calendar-view__cell-day">29</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell calendar-view__cell_inactive" tabindex="0">
        <div class="calendar-view__cell-day">30</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">1</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">2</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">3</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">4</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">5</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">6</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">7</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">8</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">9</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">10</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">11</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">12</div>
        <div class="calendar-view__cell-content">
          <a href="/meetups/1" class="calendar-event">Meetup 1</a>
          <a href="/meetups/2" class="calendar-event">Meetup 2</a>
        </div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">13</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">14</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">15</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">16</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">17</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">18</div>
        <div class="calendar-view__cell-content"></div>
      </div>
     
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">19</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">20</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">21</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">22</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">23</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">24</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">25</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">26</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">27</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">28</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">29</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">30</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">31</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell calendar-view__cell_inactive" tabindex="0">
        <div class="calendar-view__cell-day">1</div>
        <div class="calendar-view__cell-content"></div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'MeetupsCalendar',

  data() {
    return {
      selectedMonthNumber: new Date().getMonth(),
    };
  },

  props: {
    meetups: {
      type: Array,
      required: true,
    },
  },

  methods:{
      titelCalendat(){
        return this.selectedMonth.toLocaleDateString(navigator.language, {
          month: 'long',
          year: 'numeric',
        });
      },
      daysInThisMonth(date) {
        return new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();
      }
  },

  computed:{
    selectedMonth(){
      return new Date(new Date().getFullYear(), this.selectedMonthNumber, 1)
    },
    calendarGrid(){
      let output = [];
      let ferstDayMonth = this.selectedMonth
      let weekFerstDayMonth = [7, 1, 2, 3, 4, 5, 6][ferstDayMonth.getDay()]
      let lasDay = this.daysInThisMonth(ferstDayMonth);
      console.log(weekFerstDayMonth)
      for(let i=0; i<35; i++){
        let dayGrid = i + 2 - weekFerstDayMonth
        let dateGrid = new Date(new Date(ferstDayMonth).setDate(dayGrid))
        let inactive  = (dayGrid>lasDay)||(dayGrid <= 0)
        if( i==28 && inactive ){ i =36; continue }
        let meetups = this.meetups.filter(item => new Date(item.date).toDateString() == dateGrid.toDateString())
        output[i] = {
          day: dateGrid,
          inactive,
          meetups,
        }
      }
      return output
    }
  },
};
</script>

<style scoped>
.calendar-view {
}

.calendar-view__controls {
  text-align: center;
  font-weight: 700;
  font-size: 24px;
  line-height: 1;
  color: var(--blue);
  background-color: var(--blue-extra);
  padding: 24px;
  display: flex;
  justify-content: center;
}

.calendar-view__controls-inner {
  max-width: 325px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-transform: capitalize;
}

.calendar-view__controls-inner button {
  border: none;
  padding: 0;
}

.calendar-view__control-left,
.calendar-view__control-right {
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s all;
  background: url('@/assets/icons/icon-pill-active.svg') left center no-repeat;
  background-size: cover;
}

.calendar-view__control-left:hover,
.calendar-view__control-right:hover {
  opacity: 0.8;
}

.calendar-view__control-right {
  transform: rotate(180deg);
}

.calendar-view__grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
}

.calendar-view__grid {
  border: 1px solid var(--grey);
  border-bottom: none;
}

.calendar-view__cell {
  position: relative;
  height: auto;
  padding: 6px 8px;
  background-color: var(--white);
  color: var(--grey-8);
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border-bottom: 1px solid var(--grey);
  border-left: 1px solid var(--grey);
  text-align: right;
}

.calendar-view__cell.calendar-view__cell_inactive {
  background-color: var(--grey-light);
}

@media all and (max-width: 767px) {
  .calendar-view__cell:nth-child(5n + 1) {
    border-left: none;
  }
}

@media all and (min-width: 767px) {
  .calendar-view__grid {
    grid-template-columns: repeat(7, 1fr);
  }

  .calendar-view__cell {
    height: 144px;
  }

  .calendar-view__cell:nth-child(7n + 1) {
    border-left: none;
  }
}

.calendar-event {
  --max-lines: 2;
  --line-height: 16px;

  display: block;
  text-align: left;
  text-decoration: none;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 14px;
  font-weight: 600;
  line-height: var(--line-height);
  color: var(--white);
  padding: 4px 6px;
  border-radius: 2px;
  background-color: var(--blue);
  margin-top: 4px;
}

@media all and (min-width: 767px) {
  .calendar-event {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    max-height: calc(var(--max-lines) * var(--line-height) + 6px);
  }
}
</style>
