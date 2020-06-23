<template>
<div class="site-navigation">
	<div class="nav-bar">
		<div class="first">
			<div class="logo">
				<app-logo />
			</div>
			<div>
				<app-marketing />
				<p>Marketing</p>
			</div>	
			<div> 
				<app-sales />
				<p>Sales</p>
			</div>	
			<div>
				<app-analytics />
				<p>Analytics</p>
			</div>	

			<div>
				<app-help />
				<p>Training</p>
			</div>

			<div>	
				<app-organization />
				<p>Organization</p>
			</div>	

		</div>
		

		<div class="second">
			<div class="second-header">
				<h4>Marketing</h4>
			</div>	
			<ul>
				<li>
					<div class="group">
						<app-dashboard />
						<div class="tabs"> Dashboard</div>
					</div>
				</li>
				
				<li>
					<div class="group">
						<app-task />
						<div class="tabs">Tasks</div>
					</div>	
				</li>
				
				<li>
					<div class="group">
						<app-leads />
						<div class="tabs">Leads</div>
					</div>	
				</li>

				<li>
					<div class="group">
						<app-email />
						<div class="tabs">Email</div>
					</div>
				</li>

				<li>
					<div class="group">
						<app-library />
						<div class="tabs">Library</div>
					</div>
				</li>

				<li>
					<div class="group">
						<app-lists />
						<div class="tabs">Lists</div>
					</div>	
				</li>

				<li>
					<div class="group contacts-tab">
						<app-contacts />
						<div class="tabs">Contacts</div>
					</div>	
				</li>

				<li>
					<div class="group">
						<app-companies />
						<div class="tabs">Companies</div>
					</div>
				</li>
			</ul>	

		</div>		
	</div>
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

			<!-- <div class="addContact">	 -->
				<div class="createContact">
					<button type="submit">
						<span>Add New Contact</span>
					
						<div class="plusIcon">
							<div>
								<app-plus />
							</div>
						</div>		
					</button>	
				 </div>
			<!-- </div>	 --> 
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
					<div class="contactTable option-container">
						<div class="edit-icon">
							<div>
								<app-edit />
							</div>

							<div>	
								<app-trash />
							</div>
						</div>
					</div>		
			</table>			
		</div>
	</div>

		<div class="footer-option">
			<div class="dropdown">	
				<p class="footer">Show</p>
					<select>
						<option>10</option>
						<option>25</option>
						<option>50</option>
						<option>100</option>
					</select>
			</div>
				<p>Showing 1 to 10 of 10</p>
			<div class="pages">	
				<button class="one" type="submit">
					<p>PREV</p>
				</button>

				<button class="two" type="submit">	
					<p>1</p>
				</button>

				<button class="three" type="submit">	
					<p>NEXT</p>
				</button>

				<button class="four" type="submit">	
					<p>LAST</p>
				</button>	
			</div>	
		</div>
 </div>
 </div>
	
</template>

<script>

	import AppCheckbox from "@/components/app-checkbox.vue";
	import AppDropDragIcon from "@/components/app-drag-drop.vue";
	import AppPlus from "@/components/app-add.vue";
	import AppMagnifying from "@/components/app-magnifying.vue";
	import AppEdit from "@/components/app-edit.vue";
	import AppTrash from "@/components/app-trash.vue";
	import AppTask from "@/components/app-task.vue";
	import AppDashboard from "@/components/app-dashboard.vue";
	import AppLeads from "@/components/app-leads.vue";
	import AppEmails from "@/components/app-email.vue";
	import AppLibrary from "@/components/app-library.vue";
	import AppLists from "@/components/app-lists.vue";
	import AppContacts from "@/components/app-contacts.vue";
	import AppCompanies from "@/components/app-companies.vue";
	import AppMarketing from "@/components/app-marketing.vue";
	import AppSales from "@/components/app-sales.vue";
	import AppAnalytics from "@/components/app-analytics.vue";
	import AppLogo from "@/components/app-logo.vue";
	import AppHelp from "@/components/app-help.vue";
	import AppOrganization from "@/components/app-organization.vue";
	// import AppContactCheckbox from "@/components/app-contact-checkbox.vue";

