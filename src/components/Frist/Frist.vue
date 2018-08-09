<template>
    <div class="col-md-12">
      <div class="col-md-2">
        <b-list-group>
           <b-list-group-item button v-for="item in menu" v-bind:key="item" v-on:click="state = item" :class="{menu,active: state==item}">
              <b>
              {{item}}
              </b>
          </b-list-group-item>
        </b-list-group>
      </div>
      <div class="col-md-10">
        <div v-if="state == 'FRIST'">
          <div class="block">
            <carousel></carousel>
          </div> 
          <div class="col-md-12 block" v-for="announcement in announcements" v-bind:key="announcement.title">
              <h2 class="title">
                  <i class="fa fa-star"></i>
                  {{announcement.title}}
              </h2>
              <hr>
              <div v-html="announcement.body">
              </div>
          </div>
        </div>
        <div class="">
          <timeline v-if="state='FRIST'"></timeline>
          <accommodation v-if="state=='Accommodation'"></accommodation>
          <contact v-if="state=='Contact'"></contact>
          <information v-if="state=='Information'"></information>
          <speaker v-if="state == 'Speaker'"></speaker>
          <registration v-if="state=='Registration'"></registration>
          <program v-if="state=='Program'"></program>
          <submission v-if="state=='Submission'"></submission>
          <venu v-if="state=='Venu'"></venu>
        </div>
      </div>
    </div>
</template>
<script>
import carousel from '@/components/Frist/Carousel'
import accommodation from '@/components/Frist/Accommodation'
import contact from '@/components/Frist/ContactUs'
import information from '@/components/Frist/Information'
import registration from '@/components/Frist/Registration'
import speaker from '@/components/Frist/Speaker'
import program from '@/components/Frist/Program.vue'
import submission from '@/components/Frist/Submission'
import venu from '@/components/Frist/Venue'
import timeline from '@/components/Frist/Timeline'
export default {
  data () {
    return {
      announcements: [
        {
          title: 'Announcement',
          body: 'Allap'
        },
        {
          title: 'Announcement',
          body: 'Allap'
        }
      ],
      state: 'FRIST',
      menu: [
        'FRIST',
        'Committee',
        'Program',
        'Speaker',
        'Registration',
        'Submission',
        'Venu',
        'Accomodation',
        'Infomation',
        'Contract Us'
      ]
    }
  },
  components: {
    accommodation,
    contact,
    information,
    program,
    speaker,
    registration,
    submission,
    venu,
    carousel,
    timeline
  }
}
</script>
<style>
.block {
  background-color: #444;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  /* border-style: solid; */
  border-radius: 7px;
  /* border-width: 2px 10px 4px 20px; */
}
.menu {
  margin-top: 5px;
  margin-bottom: 5px;
  color: black;
  font-size: 1.5 em;
  background-color: #BBDEFB;
}
.menu:active {
  background-color: black;
}
.title {
    left: 0;
}
div {
  color: black;
}
</style>

