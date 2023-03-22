const btnDiv = document.querySelectorAll(".addBtn");
const main = document.querySelector("#main");
const addNotebtn = btnDiv[0].childNodes[1];

const saveNotes = () => {
  // const note = document.createElement("div");
  const notes = document.querySelectorAll(".note textarea");
  console.log(notes);
  const data = [];
  console.log(data);
  notes.forEach((note) => {
    data.push(note.value);
  });
  if (data.length === 0) {
    localStorage.removeItem("notes");
  } else {
    localStorage.setItem("notes", JSON.stringify(data));
  }
};

addNotebtn.addEventListener("click", function () {
  addNote();
});

const addNote = (text = "") => {
  const note = document.createElement("div");
  note.innerHTML = `
  <div class="note">
        <div class="tool">
        
            <i class="save fa-solid fa-floppy-disk fa-2x"></i>
            <i class="trash fa-solid fa-trash fa-2x"></i>
        </div>
        <textarea>${text}</textarea>
 `;
  note.querySelector(".trash").addEventListener("click", function () {
    note.remove();
    saveNotes();
  });
  note.querySelector(".save").addEventListener("click", function () {
    saveNotes();
  });
  note.querySelector("textarea").addEventListener("focusout", function () {
    saveNotes();
  });
  main.appendChild(note);
};
(function () {
  const lsNotes = JSON.parse(localStorage.getItem("notes"));
  if (lsNotes === null) {
    addNote();
  } else {
    lsNotes.forEach((lsNotes) => {
      addNote(lsNotes);
    });
  }
})();
