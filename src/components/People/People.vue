<template>
    <div class="col-md-12">
      <div class="col-md-2">
        <div class="col-md-12 block">
          <div id="navContainer">
            <ul v-for="(peopleInRow,role) in people" v-bind:key="role">
                <li class="panel panel-default list-group-item">
                    <div class="panel-heading" v-b-toggle="'collapse' + role" data-parent="#accordion">
                        <h4 class="panel-title">
                            <a >
                                <b>
                                {{role}}
                                </b>
                            </a>
                        </h4>
                    </div>
                    <b-collapse :id="'collapse' + role" class="panel-collapse collapse in" accordion="accordionCase">
                        <div class="panel-body">
                            <div v-for="person in peopleInRow" v-bind:key="person" class="list-group" v-on:click="selectPerson(person)">
                                <b>
                                    {{person}}
                                </b>
                            </div>
                        </div>
                    </b-collapse>
                </li>
            </ul>
</div>
        </div>
      </div>
      <div class="col-md-10">
        <div class="col-md-12 block">
        </div>
        <div class="col-md-12 block">
            <person></person>
        </div>
        <!-- <div class="col-md-12 block">
          <iframe src="https://calendar.google.com/calendar/embed?src=9neudqkgj0kj2d9vdedgf75vsk%40group.calendar.google.com&ctz=Asia%2FBangkok" style="border: 0"  height="400" frameborder="0" scrolling="no"></iframe>
        </div> -->
      </div>

    </div>
</template>
<script>
import person from '@/components/People/Person'
export default {
  data () {
    return {
      people: {
        'Professor': [
          'Sarana Nutanong'
        ],
        'Adjunct Professor': [
          'Thanawin RAKTHANMANON'
        ],
        'Phd Student': [
          'Norawit Urailertprasert'
        ],
        'Research Assitance': [
          ''
        ]
      }
    }
  },
  components: {
    person
  },
  method: {
    selectPerson (person) {
      console.log(person)
    }
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
.list-group-item {
    padding: 0;
}
.panel.panel-default.list-group-item{
    background-color: #777;
    widows: 100%;
}
</style>
