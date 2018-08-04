<template>
    <div id="navContainer">
    <ul v-for="item in menu" v-bind:key="item">
        <li class="panel panel-default list-group-item">
            <div class="panel-heading" v-b-toggle="'collapse' + item" data-parent="#accordion">
                <h4 class="panel-title">
                    <a >
                        <b>
                        {{item}}
                        </b>
                    </a>
                </h4>
            </div>
            <b-collapse :id="'collapse' + item" class="panel-collapse collapse in" accordion="accordionCase">
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
</template>
<script>
export default {
  data () {
    return {
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
  }
}
</script>
<style>

</style>

