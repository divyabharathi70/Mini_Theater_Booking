import { useState } from 'react'

const useCustomHooks = () => {
  const [value, setValue] = useState(0)

  const handleChange = () => {
    setValue(value + 1)
  }

  return { value, handleChange }
}

export default useCustomHooks 