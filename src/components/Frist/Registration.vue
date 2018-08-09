<template>
<div class="container">
    
    
    <div class="row justify-content-md-center">
        <!-- <label>Registration Fee</label> -->
        <div class="col-sm"> </div>
        <div class="col-sm">
        <!-- <b-table :items="prices"></b-table> -->
        </div>
        <div class="col-sm"> </div>
    </div>
    <row class="justify-content-md-center">
        
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
        </tbody></table>
    </row>
    <row>
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
    </row>
    <row>
    <p class="note">
            <label class="paccon-blue">Benefit for registration</label>
    </p>
    <ul class="registration">
              <li>Conference materials</li>
              <li>Access to all scientific sessions</li>
              <li>Welcome reception on Wednesday evening</li>
              <li>Coffee breaks and lunches</li>
    </ul>
    </row>
    <row>
    <label class="paccon-blue" id="topic-of-para">Cancellation Policy</label>
    <p class="like-a-lists">
            <label class="paccon-blue" id="topic-of-para">Cancellation Policy</label>
            If circumstances or policies in your organization change and you can no longer attend PACCON
            Conference, you may cancel your registration by providing written notice to PACCON Conference
            Organizer.
    </p>
    </row>
    <p class="note">
            The PACCON Conference 2018 refund policy is as follows:
    </p>
    <ul class="registration">
              <li>All cancellations received&nbsp;<label class="paccon-blue">by December 29, 2017:</label>&nbsp;50% refund of registration fee minus
                administration charge.</li>
              <li>All cancellations received&nbsp;<label class="paccon-blue">after December 29, 2017:</label>&nbsp;no refunds.</li>
    </ul>
    <p class="like-a-lists">
            Please remember that cancelling your registration does not automatically cancel your hotel and travel
            arrangements. Individuals are responsible for cancelling their own hotel and travel reservations.
    </p>
    <p class="like-a-lists">
            <label class="paccon-blue" id="topic-of-para">Receipt Policy</label>
            In case of issuing new receipt instead of the issued one (name or address change), the fee of 100 Baht
            for Thai participants or 4 USD for participants outside Thailand will be charged per receipt.
          </p>
</div>
</template>
<script>
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
  }
}
</script>
<style>
</style>
