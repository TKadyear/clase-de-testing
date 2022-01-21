function getTLD(url) {
  if (!isNaN(url) || !url.includes(".")) {
    return null;
  }
  const TLD = url.split(".");
  const complexTLD = TLD[TLD.length - 1].split("/")
  if (complexTLD.length > 1) {
    return `.${complexTLD[0]}`
  }

  return `.${TLD[TLD.length - 1]}`
}


module.exports = getTLD;

