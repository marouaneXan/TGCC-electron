<template>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Job</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(person, index) in people" :key="index">
            <td>{{ person.completeName }}</td>
            <td>{{ person.job }}</td>
            <td>{{ person.phoneNumber }}</td>
            <td>{{ person.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      people: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style>
  .table-container {
    overflow-x: auto;
    max-width: 100%;
  }
  
  table {
    border-collapse: collapse;
    width: 100%;
  }
  
  th,
  td {
    text-align: left;
    padding: 8px;
    border-bottom: 1px solid #ddd;
  }
  
  th {
    background-color: #f2f2f2;
  }
  </style>
  