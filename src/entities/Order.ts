export default interface Order {
  label: string;
  field: 'added' | 'created' | 'name' | 'released' | 'rating';
  reverse: boolean;
}
