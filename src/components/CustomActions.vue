<template>
    <div class="custom-actions">
      <!-- <button class="btn btn-default btn-sm" @click="itemAction('view-item', rowData, rowIndex)"><span class="glyphicon glyphicon-zoom-in"></span></button> -->
      <button class="btn btn-default btn-sm" @click="itemAction('edit-item', rowData, rowIndex)"><span class="glyphicon glyphicon-pencil"></span></button>
      <button class="btn btn-default btn-sm" @click="itemAction('delete-item', rowData, rowIndex)"><span class="glyphicon glyphicon-remove"></span></button>
    </div>
  </template>

<script>
import axios from 'axios'
export default {
  props: {
    rowData: {
      type: Object,
      required: true
    },
    rowIndex: {
      type: Number
    },
    id: {
      type: Number
    }
  },
  methods: {
    itemAction (action, data, index) {
      if (action === 'edit-item') {
        window.location.href = '#/edit/' + data.id
      }
      if (action === 'delete-item') {
        axios.delete('http://192.168.1.175:3000/api/alerts/' + data.id)
        .then(Response => window.location.reload())
        .catch(e => console.log(e))
      }
      console.log('custom-actions: ' + action, data.name, index)
    }
  }
}
  </script>

  <style>
    .custom-actions button.ui.button {
      padding: 8px 8px;
    }
    .custom-actions button.ui.button > i.icon {
      margin: auto !important;
    }
  </style>