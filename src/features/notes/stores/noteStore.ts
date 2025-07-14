import { create } from 'zustand';

import { getAllTags } from '../../tags/stores/tagStore';
import { TagType } from '../../tags/types';
import { NoteForReviewType, NoteProps } from '../types';

// export const rawnotes: NoteProps[] = [
//   {
//     id: 'note1',
//     userId: 'user1',
//     title: 'Buy Mangoes',
//     content: 'Milk, eggs, bread',
//     isArchived: false,
//     createdAt: '2025-05-21T10:00:00Z',
//     updatedAt: '2025-05-21T10:00:00Z',
//     tags: [
//       { id: 'tag1', name: 'Dev', userId: 'user1' },
//       { id: 'tag2', name: 'React', userId: 'user1' },
//     ],
//   },
//   {
//     id: 'note2',
//     userId: 'user2',
//     title: 'Buy something',
//     content: 'Milk, eggs, bread',
//     isArchived: false,
//     createdAt: '2025-05-21T10:00:00Z',
//     updatedAt: '2025-05-21T10:00:00Z',
//     tags: [
//       { id: 'tag1', name: 'Dev', userId: 'user2' },
//       { id: 'tag3', name: 'Personal', userId: 'user2' },
//     ],
//   },
//   {
//     id: 'note3',
//     userId: 'user2',
//     title: 'Purchase at supermarket',
//     content: 'Tea butter rice',
//     isArchived: true,
//     createdAt: '2025-05-21T10:00:00Z',
//     updatedAt: '2025-05-21T10:00:00Z',
//     tags: [
//       { id: 'tag1', name: 'Dev', userId: 'user2' },
//       { id: 'tag2', name: 'React', userId: 'user2' },
//     ],
//   },
//   {
//     id: 'note4',
//     userId: 'user1',
//     title: 'Buy groceries',
//     content: 'Milk, eggs, rice',
//     isArchived: false,
//     createdAt: '2025-05-21T10:00:00Z',
//     updatedAt: '2025-05-21T10:00:00Z',
//     tags: [
//       { id: 'tag1', name: 'Dev', userId: 'user1' },
//       { id: 'tag2', name: 'React', userId: 'user1' },
//     ],
//   },
//   {
//     id: 'note5',
//     userId: 'user2',
//     title: 'Buy somethings',
//     content: 'Cereals wheat maize',
//     isArchived: true,
//     createdAt: '2025-05-21T10:00:00Z',
//     updatedAt: '2025-05-21T10:00:00Z',
//     tags: [
//       { id: 'tag1', name: 'Dev', userId: 'user2' },
//       { id: 'tag2', name: 'React', userId: 'user2' },
//     ],
//   },
// ];

export const rawnotes: NoteProps[] = [];
interface NoteState {
  notes: NoteProps[];
  activeNotes: NoteProps[];
  archivedNotes: NoteProps[];
  filteredNotes: NoteProps[];
  tags: TagType[];
  notesById: Map<string | number, NoteProps>;
  tagMap: Map<string | number, TagType>;
  notesByTag: Map<string, NoteProps[]>;
  filterQuery: string;
  getNotes: () => NoteProps[] | undefined;
  getNoteById: (id: string | number) => NoteForReviewType | undefined;
  setNotes: (notes: NoteProps[]) => void;
  setFilteredNotes: (notes: NoteProps[]) => void;
  setTags: (tags: TagType[]) => void;
  getNotesByTag: (tag: string) => NoteProps[] | undefined;
  getActiveNotes: () => NoteProps[] | undefined;
  getArchivedNotes: () => NoteProps[] | undefined;
  setFilterQuery: (query: string) => void;
}

export const useNoteStore = create<NoteState>((set, get) => {
  const initialTags = getAllTags();
  const tagMap = new Map(initialTags.map(tag => [tag.id, tag]));
  // const populatedNotes = populateNotesEfficiently(
  //   rawnotes,
  //   initialTags,
  //   tagMap,
  // );

  const notesById = new Map(rawnotes.map(note => [note.id, note]));
  const archivedNotes = rawnotes.filter(note => note.isArchived);
  const activeNotes = rawnotes.filter(note => !note.isArchived);

  const notesByTag = new Map<string, NoteProps[]>();
  for (const note of activeNotes) {
    for (const tag of note.tags) {
      if (!notesByTag.has(tag.name)) {
        notesByTag.set(tag.name, []);
      }
      notesByTag.get(tag.name)?.push(note);
    }
  }

  return {
    notes: [],
    tags: initialTags,
    archivedNotes,
    filteredNotes: [],
    activeNotes,
    notesById,
    tagMap,
    notesByTag,
    filterQuery: '',

    getNotes: () => {
      return get().notes;
    },
    getArchivedNotes: () => {
      return get().archivedNotes;
    },
    getFilteredNotes: () => {
      return get().filteredNotes;
    },
    getActiveNotes: () => {
      return get().activeNotes;
    },
    getFilterQuery: () => {
      return get().filterQuery;
    },

    getNoteById: (id: string | number) => {
      const note = get().notesById.get(id);
      if (!note) return undefined;

      const tags = note.tags
        .map((tag: TagType) => tagMap.get(tag.id))
        .filter(Boolean) as TagType[];

      return { ...note, tags };
    },
    setFilteredNotes: (filteredNotes: NoteProps[]) => {
      set({ filteredNotes });
    },
    setFilterQuery: (query: string) => {
      set({ filterQuery: query });
    },

    setNotes: (notes: NoteProps[]) => {
      const notesById = new Map(notes.map(note => [note.id, note]));
      const notesByTag = new Map<string, NoteProps[]>();
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

    getNotesByTag: (tagName: string): NoteProps[] | undefined => {
      return get().notesByTag.get(tagName);
    },
  };
});

// export function populateNotesEfficiently(
//   notes: NoteProps[],
//   tags: TagType[] = [],
//   tagMap?: Map<string | number, TagType>,
// ): PopulatedNote[] {
//   const map = tagMap ?? new Map(tags.map(tag => [tag.id, tag]));

//   return notes
//     .filter(note => note.userId == 'user1')
//     .map(note => ({
//       ...note,
//       tags: note.tag.map(id => map.get(id)).filter(Boolean) as TagType[],
//     }));
// }
