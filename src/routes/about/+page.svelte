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
				<i class="fa fa-instagram" style="font-size:24px"></i><a
					href="https://www.instagram.com/darza.darkroom/"
				>
					darza.darkroom</a
				>
			</li>
			<li>
				<i class="fa fa-envelope-o" style="font-size:20px"></i><a
					href="mailto:gabidarza@gmail.com"
					class="icon mail">gabidarza@gmail.com</a
				>
			</li>
		</ul>
	</div>

	<div class="profile-image"></div>
</div>

<style>
	.container {
		display: grid;
		gap: 24px;
		align-items: stretch;
		align-content: stretch;
		height: 100%;
		grid-template-columns: 1fr 1fr;
		> div:first-child {
			background: transparent;
		}

		.profile-image {
			background-image: url('/images/gabi.jpeg');
			background-position: center;
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
			img {
				grid-row: -1;
			}
			h1 {
				font-size: 40px;
				padding: 20px 0;
			}
		}
	}
</style>
