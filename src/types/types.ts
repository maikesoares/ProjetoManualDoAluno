export interface SubItem {
  id: string;
  title: string;
  onPress?: () => void;
}

export interface MenuItem {
  id: string;
  title: string;
  subItems: SubItem[];
}
