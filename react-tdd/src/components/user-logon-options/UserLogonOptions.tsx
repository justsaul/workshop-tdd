import { useState } from "react"

export function UserLogonOptions() {
  const [isRegisterAvailable, setIsRegisterAvailable] = useState(true);

  return (
    <>
      <button
        onClick={() => {
          setIsRegisterAvailable((value) => !value)
        }}
      >Toggle register availability</button>
      <button>Sign In</button>
      {isRegisterAvailable ? <button>Register</button> : null}
    </>
  )
}