<template>

<div class="test">
	<div class="widget-content-container">
		<div class="back-drop"></div>
		
		<form class="widget-content" @submit.prevent="saveContactInfo">
      
			<div class="widget-header">
				<h3>Add Contact</h3>
				<!-- <p>{{storeFirstName}}</p> -->
			</div>

			<div class="add-contact">
				<ul>
					<li class="form-label">First Name</li>
					<input v-model ="firstName">

					<li class="form-label">Last Name</li>
					<input v-model="lastName">

					<li class="form-label">Title</li>
					<input v-model ="title">

					<li class="form-label">Email</li>
					<input v-model="email">
				</ul>
			</div>	

			<div class="save-contact">
				<button class="cancel" type="submit">Cancel</button>
				<button type="submit">Add Contact</button>
				
			</div>
    	</form>
 	</div>
</div>	 
</template>

<script>
export default {
	name: 'app',
	data() {
		return {
			firstName: null,
			lastName: null,
			title:null,
			email:null,
			contacts: []
		}
	},

	computed: {
		//  storeFirstName() {
		// 	 return this.$store.state.firstName;
		//  }

	},

	methods: {
		saveContactInfo() {
			let contact = {
				id: this.generateID(),
				firstName: this.firstName, 
				lastName: this.lastName,
				title: this.title,
				email: this.email
			};
			this.$store.commit("addContact", contact);
			this.clearFields();
			
		},
		  generateID() {
              var id = Math.random().toString(36).slice(2);
              return id;
		  }
	}
}

</script>
<style>

.add-contact {
  background-color: #fff;
  padding: 45px 35px;
}

.add-contact li {
  list-style: none;
}

.add-contact ul {
  margin: 0px;
}

.widget-header {
  padding: 0 25px 0 35px;
  background:linear-gradient(90deg,#8274e8,#c679d0);
  font-size: 12px;
  border-top-left-radius: 19px;
  display: flex;
  justify-content: space-between;
  height: 67px;
  align-items: center;
}

.widget-header h3 {
	color: #fff;
	font-size: 20px;
	margin-top: 0;
}
.save-contact {
  display: flex;
  justify-content: space-between;
  background-color:#f7f7f8;
  height: 85px;
  padding: 0 90px 0 35px;
  border-bottom-left-radius: 19px;
  align-items: center;
}

.save-contact .cancel {
	background-color: #f7f7f8;
	color: #877d88;
}

.save-contact button {
  background: #18aeff;
  border-radius: 20px;
  border-style: none;
  height: 40px;
  padding: 0 25px;
  font-size: 14px;
  font-weight: 500;
  color: #fff;

}

.widget-content {
	max-width: 700px;
	width: 100%;
	z-index: 1041;
}

.widget-content-container {
	display: flex;
	justify-content: flex-end;
}

.widget-content-container .back-drop {
	background-color: #000;
	opacity: .5;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	z-index: -1;
	position: fixed;
}

.add-contact input {
	border-bottom: 2px solid #e9e9ef;
	outline: none;
	border-left: none;
	border-right: none;
	border-top: none;
	border-color: #877d88;
	width: 100%;
	margin-bottom: 24px;
}

.add-contact .form-label {
	margin-bottom: 13px;
}
</style>
