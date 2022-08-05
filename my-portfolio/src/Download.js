export const download = (filename, url) => {
    const link = document.createElement("a");
    link.download = filename;
    link.href = url;
    link.rel = "noopener";
  
    link.click();
    link.remove();
    setTimeout(() => {
      URL.revokeObjectURL(url);
    }, 100);
  };
  
  export const downloadByOctetStream = async (filename, url) => {
    const chunks = [];
    const res = await fetch(url);
    const reader = res.body.getReader();
    const readChunk = ({ done, value: chunk }) => {
      if (done) {
        const blob = new Blob(chunks, {
          type: "application/octet-stream; charset=utf-8"
        });
        download(filename, URL.createObjectURL(blob));
        return;
      }
      chunks.push(chunk);
      reader.read().then(readChunk);
    };
    reader.read().then(readChunk);
  };
  
  export const downloadByFileReader = async (filename, url) => {
    const chunks = [];
    const res = await fetch(url);
    const reader = res.body.getReader();
    reader.filename = filename;
    // https://stackoverflow.com/questions/53666113/file-not-downloading-with-blob-object-in-iphone-chrome-browser
    const fileReader = new FileReader();
    fileReader.onload = () => {
      download(filename, fileReader.result);
    };
    const readChunk = ({ done, value: chunk }) => {
      if (done) {
        // https://stackoverflow.com/questions/6955860/filename-of-downloaded-file-in-dataapplication-octet-stream
        fileReader.readAsDataURL(
          new Blob(chunks, {
            type: `application/pdf;`
          })
        );
        return;
      }
      chunks.push(chunk);
      reader.read().then(readChunk);
    };
    reader.read().then(readChunk);
  };
  