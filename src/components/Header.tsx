import React from "react"

const Header: React.FunctionComponent = () => {
  return (
    <header data-cy="header-background" className="bg-[#16ABF8] w-full h-[105px]">
      <div className="max-w-[1000px] flex h-full items-center mx-40">
        <h1 data-cy="header-title" className="font-bold text-2xl text-white">
          PHOTO FEED
        </h1>
      </div>
    </header>
  )
}

export default Header
