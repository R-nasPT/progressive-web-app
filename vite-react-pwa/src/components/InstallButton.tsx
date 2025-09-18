import { usePWA } from '../hooks/usePWA'

export function InstallButton() {
  const { isInstallable, isInstalled, installApp } = usePWA()

  if (isInstalled) {
    return (
      <div className="install-status">
        ✅ แอปได้รับการติดตั้งแล้ว
      </div>
    )
  }

  if (!isInstallable) {
    return null
  }

  return (
    <button 
      onClick={installApp}
      className="install-button"
    >
      📱 ติดตั้งแอป
    </button>
  )
}
