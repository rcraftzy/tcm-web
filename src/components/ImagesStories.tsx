import Stories from "stories-react";
import "stories-react/dist/index.css";
import type { Story } from "../types";

export interface Props {
	stories: Story[];
  index: number;
}

const ImagesStories: React.FC<Props> = ({ stories, index = 0 }) => (
	<Stories
		stories={stories}
		pauseStoryWhenInActiveWindow={true}
		onAllStoriesEnd={() => {}}
    currentIndex={index}
    isPaused={true}
		classNames={{
			progressContainer: "mt-[19px] mx-10",
		}}
	/>
);
export default ImagesStories;
