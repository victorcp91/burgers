export interface IMenuSectionProps {
  id: number;
  src: string;
  name: string;
  active: boolean;
  setSection: (sectionId: number) => void;
}
