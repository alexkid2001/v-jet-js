{
  const url = 'http://localhost:63342/test/index.html?em=world&ew=book';
  let result = {};

  let parceUrl = (text) => {
    text.substr(text.indexOf('?') + 1).split("&").forEach(item => {
      result[item.split("=")[0]] = item.split("=")[1];
    });
  };

  parceUrl(url);
  console.log(result);
}