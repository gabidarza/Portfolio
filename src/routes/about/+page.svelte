<script>
	import { Instagram, InstagramIcon, Mail } from 'lucide-svelte';
</script>

<div class="container">
	<div>
		<h1>Hello, <br />I am Gabi</h1>
		<p>
			I am a photographer, artist, and designer based in San Francisco. Art, culture, travel,
			nature, music, and people are some of the things in life that make me happiest. As I continue
			my journey, I hope to share my skills and interests with you.
		</p>
		<p>If you have questions about my work or would just like to chat, feel free to reach out!</p>

		<ul>
			<li>
				<Instagram size={19} /><a href="https://www.instagram.com/darza.darkroom/" target="_blank">
					darza.darkroom</a
				>
			</li>
			<li>
				<Mail size={18} /><a href="mailto:gabidarza@gmail.com" class="icon mail"
					>gabidarza@gmail.com</a
				>
			</li>
		</ul>
	</div>

	<div class="profile-image"></div>
</div>

<style>
	ul li {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 8px;
		align-items: center;
	}
	.container {
		display: grid;
		gap: 24px;
		align-items: stretch;
		align-content: stretch;
		height: 100%;
		grid-template-columns: 1fr 1fr;
		> div:first-child {
			background: transparent;
			align-content: center;
		}

		.profile-image {
			background-image: url('/images/gabi.jpeg');
			background-position: center;
			border-radius: 1rem;
		}

		h1 {
			font-size: 100px;
			line-height: 90%;
			font-weight: bold;
			padding-top: 50px;
			padding-bottom: 50px;
		}

		p {
			font-size: 16px;
			line-height: 25px;
			padding-top: 10px;
			padding-bottom: 10px;
		}

		a {
			text-decoration: none;
			color: black;
		}

		.fa {
			padding-right: 20px;
		}
		@media (max-width: 640px) {
			grid-template-columns: 1fr;
			.profile-image {
				grid-row: -1;
				width: 100%;
				padding-top: 100%;
			}
			h1 {
				font-size: 40px;
				padding: 20px 0;
			}
		}
	}
</style>
