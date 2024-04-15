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
    loop={true}
		classNames={{
      main: "main-story",
      progressContainer: "progress-story mt-[19px] mx-10 invisible hover:visible",
		}}
	/>
);
export default ImagesStories;
