<template>
	<header>
		<span class="logo"> 
		<img src="../assets/logo.png" alt="logo"/>
	</span>
	</header>
	<section>
		<div class="topBanner">
			<div class="sliderWrapper">
				<carousel :autoplay="5000" :wrap-around="true" v-bind="settings" :breakpoints="breakpoints">
					<slide v-for="slide in sliderPath" :key="slide">
						<div class="sliderImage" :style="{backgroundImage:`url(${slide})`}"></div>
					</slide>
				</carousel>
			</div>
			<div class="bannerBottomContent">
				<span class="label">Download offical ReserveMyHall App</span>
				<a href="https://play.google.com/store/apps/details?id=com.reservemyhall" target="_blank"><img src="../assets/playstore.png" alt="playstore"/></a>
			</div>
		</div>
		<div class="infoContent">
			<div class="infoContent_desc">
				<h5>How to use</h5>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
			</div>
			<div class="infoContent_video">
				<iframe width="100%" src="https://www.youtube.com/embed/tgbNymZ7vqY">
				</iframe>
			</div>
		</div>
	</section>
	<footer>
		<div class="content_left">
			<div class="leftWrapper">
				<span class="logo">
					<img src="../assets/logo.png" alt="logo"/>
				</span>
				<ul>
					<li>
						<a href="https://www.facebook.com/reservemyhall/" target="_blank">
							<img src="../assets/facebook1.webp" alt="image" />
						</a>
					</li>
					<li>
						<a href="https://twitter.com/reservemyhall/" target="_blank">
							<img src="../assets/twitter1.webp" alt="image" />
						</a>
					</li>
					<li>
						<a href="https://www.instagram.com/reservemyhall/" target="_blank">
							<img src="../assets/instagram.webp" alt="image" />
						</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="content_right">
			<div class="contactUs">
				<p>Have a question or need help? Contact us – we're here for you!</p>
				<p><a href="tel:+919751725776">+91 97517 25776</a></p>
				<p><a href="mailto:reservemyhall777@gmail.com">reservemyhall777@gmail.com</a></p>
			</div>
			<div class="copyRight">
				<p>CORPORATE OFFICE</p>
				<p>Copyright 2023 © ReserveMyHall. All Rights Reserved.</p>
			</div>
		</div>
	</footer>
</template>

<script src="./js/header.js">

</script>

<style scoped>
header {
	position: fixed;
	left: 10px;
	top: 10px;
	z-index: 99;
}

span.logo {
	color: #fff;
	font-size: 28px;
	font-weight: 800;
}

.logo img {
	width: 100px;
	border-radius: 4px;
}

.topBanner {
	display: flex;
	justify-content: center;
	align-items: flex-end;
	border-bottom: 1px solid;
}

.topBanner {
	display: flex;
	justify-content: center;
	align-items: flex-end;
	border-bottom: 1px solid;
	flex-direction: column;
	position: relative;
}

