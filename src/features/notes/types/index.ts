import { TagType } from '../../tags/types';

export type NoteType = 'active' | 'archived';

export type ActionButtons = {
  type: NoteType;
  styles?: string;
  showActionButtons?: boolean;
};

export type ActionButtonsMobileProps = Partial<ActionButtons>;
export type ActionButtonsDesktopProps = Partial<ActionButtons>;
// export type ActionButtonsDesktopProps = Partial<
//   Omit<ActionButtons, "showActionButtons">
// >;

export type NoteProps = {
  id: number | string;
  userId: number | string;
  title: string;
  content: string;
  isArchived: boolean;
  createdAt: string;
  updatedAt: string;
  tagIds: string[];
};

export interface PopulatedNote extends Omit<NoteProps, 'tagIds'> {
  tags: TagType[];
}

// type NoteItemKeys = "title" | "content" | "tags" | "updatedAt"

export type NoteItem = {
  note: NoteInListType;
  onNoteSelect: () => void;
};

export type NoteInListType = Pick<
  PopulatedNote,
  'title' | 'tags' | 'createdAt'
>;

export type NoteForReviewType = Pick<
  PopulatedNote,
  'title' | 'content' | 'tags' | 'updatedAt'
>;
// export type NoteItem = Pick<PopulatedNote, "title" | "tags" | "createdAt"> & {onNoteSelect: () => void;}
// export type NotePreviewProps = Pick<PopulatedNote, "title" | "content" | "tags" | "updatedAt"> & {showNote?: boolean;}
export type NotePreviewProps = {
  note: NoteForReviewType | undefined;
  showNote?: boolean;
};

export interface NoteInput {
  title: string;
  content: string;
  tagIds: string[];
}

export type EmptyPageProps = {
  noteType: 'active' | 'archived';
  activeTabText?: string;
};

export type EmptyNoteProps = Omit<EmptyPageProps, 'activeTabText'>;
