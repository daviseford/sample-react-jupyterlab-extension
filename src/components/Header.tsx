import React from 'react'

export const Header = (): JSX.Element => {
  return (
    <div>
      <h1>This is a sample React-powered extension!</h1>
      <h3>
        <a
          href="https://daviseford.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'yellow' }}
        >
          by Davis E. Ford
        </a>
      </h3>
    </div>
  )
}
