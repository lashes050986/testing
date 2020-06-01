<template>



<div class="table">	
	<div class="table-name">
		<div class="tableName">
			<h3>Contacts</h3>
		</div>

		<div class="dividerContent">
			<div class="divider">
			</div>	

			<div class="inputContainer">
				<div class="searchIcon">
					<input type="text" placeholder="Search">

					<div class="icon">
						<div>
							<app-magnifying />
						</div>	
					</div>
				</div>		
			</div>
			
			<div class="divider">
			</div>	
				
			<div class="createContact">
				<button type="submit">Add New Contact</button>
			</div>	

			<div class="plusIcon">
				<app-plus />
			</div>	
		</div>	

	</div>
	<div class="header">
		<div class="checkBox">
			<app-checkbox />
		</div>

		<tr>
			<div class="header-name border">
				<app-drag-drop-icon />
				<th>NAME</th>
			</div>
			
			<div class="header-title border">
				<app-drag-drop-icon />
				<th>TITLE</th>
			</div>

			<!-- <div class="header-title border">
				<app-drag-drop-icon />
				<th>COMPANY</th>
			</div>
			
			<div class="header-title border">
				<app-drag-drop-icon />
				<th>EMPLOYEE</th>
			</div>	

			<div class="header-title border">
				<app-drag-drop-icon />
				<th>TEMP</th>
			</div>
			
			<div class="header-title border">
				<app-drag-drop-icon />
				<th>SCORE</th>
			</div>
			 -->
			<div class="header-title border" >
				<app-drag-drop-icon />
				<th>EMAIL</th>
			</div>
		</tr>	
	</div>

	<div class="contact-detail">
		<div class="contact" v-for="contact in contacts" :key="contact.id">
			
			<table class="contactTable">
				<div class="checkBoxContact">
					<app-checkbox />
				</div>
	
					<tr>
						<td>{{contact.firstName}} {{contact.lastName}}</td>
						<td>{{contact.title}}</td>
						<!-- <td></td>
						<td></td>
						<td></td>
						<td></td> -->
						<td>{{contact.email}}</td>
					</tr>
			</table>			
		</div>
	</div>
	<div class="table-footer">
		<p class="footer">Showing all contacts</p>
	</div>	
</div>	

	
</template>

<script>
import AppCheckbox from "@/components/app-checkbox.vue";
import AppDropDragIcon from "@/components/app-drag-drop.vue";
import AppPlus from "@/components/app-add.vue";
import AppMagnifying from "@/components/app-magnifying.vue";

export default {
	components: {
		'app-checkbox': AppCheckbox,
		'app-drag-drop-icon': AppDropDragIcon,
		'app-plus': AppPlus,
		'app-magnifying': AppMagnifying
	},

	computed: {
		contacts() {
			return this.$store.state.contacts;
		}
	}
 
};
</script>

<style>

body {
	background-color: #f4f5f9;
}
.contact-detail {
	display: block;
	justify-content: center;
	font-size: 14px;
}
.header {
	/* background: linear-gradient(268deg,#c679d0,#8274e8); */
	display: flex;
	max-width: 950px;
}

.contact-detail .contact-input {
  display: flex;
}

.contact-detail .contact-input li {
  list-style: none;
}

.contact-detail ul {
	margin: 5px;
	padding: 0px;
}

.header tr {
	min-height: 44px;
	display: flex;
	align-items: center;
	border-top-left-radius: 13px;
	border-top-right-radius: 13px;
}

.header th {
	min-width: 200px;
	max-width: 200px;
	color: #877d88;
	display: flex;
	font-family: Roboto,sans-serif;
	font-size: 10px;
	font-weight: 500;
}

.contact {
	border-top: 1px solid #eee;
	background: #fff;
}

.contact td {
	min-width: 201px;
	padding: 0;
	padding-left: 13px;
	font-size: 14px;
	color: #18aeff;
	font-family: Roboto,sans-serif;
}

.header .header-name {
	display: flex;
	align-items: center;
	padding: 12px 0 12px 23px;
	/* border-right: 1px solid #c6baf2; */
}

.header .header-title {
	border: none;
	height: 44px;
	display: flex;
	align-items: center;
	padding-left: 15px;
}

.table-footer {
	min-width: 950px;
	max-width: 950px;
	border-top: 1px solid #eee;
}

.table-footer .footer {
	background: #fff;
	margin: 0;
	height: 59px;
	display: flex;
	align-items: center;
	border-bottom-left-radius: 9px;
	border-bottom-right-radius: 9px;
	justify-content: flex-end;
	padding: 0 15px;
}

.table {
	 margin-left: 7px; 
	 margin-right: 7px;
	 max-width: 950px;
}

.contactTable {
	display: flex;
	height: 44px;
	align-items: center;
}
/* .header .border {
	    border-right: 1px solid #c6baf2;
} */

.checkBox {
	display: flex;
	align-items: center;
	padding-left: 7px;
}

.checkBoxContact {
	padding-left: 7px;
}

.checkBoxContact svg {
	height: 20px;
	width: 20px;
}
 .checkBox svg {
	height: 20px;
	width: 20px;
} 


.tableName {
	padding-bottom: 20px;
    font-family: Roboto,sans-serif;
    font-size: 25px;
    color: #59486e;
	
}
.tableName h3 {
	margin: 0;
    padding: 0 10px;
    font-size: 25px;
    font-family: Nunito,sans-serif;
    font-weight: 700;
    line-height: 1em;

}

.table-name {
	display: flex;
	justify-content: space-between;
	border-bottom: 2px solid #e9e9ef;
}

.createContact button {
	background-color: #18aeff;
    border: none;
    border-radius: 20px;
    padding: 10px 20px;
    height: 40px;
    /* min-width: 98px; */
    color: white;
	font-size: 14px;
    line-height: 17px;
    font-weight: 500;
    font-family: Roboto,sans-serif;
}

.border svg {
	margin-right: 7px;
}

.divider {
	height: 40px;
    margin: 0 20px;
    width: 1px;
    border-right: 2px solid #e9e9ef;
	
}

.plusIcon {
	position: absolute;
}

.inputContainer input {
	background: #e9e9ef;
    padding: 5px 10px;
    max-width: 182px;
    width: 100%;
    border-radius: 18px;
    border: 2px solid #dcdbe0;
    font: normal 16px/1em Roboto;
    color: #59486e;
    outline: none;
}

.dividerContent {
	display: flex;
}

.inputContainer {
	position: relative;
}

.searchIcon {
	position: relative;
}

.icon {
	position: absolute;
	right: 15px;
	top: 8px;
}

.icon svg {
	height: 20px;
}

</style>
