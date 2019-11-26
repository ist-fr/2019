<template>
  <section id="announcements">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 mx-auto">
          <h2>Announcements</h2>
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
          title: "Research submission deadline extended",
          content:
            "The research submission deadline has been extended to the 23:59 of 29 November 2019 (Indochina time). Selection result will be announced and notified on 5 December 2019.",
          datetime: "Nov 22"
        },
        {
          title: "Website updated",
          content:
            "We have just recently updated our website with the details for IST-FR 2019, please feel free to check them out. \
             Our deepest apologies for the delayed launch of the website.",
          datetime: "Nov 21"
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
