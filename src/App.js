import React from 'react'
import { useState, useEffect } from 'react'
import Video from './Video'
import './App.css'
import axios from './axios'

function App() {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get('/v2/posts')
      setVideos(response.data)
      return response
    }
    fetchPosts()
    console.log(videos)
  }, [])

  return (
    // BEM
    <div className='app'>
      <div className='app__videos'>
        {videos.map(
          ({
            id,
            url,
            channel,
            description,
            song,
            likes,
            messages,
            shares,
          }) => (
            <Video
              key={id}
              url={'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'}
              channel={channel}
              song={song}
              likes={likes}
              messages={messages}
              description={description}
              shares={shares}
            />
          )
        )}
      </div>
    </div>
  )
}

export default App
