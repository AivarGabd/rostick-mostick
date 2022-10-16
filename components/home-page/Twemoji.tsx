import React, { memo } from 'react'
import twemoji from 'twemoji'

const Twemoji = ({ emoji, className }: any) => (
  <span
    className={className}
    
    dangerouslySetInnerHTML={{
      __html: twemoji.parse(emoji, {
        folder: 'svg',
        ext: '.svg'
      })
    }}
  />
)

export default memo(Twemoji)