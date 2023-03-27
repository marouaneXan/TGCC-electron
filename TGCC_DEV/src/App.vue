<template>
  <div>
    <button @click="isOpen = true">Show popup</button>
    <Popup v-if="isOpen">
      <h2>Popup Title</h2>
      <div class="form-wrapper">
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="completeName">Complete Name:</label>
        <input type="text" id="completeName" v-model="formData.completeName" required>
      </div>
      <div class="form-group">
        <label for="job">Job:</label>
        <input type="text" id="job" v-model="formData.job" required>
      </div>
      <div class="form-group">
        <label for="phoneNumber">Phone Number:</label>
        <input type="text" id="phoneNumber" v-model="formData.phoneNumber" required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" required>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
      <button @click="isOpen = false">Close</button>
    </Popup>
  </div>
  <div>
    <Table :people="people" />
  </div>
</template>

<script>
import Popup from './components/Modal.vue';
import { ref } from 'vue';
import Table from "./components/Table.vue";
import axios from "axios";

export default {
  components: {
    Popup,
    Table,
  },
  setup() {
    const isOpen = ref(false)

    return {
      isOpen,
    }
  },
  data() {
    return {
      people: [],
      formData: {
        completeName: '',
        job: '',
        phoneNumber: '',
        email: '',
      },
    };
  },
  created() {
    this.fetchEmployees();
  },
  methods: {
    fetchEmployees() {
      axios.get("http://localhost:3000/api/v1/employees/allEmployees")
        .then(response => {
          this.people = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    submitForm() {
      axios.post('http://localhost:3000/api/v1/employees/addEmploye', this.formData)
        .then(response => {
          console.log(response.data);
          this.isOpen = false;
          this.fetchEmployees();
        })
        .catch(error => {
          console.log(error.response.data);
        });
      },
  },
};
</script>

<style scoped>
.form-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

form {
  background-color: #f2f2f2;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 10px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input[type="text"],
input[type="email"] {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

button[type="submit"] {
  background-color: #4c74af;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button[type="submit"]:hover {
  background-color: #3462a8;
}
</style>






