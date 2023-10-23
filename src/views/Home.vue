<template>
	<header class="header"> 
		<div class="users">
			<svg class="usersS" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
			<rect width="18" height="18" fill="url(#pattern0)"/>
			<defs>
			<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
			<use xlink:href="#image0" transform="scale(0.0151515)"/>
			</pattern>
			<image id="image0" width="66" height="66" xlink:href="data:image/png;base64,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"/>
			</defs>
			</svg>
			<p class="dialogs">Список диалогов</p>
			<routerLink to="/user" class="profileItem">
				<p class="profile-text">Профиль</p>
				<svg  class="profile" height="22px" viewBox="0 0 512 512" width="22px" xmlns="http://www.w3.org/2000/svg"><path d="m437.019531 74.980469c-48.351562-48.351563-112.640625-74.980469-181.019531-74.980469-68.382812 0-132.667969 26.628906-181.019531 74.980469-48.351563 48.351562-74.980469 112.636719-74.980469 181.019531 0 68.378906 26.628906 132.667969 74.980469 181.019531 48.351562 48.351563 112.636719 74.980469 181.019531 74.980469 68.378906 0 132.667969-26.628906 181.019531-74.980469 48.351563-48.351562 74.980469-112.640625 74.980469-181.019531 0-68.382812-26.628906-132.667969-74.980469-181.019531zm-308.679687 367.40625c10.707031-61.648438 64.128906-107.121094 127.660156-107.121094 63.535156 0 116.953125 45.472656 127.660156 107.121094-36.347656 24.972656-80.324218 39.613281-127.660156 39.613281s-91.3125-14.640625-127.660156-39.613281zm46.261718-218.519531c0-44.886719 36.515626-81.398438 81.398438-81.398438s81.398438 36.515625 81.398438 81.398438c0 44.882812-36.515626 81.398437-81.398438 81.398437s-81.398438-36.515625-81.398438-81.398437zm235.042969 197.710937c-8.074219-28.699219-24.109375-54.738281-46.585937-75.078125-13.789063-12.480469-29.484375-22.328125-46.359375-29.269531 30.5-19.894531 50.703125-54.3125 50.703125-93.363281 0-61.425782-49.976563-111.398438-111.402344-111.398438s-111.398438 49.972656-111.398438 111.398438c0 39.050781 20.203126 73.46875 50.699219 93.363281-16.871093 6.941406-32.570312 16.785156-46.359375 29.265625-22.472656 20.339844-38.511718 46.378906-46.585937 75.078125-44.472657-41.300781-72.355469-100.238281-72.355469-165.574219 0-124.617188 101.382812-226 226-226s226 101.382812 226 226c0 65.339844-27.882812 124.277344-72.355469 165.578125zm0 0"/></svg>
			</routerLink>
			
		</div>
	</header>
	<section class="content">
		<div class="search">
			<input class="input" placeholder="Поиск пользователей">
		</div>
		<div class="messages">
			<div class="message">
				<div class="user">
					<div class="user__img">
						<img src="https://topmsg.ru/wp-content/uploads/anonymous.jpg" alt="user">
					</div>
					<div class="hr"></div>
					<div class="user__name">Jack the Ripper</div>
					<div class="user__last-massage">fdsfdsfdsffffffjdlfjdl kj fdkj flksdj lfjls k fds  dsf d sf dsf</div>
					<div class="user__last-massage-date">10:10</div>  
					<div class="online"></div>  
				</div>
				<div class="user">
					<div class="user__img">
						<img src="https://topmsg.ru/wp-content/uploads/anonymous.jpg" alt="user">
					</div>
					<div class="hr"></div>
					<div class="user__name">Jack the Ripper</div>
					<div class="user__last-massage">fdsfdsfdsffffffjdlfjdl kj fdkj flksdj lfjls k fds  dsf d sf dsf</div>
					<div class="user__last-massage-date">10:10</div>  
					<div class="online"></div>  
				</div>
			</div>
			
		</div>
	</section>
</template>
<script>
export default {
	async created(){
   		await this.$store.dispatch('getCurrentUserInReload')
		   this.user = this.$store.getters.currentUser
	 },
	data() {
		return {
			user: ''
		}
	},
	methods: {
	},
	
}
</script>
<style lang="scss" scope>
	.profileItem {
		height: 30px;
		padding: 18px;
		display: flex;
		position: absolute;
		top: 0;
		right: 0;
	}
	.profile-text {
		margin-right: 10px;
		transition: .3s ease all;
		&:hover {
			color: #007bff;
		}
	}
	.profile {
		fill: #212529;
		opacity: .6;
		transition: .3s ease all;
		&:hover {
			fill: #007bff;
		}
	}
	.content {
		padding: 10px;
	}
	.input {
		outline: none;
		padding-left: 20px;
		border-radius: 10px;
		background-color: #F7F8F9;
		border: none;
		height: 40px;
		width: 100%;
		font-size: 16px;
		font-weight: 400;
		transition: .3s ease all;
		&::placeholder {
			padding: 0 0 12px 10px;
			color: #202020;
			opacity: .5;
		}
	}
	.search {
		margin-bottom: 40px;
	}
	.header {
		margin-bottom: 0px;
	}
	.usersS {
		margin-top: 2px;
		margin-bottom: 0px;
	}
	.users {
		display: flex;
		margin: 20px;
	}
	.dialogs {
		margin-left: 10px;
		font-size: 16px;
		font-weight: 400;
		color: #202020;
		font-weight: 400;
	}
	.user__img img{
		object-fit: cover;
		height: 60px;
		width: 60px;
		border-radius: 50%;
	}
	.user__name {
		font-weight: 500;
		margin-left: 20px;
	}
	.user__last-massage-date {
		
		position: absolute;
		top: 0;
		right: 0;
		font-size: 14px;
		font-weight: 400;
		opacity: .5;
		padding: 3px;
	}
	.user__last-massage {
		opacity: .7;
		height: 24px;
		width: 240px;
		overflow: hidden;
		position: absolute;
		bottom: 0;
		left: 0;
		margin-left: 80px;
		margin-bottom: 10px;
	}
	.online {
		position: absolute;
		bottom: 4px;
		left: 43px;
		height: 16px;
		width: 16px;
		border-radius: 50%;
		border: 4px solid #fff;
		background-color: green;
		z-index: 10;
	}
	.hr {
		border-top: 1px solid rgb(189, 189, 189);
		height: 1px;
		width: 80%;
		position: absolute; 
		top: 0;
		right: 0;
	}
	.user {
		position: relative;
		margin-bottom: 30px;
		padding-top: 3px;
		position: relative;
		display: flex;
		flex-wrap: wrap;
	}
</style>