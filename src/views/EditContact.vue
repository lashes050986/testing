<template>
<div>
    <app-contacts-table />
</div>  
</template>

<script>

import AppContactsTable from "@/views/Contacts.vue";

export default {
  components: {
    'app-contacts-table' : AppContactsTable
  }
  
}
</script>