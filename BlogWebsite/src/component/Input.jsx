import React, {useId} from 'react'

const Input = React.forwardRef( function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref){
    const id = useId()
    return (
        <div className="w-full">
  {label && (
    <label
      className="inline-block mb-1 pl-1 text-sm font-medium text-gray-700"
      htmlFor={id}
    >
      {label}
    </label>
  )}

  <input
    type={type}
    id={id}
    ref={ref}
    className={`w-full px-4 py-2.5 rounded-xl 
      bg-gray-50/80 text-gray-900 placeholder-gray-400
      border border-gray-300 
      shadow-sm 
      focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400
      hover:border-indigo-300
      transition-all duration-200 ease-in-out
      ${className}`}
    {...props}
  />
</div>

    )
})

export default Input