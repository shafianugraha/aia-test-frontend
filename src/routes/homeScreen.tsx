import React from "react"
import { API_ENDPOINT } from "../config"
import axios from 'axios'
import clsx from 'clsx'

import { ImageFeed } from '../App'
import PhotoCard from '../components/PhotoCard'

const HomeScreen: React.FunctionComponent = () => {
  const [imageFeed, setImageFeed] = React.useState<ImageFeed[]>([])

  const getImageFeed = async () => {
    const response = await axios.get(`${API_ENDPOINT}/feed`)
    const data = await response.data.data
    setImageFeed(data)
  }

  React.useEffect(() => {
    getImageFeed();
  }, [])

  return (
    <div className={clsx('flex items-center justify-center my-24')}>
      <div className={clsx('grid grid-cols-3 mx-10 justify-items-center content-center')}>
        {imageFeed.map((image, index) => {
          return (
              <PhotoCard data={image} key={index}/>
          )
        })}
      </div>
    </div>
  )
}

export default HomeScreen