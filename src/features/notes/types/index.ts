export type NoteType = "active" | "archived";

export type ActionButtons = {
  type: NoteType;
  styles?: string;
  showActionButtons?: boolean;
};

export type Note = {
  id: number | string;
  userId: number;
  title: string;
  content: string;
  isArchived: boolean;
  createdAt: Date;
  updatedAt: Date;
  tagIds: string[];
};

export type Tag = {
  id: number | string;
  name: string;
};

export interface PopulatedNote extends Omit<Note, "tagIds"> {
  tags: Tag[];
}

export interface NoteInput {
  title: string;
  content: string;
  tagIds: string[];
}
