import React from "react"
import clsx from 'clsx'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import { ImageFeed } from '../App'

type photoCardProps = {
  data: ImageFeed
  key: number
}

const PhotoCard: React.FunctionComponent<photoCardProps> = ({data, key}) => {
  return (
    <div key={key} className={clsx('flex w-fit h-fit my-auto mx-2 relative')}>
      <div className={clsx('w-full h-full bottom-0 left-0 absolute bg-gradient-to-t from-black opacity-0 hover:opacity-70')}>
        <p className={clsx('text-sm text-left text-white absolute left-5 bottom-10')}>{data.title}</p>
        <p className={clsx('text-xs text-left text-white absolute left-5 bottom-5')}>{data.author}</p>
      </div>
      <LazyLoadImage src={data.media?.m} alt='images' width='300px' height='300px'/>
    </div>
  )
}

export default PhotoCard