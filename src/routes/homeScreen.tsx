import React from "react"
import { API_ENDPOINT } from "../config"
import axios from 'axios'
import clsx from 'clsx'

import { ImageFeed } from '../App'

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
    <div className={clsx('flex items-center justify-center mt-24')}>
      <div className={clsx('grid grid-cols-3 mx-10 justify-self-auto')}>
        {imageFeed.map((image, index) => {
          return (
            <div key={index} className={clsx('flex w-96 h-96 items-center justify-center p-2')}>
              <img src={image?.media?.m || ''} alt='images' width='300px' height='300px'></img>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default HomeScreen