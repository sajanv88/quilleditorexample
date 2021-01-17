import Quill from 'quill';
import QuillMakrdown from "quilljs-markdown/dist/quilljs-markdown";

import 'quill/assets/snow';

const editor = new Quill("#editor", {
  modules: {
    toolbar: "#toolbar",
  },
  formats: ["bold", "italic", "link", "underline"],
  placeholder: "Type here...",
	theme: "snow",
});
new QuillMakrdown(editor);

document.getElementById('saveBtn').addEventListener('click', () => {
console.log(editor);
console.log(editor.getContents());
})
