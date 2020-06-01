import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		id:"1",
		firstName: "erika",
		lastName: "sanchez",
		title: "ceo",
		email: "erika@honeycrm.com",
		contacts: []
		
	},
	mutations: {
		addContact(state, contact) {
			state.contacts.push(contact);
		}
		
	},
	actions: {},
	modules: {},
	getters: {
		id(state) {
			return state.id;
		},
		firstName(state) {
			return state.firstName;
		},
		lastName(state) {
			return state.lastName;
		},
		title(state) {
			return state.title;
		},
		email(state) {
			return state.email;
		},
		
	}
});
