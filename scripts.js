function getGlyphs() {
  return document.getElementsByClassName('glyph');
}

function appendImgToGlyph(glyph, img) {
  if (glyph) {
    glyph.innerHTML = '';
    glyph.appendChild(img);
  }
}

function createImg(src) {
  let img = document.createElement('img');
  img.classList.add("img");
  img.src = src;
  return img;
}

function onFileSelect(inputElem) {
  filesToImg(inputElem.files);
}

function filesToImg(files) {
  let glyphs = getGlyphs();
  if (files && files.length) {
    let fr = new FileReader();
    let i = 0;
    fr.onload = function () {
      appendImgToGlyph(glyphs.item(i), createImg(fr.result));
      file = files.item(++i);
      if (file) {
        fr.readAsDataURL(file);
      } 
    }

    fr.readAsDataURL(files.item(i));
  }
}
