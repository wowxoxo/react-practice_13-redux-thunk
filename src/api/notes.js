class Note {
  constructor(id, userId, content) {
    this.id = id;
    this.userId = userId;
    this.content = content;
  }
}

const note1 = new Note(1, 1, "Note # 1");
const note2 = new Note(2, 1, "Note # 2");
const note3 = new Note(3, 1, "Note # 3");
const note4 = new Note(4, 2, "Note # 4");
const note5 = new Note(5, 2, "Note # 5");
const note6 = new Note(6, 2, "Note # 6");
// export let mockNotes = [];
export const mockNotes = [note1, note2, note3, note4, note5, note6];

export const getUserNotes = (userId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockNotes.filter((user) => user.userId === userId));
    }, 1000);
  });
};
