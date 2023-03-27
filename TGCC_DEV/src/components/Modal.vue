  <template>
    <div class="popup-overlay" v-if="show" >
      <div class="popup">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'Popup',
    setup() {
      const show = ref(true);
  
      function open() {
        show.value = true;
      }
  
      function close() {
        show.value = false;
      }
  
      return {
        show,
        open,
        close,
      };
    },
  };

  </script>
  
  <style>
  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .popup {
    width: inherit;
    background-color: white;
    padding: 1rem;
    border-radius: 0.25rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    position: relative;
  }
  </style>
  