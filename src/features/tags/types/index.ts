type Divider = 'vertical' | 'horizontal';

export type TagsProps = {
  divider?: Divider;
  styles?: string;
  titleStyles?: string;
  listItemStyles?: string;
};

export type TagType = {
  id: number | string;
  name: string;
  userId: number | string;
};
