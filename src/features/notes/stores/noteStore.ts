import { create } from 'zustand';

import { getAllTags } from '../../tags/stores/tagStore';
import { TagType } from '../../tags/types';
import { NoteForReviewType, NoteProps, PopulatedNote } from '../types';

export const rawnotes: NoteProps[] = [
  {
    id: 'note1',
    userId: 'user1',
    title: 'Buy groceries',
    content: 'Milk, eggs, bread',
    isArchived: false,
    createdAt: '2025-05-21T10:00:00Z',
    updatedAt: '2025-05-21T10:00:00Z',
    tagIds: ['tag1', 'tag2'],
  },
  {
    id: 'note2',
    userId: 'user1',
    title: 'Buy groceries',
    content: 'Milk, eggs, bread',
    isArchived: false,
    createdAt: '2025-05-21T10:00:00Z',
    updatedAt: '2025-05-21T10:00:00Z',
    tagIds: ['tag1', 'tag3'],
  },
  {
    id: 'note3',
    userId: 'user2',
    title: 'Purchase at supermarket',
    content: 'Tea butter rice',
    isArchived: true,
    createdAt: '2025-05-21T10:00:00Z',
    updatedAt: '2025-05-21T10:00:00Z',
    tagIds: ['tag1', 'tag2'],
  },
  {
    id: 'note4',
    userId: 'user1',
    title: 'Buy groceries',
    content: 'Milk, eggs, bread',
    isArchived: false,
    createdAt: '2025-05-21T10:00:00Z',
    updatedAt: '2025-05-21T10:00:00Z',
    tagIds: ['tag1', 'tag2'],
  },
  {
    id: 'note5',
    userId: 'user2',
    title: 'Buy somethings',
    content: 'Cereals wheat maize',
    isArchived: true,
    createdAt: '2025-05-21T10:00:00Z',
    updatedAt: '2025-05-21T10:00:00Z',
    tagIds: ['tag1', 'tag2'],
  },
];

interface NoteState {
  notes: PopulatedNote[];
  activeNotes: PopulatedNote[];
  archivedNotes: PopulatedNote[];
  tags: TagType[];
  notesById: Map<string | number, PopulatedNote>;
  tagMap: Map<string | number, TagType>;
  notesByTag: Map<string, PopulatedNote[]>;
  getNotes: () => PopulatedNote[] | undefined;
  getNoteById: (id: string | number) => NoteForReviewType | undefined;
  setNotes: (notes: PopulatedNote[]) => void;
  setTags: (tags: TagType[]) => void;
  getNotesByTag: (tag: string) => PopulatedNote[] | undefined;
  getActiveNotes: () => PopulatedNote[] | undefined;
  getArchivedNotes: () => PopulatedNote[] | undefined;
}

export const useNoteStore = create<NoteState>((set, get) => {
  const initialTags = getAllTags();
  const tagMap = new Map(initialTags.map(tag => [tag.id, tag]));
  const populatedNotes = populateNotesEfficiently(
    rawnotes,
    initialTags,
    tagMap,
  );

  const notesById = new Map(populatedNotes.map(note => [note.id, note]));
  const archivedNotes = populatedNotes.filter(note => note.isArchived);
  const activeNotes = populatedNotes.filter(note => !note.isArchived);

  const notesByTag = new Map<string, PopulatedNote[]>();
  for (const note of activeNotes) {
    for (const tag of note.tags) {
      if (!notesByTag.has(tag.name)) {
        notesByTag.set(tag.name, []);
      }
      notesByTag.get(tag.name)?.push(note);
    }
  }

  return {
    notes: populatedNotes,
    tags: initialTags,
    archivedNotes,
    activeNotes,
    notesById,
    tagMap,
    notesByTag,

    getNotes: () => {
      return get().notes;
    },
    getArchivedNotes: () => {
      return get().archivedNotes;
    },
    getActiveNotes: () => {
      return get().activeNotes;
    },

    getNoteById: (id: string | number) => {
      const note = get().notesById.get(id);
      if (!note) return undefined;

      const tags = note.tags
        .map((tag: TagType) => tagMap.get(tag.id))
        .filter(Boolean) as TagType[];

      return { ...note, tags };
    },

    setNotes: (notes: PopulatedNote[]) => {
      const notesById = new Map(notes.map(note => [note.id, note]));
      const notesByTag = new Map<string, PopulatedNote[]>();
      const archivedNotes = notes.filter(note => note.isArchived);
      const activeNotes = notes.filter(note => !note.isArchived);
      for (const note of activeNotes) {
        for (const tag of note.tags) {
          if (!notesByTag.has(tag.name)) {
            notesByTag.set(tag.name, []);
          }
          notesByTag.get(tag.name)?.push(note);
        }
      }

      set({
        notes,
        notesById,
        notesByTag,
        activeNotes,
        archivedNotes,
      });
    },

    setTags: (tags: TagType[]) => {
      set({
        tags,
        tagMap: new Map(tags.map(tag => [tag.id, tag])),
      });
    },

    getNotesByTag: (tagName: string): PopulatedNote[] | undefined => {
      return get().notesByTag.get(tagName);
    },
  };
});

export function populateNotesEfficiently(
  notes: NoteProps[],
  tags: TagType[] = [],
  tagMap?: Map<string | number, TagType>,
): PopulatedNote[] {
  const map = tagMap ?? new Map(tags.map(tag => [tag.id, tag]));

  return notes.map(note => ({
    ...note,
    tags: note.tagIds.map(id => map.get(id)).filter(Boolean) as TagType[],
  }));
}
