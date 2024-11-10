import React from 'react'

function YtVideo() {
  return (
    <div>
      <iframe
                    className="flex relative mx-auto justify-center rounded-lg ring-1 shadow-md shadow-lime-600 hover:ring-2 ring-lime-400 sm:w-[640px] sm:h-[360px] w-[360px] h-[198px]"
                    src="https://www.youtube.com/embed/1OCiv1ypo3k?mute=1&autoplay=0&controls=0&rel=0&loop=0&cc_load_policy=0"
                    title="How to Use"
                    alt="How to Use-Video"
                    // frameborder="0"
                    // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
    </div>
  )
}

export default YtVideo
