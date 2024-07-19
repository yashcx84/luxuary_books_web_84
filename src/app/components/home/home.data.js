export const HomeData = {
	errorCode: 200,
	success: true,
	message: "",
	result: {
		bannerWelcome: "Welcome! Here you can learn a bit more about Kshamta and her first novel.",
		bannerData: [
			{
				bookImage: '/images/book_image.jpg',
				cta: {
					text: "The Story",
					link: "/bookdetails?bookName=${encodeURIComponent('Karma Sagas The Sangam: 1')}"
				}
			}
		],
		aboutBook: {
			logoImage: "logoUrlor add it to static",
			cta: {
				text: "Learn More",
				link: "/aboutus"
			}
		},
		bookJourney: {
			headerText: "The Characters and places",
			cta: {
				text: "Get the book",
				link: "/shop"
			},
			characters: [
				{
					bookImageUrl: "/images/joash_pundit.jpeg",
					title: "Joash Pundit",
					description: "Joash Pundit - a science journalist. Torn between the past and future, science and mysticism, will he find the answers?",
					backgroundImageUrl: "somebackgroundImageURL"
				},
				{
					bookImageUrl: "/images/Krupa.png",
					title: "Krupa",
					description: "Krupa, a feisty yogini, lives in a monastery (the Ashram) in the Himalayas.",
					backgroundImageUrl: "somebackgroundImageURL"
				},
				{
					bookImageUrl: "/images/Swamiji.png",
					title: "Swamiji",
					description: "Swamiji is Krupa's spiritual teacher and the head of the Ashram.",
					backgroundImageUrl: "somebackgroundImageURL"
				},
				{
					bookImageUrl: "/images/tejas.png",
					title: "Tejas",
					description: "Tejas is the yogini who knows fire, she lives deep in the jungles.",
					backgroundImageUrl: "somebackgroundImageURL"
				},
				{
					bookImageUrl: "/images/Callum_Bailey.png",
					title: "Callum",
					description: "Callum is a bright teenager from Glasgow, with a sunshine smile, he spreads happiness wherever he goes.",
					backgroundImageUrl: "somebackgroundImageURL"
				},
				{
					bookImageUrl: "/images/Jaggu_baba.webp",
					title: "Jaggu Baba",
					description: "Jaggu Baba is an enigma, no one can understand what he really wants.",
					backgroundImageUrl: "somebackgroundImageURL"
				},
				{
					bookImageUrl: "/images/book_bg_odd.png",
					title: "London reeling",
					description: "London reeling with relentless rains, this is where the story begins.",
					backgroundImageUrl: "somebackgroundImageURL"
				},
				{
					bookImageUrl: "/images/book_bg_even.webp",
					title: "The Himalayas",
					description: "The Himalayas near Jispa.",
					backgroundImageUrl: "somebackgroundImageURL"
				}
			]
		},
	}
}