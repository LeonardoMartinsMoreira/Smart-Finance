import Icon from '@expo/vector-icons/MaterialCommunityIcons'

interface SummaryIcon {
  icon: any
}
export default function SummaryIcon({ icon, ...props }: SummaryIcon) {
  return <Icon name={icon} {...props} />
}
