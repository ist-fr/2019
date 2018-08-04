export default [
  '__handle',
//   {
//     name: '__checkbox',
//     titleClass: 'text-center',
//     dataClass: 'text-center'
//   },
//   {
//     name: 'name',
//     title: '<span class="glyphicon glyphicon-user"></span> Name',
//     sortField: 'name'
//   },
  {
    name: 'company',
    title: '<span class="glyphicon glyphicon-envelope"></span> Company <button>V</button>',
    sortField: 'company'
  },
  {
    name: 'customer',
    title: '<span class="glyphicon glyphicon-tag"></span> Customer',
    sortField: 'customer',
    callback: 'allcap'
  },
  {
    name: 'product',
    title: '<span class="glyphicon glyphicon-envelope"></span> Product',
    sortField: 'product'
  },
  {
    name: 'startDate',
    title: '<span class="glyphicon glyphicon-gift"></span> Start Date',
    sortField: 'startDate',
    titleClass: 'text-center',
    dataClass: 'text-center',
    callback: 'formatDate|DD-MM-YYYY'
  },
  {
    name: 'endDate',
    title: '<span class="glyphicon glyphicon-gift"></span> End Date',
    sortField: 'endDate',
    titleClass: 'text-center',
    dataClass: 'text-center',
    callback: 'formatDate|DD-MM-YYYY'
  },
  {
    name: 'status',
    title: '<span class="glyphicon glyphicon-asterisk"></span> Status',
    sortField: 'status',
    titleClass: 'text-center',
    dataClass: 'text-center',
    callback: 'statusLabel'
  },
//   {
//     name: 'salary',
//     title: '<span class="glyphicon glyphicon-usd"></span> Salary',
//     sortField: 'salary',
//     titleClass: 'text-center',
//     dataClass: 'text-right',
//     callback: 'formatNumber'
//   },
//   {
//     name: '__component:custom-actions',
//     title: 'Actions',
//     titleClass: 'text-center',
//     dataClass: 'text-center'
//   },
  {
    name: '__component:actions',
    title: 'Actions',
    titleClass: 'text-center',
    dataClass: 'text-center'
  }
]
