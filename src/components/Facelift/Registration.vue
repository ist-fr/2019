<template>
  <section id="registration">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 mx-auto">
          <h2>REGISTRATION</h2>
          <p class="lead">We will be opening for registration very shortly</p>

          <div class="row justify-content-md-center">
        <!-- <label>Registration Fee</label> -->
        <div class="col-sm"> </div>
        <div class="col-sm">
        <!-- <b-table :items="prices"></b-table> -->
        </div>
        <div class="col-sm"> </div>
    </div>
    <div class="justify-content-md-center">
        
        <h2>Registration Fee</h2>
        <tr>
            <td>
            <table class="table">
                <tbody><tr class="head">
                <td><label class="title">Participant Category</label></td>
                <td><label class="title">Early Registration</label><br>
                    (July XX – December XX, 2018)</td>
                <td><label class="title">Late Registration</label><br>
                    (After December XX, 2018)</td>
                </tr>
                <tr>
                <td>All delegates</td>
                <td>5000 ฿</td>
                <td>4000 ฿</td>
                </tr>
                <tr>
                <td>Full time students</td>
                <td>1500 ฿</td>
                <td>1000 ฿</td>
                </tr>
                <tr>
                <td>Accompanying persons*</td>
                <td>2000 ฿</td>
                <td>3000 ฿</td>
                </tr>
            </tbody></table>
            </td>
        </tr>
    </div>
    <b-row>
    <p class="note">
        <label class="paccon-blue">Note:</label>
    </p>
    
    <ol class="registration">
        <li>Payments can be made either by bank transfer or by credit card.</li>
        <li>All the transaction charges associated with payment (by bank transfer or by credit card) are
        responsibility of the participant.</li>
        <li>Any fees deducted on our end must paid in cash upon registration.</li>
        <li>All on-site payments to the conference must be made in cash.</li>
    </ol>
    </b-row>
    <b-row>
    <p class="note">
            <label class="paccon-blue">Benefit for registration</label>
    </p>
    <ul class="registration">
              <li>Conference materials</li>
              <li>Access to all scientific sessions</li>
              <li>Welcome reception on Wednesday evening</li>
              <li>Coffee breaks and lunches</li>
    </ul>
    </b-row>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import register from '@/components/Register/Register'
export default {
  data () {
    return {
      prices: [
        {
          'Participant Category': 'All delegates',
          'Early Registration (July XX – December XX, 2018)': '4000 ฿',
          'Late Registration< ((After December XX, 2018)': '5000 ฿'
        },
        {
          'Participant Category': 'All delegates',
          'Early Registration (July XX – December XX, 2018)': '4000 ฿',
          'Late Registration< ((After December XX, 2018)': '5000 ฿'
        }
      ]
    }
  },
  components: {
    register
  }
}
</script>
<style>
</style>
