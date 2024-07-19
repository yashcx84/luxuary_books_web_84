export const AboutUsData = {
	errorCode: 200,
	success: true,
	message: "",
	result: {
		title: "About Author",
		imageUrl: "/images/author_img.jpeg",
		description: "Kshamta is an author, poetess, dentist, teacher, mum, cook and a Tolkien fan. Karma Sagas - The Sangam is her first book and she intends to write at least a few more. Her interest in consciousness, sustainability and climate change has led her to explore science, spirituality and philosophy. It was all getting a bit too serious so she thought why not bring it all together into an entertaining story? When she is not busy figuring out treatment plans or lost in a fantasy land, she loves talking to her son about all things science. Born not too far from the Thar desert in North India, she now calls North Yorkshire her home. She blames the serene and picturesque surroundings to make her want to write – a desire that had been peacefully sleeping since she was fourteen. But before that, she would make up stories and songs and even recite her poetry unabashedly at every opportunity.",
		usefulLinks: [
			{
				title: "Contact Information",
				link: "/contactus"
			},
			{
				title: "Frequently Asked Questions",
				link: "/contactus#faqsection"
			},
			{
				title: "Glossary of terms",
				// link: "/bookdetails#glossaryofterms"
				link: `/bookdetails?bookName=${encodeURIComponent('Karma Sagas The Sangam: 1')}#grossaryoftermssection`
			}
		],
		otherInfo: {
			description: `Born in Jaipur, the pink city of India, I am the second oldest of four siblings. We were a
			bunch of happy, noisy kids. The one person who has inspired me the most is my father. In
			the society I grew up in, girls had to be homemakers and demure. But my father has always
			wanted his daughters to be high achievers. He would say – ‘Don’t you worry about anything,
			do what you have to, I will always support you.’ Growing up I would listen to my father’s adventure stories with great interest and believed
them to be true. I used to make up my own songs and bedtime stories for my young cousins.
Interest in books started with Robin Cook novels and now it spans from Harry Potter to
Sapiens. I was naturally drawn to science too. I moved to Bengaluru in South India to study
dentistry. I had the best time of my life and got through dentistry books as well as lots of
novels. Determined to be an independent woman, I moved to the UK to move on in my
career. The first two years proved challenging, staying away from family in a foreign land on
my own was the hardest thing I had ever done.`,
			cta: {
				text: "Learn More",
				link: "/shop"
			}
		},
		testimonials: {
			title: "testmonial",
			reviews: [
				{
					name: "robin_reads04",
					lastUpdated: "Last updated on 25 Jan 2024",
					description: `Kshamta manages to bring both a dystopian future novel and mix it with spirituality and it really has you questioning throughout the novel. I absolutely loved how this book was set around a set of siblings navigating their quest in a dystopian future.
					This has to be one of my favourite reads of the year and I can't wait to see what happens next !!"`,
					rating: "5"
				},
				{
					name: "thebookishhermit",
					lastUpdated: "Last updated on 15 Feb 2024",
					description: "Purohit's writing is immersive and vivid, painting a rich and detailed world that feels both futuristic and rooted in tradition. The dynamic between the two siblings and their different perspectives on science and spirituality adds depth to the story, as they navigate through unforeseen challenges and unexpected malevolence threatening the world.",
					rating: "5"
				},
				{
					name: "Kathryn M.",
					lastUpdated: "Last updated on 01 Jan 2024",
					description: "This was a great concept for a dystopian future novel it worked well overall with what was going on. It worked as a opening chapter in this series. Kshamta Purohit creates a great concept and I enjoyed how good the characters worked with this universe. I can't wait to read more in this series.",
					rating: "5"
				},
				{
					name: "dems_book_dens",
					lastUpdated: "Last updated on 15 March 2024",
					description: `Wow! What a fantastic read and amazing debut. This YA dystopian story follows siblings Krupa and Joash in a thrilling journey across the Himalayas. The Sangam explores environmental issues, spirituality and ancient wisdom in this timely blending of traditional sageness and futuristic elements. Kshamta Purohit paints a totally believable, vivid and immersive world, and her writing is nothing short of amazing.`,
					rating: "5"
				}
			]
		}
	}
}