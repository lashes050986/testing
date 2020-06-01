import Vue from "vue";
import VueRouter from "vue-router";
import CreateContact from "../views/CreateContact.vue";
import Contacts from "../views/Contacts.vue";
import EditContact from "../views/EditContact.vue";
import DeleteContact from "../views/DeleteContact.vue";
Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/Contacts",
      name: "create-contact",
      component: CreateContact
    },
    {
      path: "/View-Contacts",
      name: "view-contacts",
      component: Contacts
    },
    {
      path: "/Edit-Contact",
      name: "edit-contact",
      component: EditContact
    },
    {
      path: "/Delete-Contact",
      name: "delete-contact",
      component: DeleteContact
    }
  ]
});