export default {
	components: {
		'app-checkbox': AppCheckbox,
		'app-drag-drop-icon': AppDropDragIcon,
		'app-plus': AppPlus,
		'app-magnifying': AppMagnifying,
		'app-edit': AppEdit,
		'app-trash': AppTrash,
		'app-task': AppTask,
		'app-dashboard': AppDashboard,
		'app-leads': AppLeads,
		'app-email': AppEmails,
		'app-library': AppLibrary,
		'app-lists': AppLists,
		'app-contacts': AppContacts,
		'app-companies' : AppCompanies,
		'app-marketing' : AppMarketing,
		'app-sales' : AppSales,
		'app-analytics' : AppAnalytics,
		'app-logo' : AppLogo,
		'app-help' : AppHelp,
		'app-organization' : AppOrganization 
		// 'app-contact-checkbox' : AppContactCheckbox
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

.header tr {
	margin-right: 100px;
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
	min-width: 225px;
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
	 width: 100%;
    height: 100%;
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
    color: white;
	font-size: 14px;
    font-weight: 500;
	font-family: Roboto,sans-serif;
	display: flex;
	position: relative;
	justify-items: center;
    align-items: center;
}

.createContact svg {
	margin-left: 8px;
    height: 18px;
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

/* .plusIcon { */
	/* position: absolute; */
/* } */

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

.footer-option {
	display: flex;
	color: #877d88;
	padding: 5px 15px;
	justify-content: space-between;
}

.footer-option p {
	font-family: roboto,sans-serif;
	font-size: 14px;
	color: #877d88;
	justify-content: space-between;
}

.footer-option select {
	margin-left: 10px;
	color: #adadad;
	background-color: #f7f7f8;
	border-radius: 22px;
	border: 2px solid #cac6cb;
	padding: 8px 27px 0 14px;
	width: 81px;
	height: 36px;
}

.dropdown {
	display: flex;
}

.pages {
	max-width: 237px;
	display: flex;
	align-items: center;
}

.pages p {
	margin: 0;
}

.pages .one {
	height: 28px;
	background: transparent;
	border: none;
	border-radius: 25px;
	color: #877d88;
	padding: 4px 10px;
	margin: 0 2px;
	outline: none;
}

.pages .two {
	background: #f30070;
	border: none;
	height: 28px;
	border-radius: 25px;
	padding: 4px 10px;
	margin: 0 2px;
	outline: none;
}

.pages .two p {
	color: #fff;
}

.pages .three {
	padding: 5px 15px;
	border-radius: 9px;
	border-top: 1px solid #eee;
	background: transparent;
	border: none;
	height: 28px;
}

.pages .four {
	padding: 5px 15px;
	border-radius: 9px;
	border-top: 1px solid #eee;
	background: transparent;
	border: none;
	height: 28px;
}

.edit-icon {
	background-color: #382153;
	width: 100px;
	display: flex;
	height: 42px;
	justify-content: flex-start;
	align-items: center;
	border-top-left-radius: 21px;
	border-bottom-left-radius: 21px;
}

.edit-icon svg {
	margin: 15px;
}

.site-navigation {
	display: flex;
}

.nav-bar {
    height: 950px;
	display: flex;
}

.nav-bar .first {
	width: 79px;
	height: 950px;
	background: #382153;
	text-align: center;
	color: #fff;
    font-size: 12px;
}

.nav-bar .first .logo {
	margin: 7px 0 23px 0;
}

.nav-bar .second {
	width: 220px;
	height: 950px;
	background: #fff;
}

.nav-bar .second li {
	list-style: none;
	padding: 0 15px;
    margin-bottom: 20px;
}

.nav-bar .second ul {
	padding: 20px 0;
    margin-bottom: 0;
}

.nav-bar .contacts-tab {
	background: transparent linear-gradient(79deg,#ff5a6f,#f2cf80) 0 0 no-repeat padding-box;
    padding: 5px 10px;
    border-radius: 15px;
    color: #fff;
}

.option-container {
	width: 100%;
    justify-content: flex-end;
}

.tabs {
	padding: 5px 10px;
    border-radius: 15px;
}

.group {
	display: flex;
	align-items: center;
	padding: 5px 10px;
    border-radius: 15px;
}

.group svg {
	width: 18px;
	height: 18px;
}

.second h4 {
	color: #ff5a6f;
    margin: 0;
    font-family: Nunito,sans-serif;
    font-weight: 800;
    line-height: 1em;
    margin-top: 0;
    font-size: 18px;
}

.second-header {
	margin-bottom: 0;
    padding: 16px 20px 10px;
}

.first svg {
	height: 25px;
	width: 25px;
}
</style>
