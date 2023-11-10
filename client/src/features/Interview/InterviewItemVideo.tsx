import React from 'react';
import { useSelector } from 'react-redux';
import YouTube, { YouTubeProps } from 'react-youtube';
import { RootState } from '../../redux/store';
import { useParams } from 'react-router';


export default function InterviewItemVideo() {
  const { interviewId } = useParams();
const ints = useSelector((store:RootState)=> store.interviews.interviews)
const int = ints.find((el) => el.id===interviewId)
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  const opts: YouTubeProps['opts'] = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return <YouTube videoId={int?.url_video} opts={opts} onReady={onPlayerReady} />;
}