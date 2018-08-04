<template>
    <div @click="onClick">
      <div class="inline field">
        <label>Company: </label>
        <span>{{rowData.company}}</span>
      </div>
      <div class="inline field">
        <label>Customer: </label>
        <span>{{rowData.customer}}</span>
      </div>
      <div class="inline field">
        <label>SO number: </label>
        <span>{{rowData.soNumber}}</span>
      </div>
      <div class="inline field">
        <label>Enduser: </label>
        <span>{{rowData.endUser}}</span>
      </div>
      <div class="inline field">
        <label>Product: </label>
        <span>{{rowData.product}}</span>
      </div>
      <div class="inline field">
        <label>Warranty Start: </label>
        <span>{{rowData.startDate}}</span>
      </div>
      <div class="inline field">
        <label>Warranty Stops: </label>
        <span>{{rowData.endDate}}</span>
      </div>
      <div class="inline field">
        <label>Note: </label>
        <span>{{rowData.note}}</span>
      </div>
      <div class="inline field">
        <label>Number of Service: </label>
        <span>{{rowData.numService}}</span>
      </div>
      <div class="inline field">
        <label>MA condition: </label>
        <span>{{rowData.maCondition}}</span>
      </div>
      <div class="inline field">
        <label>Status: </label>
        <span>{{rowData.status}}</span>
      </div>
    </div>
  </template>

  <script>
  export default {
    props: {
      rowData: {
        type: Object,
        required: true
      },
      rowIndex: {
        type: Number
      }
    },
    methods: {
      onClick (event) {
        console.log('my-detail-row: on-click', event.target)
      }
    }
  }
  </script>