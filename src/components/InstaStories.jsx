import Stories from 'react-insta-stories';



const stories = [
	'https://example.com/pic.jpg',
	{
		url: '/videos/troca.mp4',
		duration: 5000,
		type: 'video',
	},
];

export const InstaStories = () => {
	return (
    <Stories
			stories={stories}
			defaultInterval={1500}
			width={328}
			height={568}
      loop
		/>
	);
};

