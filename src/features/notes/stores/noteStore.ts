import { create } from "zustand";
import { getAllTags } from "../../tags/stores/tagStore";
import { TagType } from "../../tags/types";
import { NoteForReviewType, NoteProps, PopulatedNote } from "../types";

export const rawnotes: NoteProps[] = [
  // {
  //   id: "note1",
  //   userId: "user1",
  //   title: "Buy groceries",
  //   content: "Milk, eggs, bread",
  //   isArchived: false,
  //   createdAt: "2025-05-21T10:00:00Z",
  //   updatedAt: "2025-05-21T10:00:00Z",
  //   tagIds: ["tag1", "tag2"],
  // },
  // {
  //   id: "note2",
  //   userId: "user1",
  //   title: "Buy groceries",
  //   content: "Milk, eggs, bread",
  //   isArchived: false,
  //   createdAt: "2025-05-21T10:00:00Z",
  //   updatedAt: "2025-05-21T10:00:00Z",
  //   tagIds: ["tag1", "tag3"],
  // },
  // {
  //   id: "note3",
  //   userId: "user1",
  //   title: "Buy groceries",
  //   content: "Milk, eggs, bread",
  //   isArchived: false,
  //   createdAt: "2025-05-21T10:00:00Z",
  //   updatedAt: "2025-05-21T10:00:00Z",
  //   tagIds: ["tag1", "tag2"],
  // },
];

interface NoteState {
  notes: PopulatedNote[];
  tags: TagType[];
  notesById: Map<string | number, PopulatedNote>;
  tagMap: Map<string | number, TagType>;
  notesByTag: Map<string, PopulatedNote[]>;

  getNotes: () => PopulatedNote[] | undefined;
  getNoteById: (id: string | number) => NoteForReviewType | undefined;
  setNotes: (notes: PopulatedNote[]) => void;
  setTags: (tags: TagType[]) => void;
  getNotesByTag: (tag: string) => PopulatedNote[] | undefined;
}

export const useNoteStore = create<NoteState>((set, get) => {
  const initialTags = getAllTags();
  const populatedNotes = populateNotesEfficiently(rawnotes, initialTags);

  const notesById = new Map(populatedNotes.map((note) => [note.id, note]));
  const tagMap = new Map(initialTags.map((tag) => [tag.id, tag]));

  const notesByTag = new Map<string, PopulatedNote[]>();
  for (const note of populatedNotes) {
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
    notesById,
    tagMap,
    notesByTag,

    getNotes: () => {
      return get().notes;
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
      const notesById = new Map(notes.map((note) => [note.id, note]));
      const notesByTag = new Map<string, PopulatedNote[]>();
      for (const note of notes) {
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
      });
    },

    setTags: (tags: TagType[]) => {
      set({
        tags,
        tagMap: new Map(tags.map((tag) => [tag.id, tag])),
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
  tagMap?: Map<string | number, TagType>
): PopulatedNote[] {
  const map = tagMap ?? new Map(tags.map((tag) => [tag.id, tag]));

  return notes.map((note) => ({
    ...note,
    tags: note.tagIds.map((id) => map.get(id)).filter(Boolean) as TagType[],
  }));
}
