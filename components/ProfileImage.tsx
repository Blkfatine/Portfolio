import Image from 'next/image'

interface ProfileImageProps {
  size?: 'small' | 'medium' | 'large'
  className?: string
}

export default function ProfileImage({ size = 'medium', className = '' }: ProfileImageProps) {
  const sizeClasses = {
    small: 'w-16 h-16',
    medium: 'w-48 h-48',
    large: 'w-64 h-64 md:w-80 md:h-80'
  }

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-700 rounded-full opacity-20 blur-xl"></div>
      <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary-600 shadow-2xl shadow-primary-600/30">
        <Image
          src="/images/profile.jpg"
          alt="Fatine Belkhammar"
          fill
          className="object-cover"
          priority
          sizes={size === 'large' ? '(max-width: 768px) 256px, 320px' : size === 'medium' ? '192px' : '64px'}
        />
      </div>
    </div>
  )
}
