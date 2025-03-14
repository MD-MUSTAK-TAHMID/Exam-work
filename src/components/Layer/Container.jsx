import React from 'react'

const Container = ({className,children}) => {
  return (
    <div className={`mx-auto w-[1279px] ${className}`}>
        {children}
    </div>
  )
}

export default Container