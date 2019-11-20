<template>
  <section id="announcements">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 mx-auto">
          <h2>ANNOUNCEMENTS</h2>
          <ul
            class="timeline"
            v-for="announcement in announcements"
            v-bind:key="announcement.title"
          >
            <li class="list-item-announcement">
              <span class="announcement-title">{{ announcement.title }}</span>
              <span class="float-right announcement-datetime">
                <i class="fa fa-clock-o"></i>
                {{ announcement.datetime }}
              </span>
              <p class="announcement-content">{{ announcement.content }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      announcements: [
        {
          title: "Update speaker poster",
          content: "The poster of the speaker hss been updated",
          datetime: "Dec 11"
        },
        {
          title: "Program updated",
          content: "The program has been updated and annoucing more speaker",
          datetime: "Dec 07"
        },
        {
          title: "Announce more talk topic",
          content:
            "More topic has been announce and poster are added (click on the topic)",
          datetime: "Dec 07"
        },
        {
          title: "Update speaker topic",
          content: "The speaker topic has been updated",
          datetime: "Dec 04"
        },
        {
          title: "Announce talk topic",
          content:
            "The speaker topic has been announce and poster are added (click on the topic)",
          datetime: "Dec 03"
        },
        {
          title: "Registration deadline extension",
          content: "The registration deadline has been extended to 13 December",
          datetime: "Nov 30"
        },
        {
          title: "Project submission deadline extension",
          content:
            "The project submission deadline has been extended to 18 November",
          datetime: "Nov 11"
        }
      ]
    };
  }
};
</script>
<style scoped>
ul.timeline {
  list-style-type: none;
  position: relative;
}

ul.timeline:before {
  content: " ";
  background: #d4d9df00;
  display: inline-block;
  position: absolute;
  left: 29px;
  width: 2px;
  height: 100%;
  z-index: 400;
}

ul.timeline > li {
  margin: 20px 0;
  padding-left: 20px;
}

ul.timeline > li:before {
  content: " ";
  background: white;
  display: inline-block;
  position: absolute;
  border-radius: 50%;
  border: 10px solid #582e91;
  margin-top: 6px;
  left: 20px;
  width: 20px;
  height: 20px;
  z-index: 400;
}

.announcement-datetime > i {
  font-size: 80%;
}

.announcement-datetime {
  margin-top: 7px;
}

.announcement-title {
  font-size: 140%;
  font-weight: 600;
}
</style>