.bannerBottomContent {
	width: 37%;
	display: flex;
	min-height: 61px;
	padding: 15px;
	background: #fff;
	border-top-left-radius: 15px;
	border-top-right-radius: 15px;
	align-items: center;
	justify-content: center;
	position: absolute;
	bottom: 0;
	margin: 0 auto;
	left: 32%;
}
.bannerBottomContent img {
	width: 150px;
	padding-left: 15px;
	padding-top: 6px;
}
.bannerBottomContent .label {
	font-size: 23px;
	line-height: 26px;
	background: linear-gradient(to right, #E10000 0%, #2B0101 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	text-align: center;
}

.bannerBottomContent input {
	background-color: #fff;
	border: 1px solid #e8e8e8;
	box-sizing: border-box;
	color: #a8a8a8;
	font-weight: normal;
	float: left;
	font-size: 13px;
	height: 40px;
	position: relative;
	padding: 10px;
	width: 250px;
	border-radius: 15px;
}

.bannerBottomContent button {
	background: radial-gradient(circle, rgba(16, 158, 56, 1) 0%, rgba(9, 84, 30, 0.8870141806722689) 100%);
	border: 0;
	border-radius: 15px;
	color: #fff;
	width: 140px;
	height: 35px;
	font-weight: 600;
}

.infoContent_desc p {
	text-align: center;
	color: #4D4D4D;
	font-size: 14px;
	line-height: 20px;
}

.infoContent_desc h5 {
	text-align: center;
	font-size: 20px;
	color: #1a1a1a;
	margin-top: 0px;
	padding-top: 20px;
	margin-bottom: 10px;
	line-height: normal;
}

.infoContent {
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: #f5f5f5;
	min-height: 400px;
}

.infoContent_desc,
.infoContent_video {
	flex: 1;
	max-width: 50%;
	align-self: center;
	padding: 20px 0;
}

.infoContent_video {
	width: 80%;
	margin: 20px 20px;
}

.infoContent_video iframe {
	height: 315px;
}

footer {
	background: radial-gradient( circle farthest-corner at 10% 20%, rgba(100, 43, 115, 1) 0%, rgba(4, 0, 4, 1) 90%);
	/* background: #373737; */
	color: #fff;
	padding: 42px 0;
	min-height: 350px;
	color: #fff;
	display: flex;
	flex-direction: row;
}

.content_left {
	flex: 1;
	text-align: center;
}

.content_right {
	flex: 1;
	text-align: left;
	border-left: 1px solid;
	padding-left: 60px;
	display: flex;
	flex-direction: column;
}

/* footer {
	background: #373737;
	color: #fff;
	padding-top: 62px;
	min-height: 400px;
	color: #fff;
} */

.content_left {
	flex: 1;
	text-align: center;
	justify-content: center;
	display: flex;
}

.leftWrapper {
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.leftWrapper .logo img {
	width: 100px;
	border: 1px solid;
	border-radius: 4px;
	float: left;
}

.content_left .leftWrapper>span {
	font-size: 30px;
	padding-bottom: 20px;
	width: 100%;
}

.content_left ul {
	list-style: none;
	padding: 0;
}

.content_left li {
	float: left;
	padding-right: 10px;
}

.content_left li img {
	width: 32px;
}

.contactUs {
	height: 100%;
}
.contactUs a {
    color: #fff;
}
.content_right p {
	font-size: 16px;
}

.contactUs button {
	background: transparent;
	border: 1px solid #fff;
	padding: 10px;
	border-radius: 4px;
	color: #fff;
	font-size: 16px;
	margin: 20px 0;
}

.sliderImage {
	width: 100%;
	height: 550px;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
}

.sliderWrapper {
	width: 100%;
}

@media only screen and (max-width: 960px) {
	.sliderImage {
		height: 290px;
	}
	.logo img {
		width: 60px;
	}
	header {
		position: fixed;
		z-index: 9999999;
		top: 10px;
		left: 10px;
		padding-left: 0
	}
	.bannerBottomContent .label {
    font-size: 18px;
	}
	.bannerBottomContent img {
    width: 150px;
    padding-left: 0;
    padding-top: 16px;
	}
	.bannerBottomContent {
		width: 97%;
		height: auto;
		align-items: center;
		justify-content: center;
		position: static;
		bottom: 0;
		flex-direction: column;
		border-radius: 4px;
		margin: 1.5%;
		left: 0;
	}

	.infoContent_desc,
	.infoContent_video {
		max-width: 90%;
	}
	.infoContent_video iframe {
		height: 195px;
	}
	footer {
		flex-direction: column;
		padding: 43px;
	}
	.content_right {
		flex: 1;
		text-align: center;
		border-top: 1px solid;
		border-left: 0;
		padding-left: 0;
		padding-top: 42px;
		margin-top: 42px;
	}
	.contactUs {
		padding-bottom: 30px;
	}
	.leftWrapper .logo img {
		float: none;
	}
	.bannerBottomContent input {
		width: 100%;
	}
}
</style>