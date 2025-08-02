interface AvatarProps {
    src?: string
    alt?: string
    size?: "sm" | "md" | "lg"
    className?: string
  }
  
  export function Avatar({ src, alt = "Avatar", size = "md", className = "" }: AvatarProps) {
    const sizeClasses = {
      sm: "w-8 h-8",
      md: "w-12 h-12",
      lg: "w-16 h-16",
    }
  
    return (
      <div
        className={`${sizeClasses[size]} rounded-full overflow-hidden bg-neutral-800 border border-neutral-700 ${className}`}
      >
        {src ? (
          <img src={src || "/placeholder.svg"} alt={alt} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-neutral-400 font-medium">
            {alt.charAt(0).toUpperCase()}
          </div>
        )}
      </div>
    )
  }
  