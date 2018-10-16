function addProtocol(url, protocol) {
  if(!url) return '';
  if (!/^(f|ht)tps?:\/\//i.test(url)) {
     url = protocol + url;
  }
  return url;
}

function stripProtocol(url){
  if(!url) return '';
  return url.replace(/(^\w+:|^)\/\//, '');
}

function getProtocol(url){
  if(!url) return '';
  const values = url.match(/(^\w+:|^)\/\//);

  return values && (values.length > 0) ? values[0] : '';
}

export { addProtocol, getProtocol, stripProtocol };
