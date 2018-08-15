<template>
  <section id="faq">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 mx-auto">
          <h2><i class="fa fa-question-circle fa-lg white-text mr-3"></i>FAQ</h2>
          <p class="lead">The details about accomodation will be released soon</p>
          <question></question>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import question from '@/components/Register/Question'
export default {
  data () {
    return {
    }
  },
  components: {
    question
  },
  method: {
  }
}
</script>