import { tw } from 'twind';
import Preferences from '@/constants/svg/preferences.svg';
import Play from '@/constants/svg/play.svg';

const PlayButton = () => (
  <button
    type="button"
    className={tw(
      `w-64 lg:w-auto absolute top-full left-1/2 flex items-center transform
      -translate-y-1/2 -translate-x-1/2 bg-white rounded-full font-medium group p-4 shadow-xl`,
    )}
    aria-label="play video"
  >
    <Play className={tw(`w-6 h-6 fill-current text-gray-400 group-hover:text-blue-600 flex-shrink-0`)} />
    <span className={tw(`ml-3`)}>サービス紹介動画</span>
  </button>
);

const VideoSection = () => (
  <section className={tw(`bg-gradient-to-b from-gray-50 to-white shadow-inner`)}>
    <div className={tw(`max-w-7xl mx-auto`)}>
      <div className={tw(`flex flex-col max-w-4xl mx-auto pt-28`)}>
        <div className={tw(`w-full`)}>
          <div className={tw(`relative shadow-2xl mx-6 lg:mx-0`)}>
            <iframe
              width="100%"
              height="500px"
              src="https://www.youtube.com/embed/vthaqbTZGbw"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
            <PlayButton />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default VideoSection;
