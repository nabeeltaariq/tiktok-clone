import React, { useRef, useState } from 'react'
import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar'
import './Video.css'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import PauseIcon from '@material-ui/icons/Pause'

function Video({ url, channel, description, song, likes, messages, shares }) {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef(null)

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause()
      setPlaying(false)
    } else {
      videoRef.current.play()
      setPlaying(true)
    }
  }

  return (
    <div className='video'>
      {playing ? (
        <PauseIcon className='video__playpause' fontSize='large' />
      ) : (
        <PlayArrowIcon className='video__playpause' fontSize='large' />
      )}
      <video
        className='video__player'
        loop
        onClick={onVideoPress}
        ref={videoRef}
        src={url}
      ></video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
    </div>
  )
}

export default Video
