export const download = (mimeType: string, fileName: string) => {
  let blob = new Blob(["Hello"], { type: mimeType });
  let file = URL.createObjectURL(blob);
  let a = document.createElement("a");
  a.download = fileName;
  a.href = file;
  a.click();
};