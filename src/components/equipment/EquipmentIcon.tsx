
import { CameraIcon, VideoIcon, NetworkIcon, ServerIcon, WifiIcon, RouterIcon, MonitorIcon } from "lucide-react";

type EquipmentType = 'camera' | 'video-recorder' | 'switch' | 'server' | 'antenna' | 'router' | 'pc';

interface EquipmentIconProps {
  type: EquipmentType | string;
  className?: string;
}

export const EquipmentIcon = ({ type, className = "w-5 h-5" }: EquipmentIconProps) => {
  switch(type) {
    case 'camera':
      return <CameraIcon className={className} />;
    case 'video-recorder':
      return <VideoIcon className={className} />;
    case 'switch':
      return <NetworkIcon className={className} />;
    case 'server':
      return <ServerIcon className={className} />;
    case 'antenna':
      return <WifiIcon className={className} />;
    case 'router':
      return <RouterIcon className={className} />;
    case 'pc':
      return <MonitorIcon className={className} />;
    default:
      return <ServerIcon className={className} />;
  }
};
