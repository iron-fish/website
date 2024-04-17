export function unhyphenateWords(str: string) {
  return str.replaceAll(/[^\s]-[^\s]/g, (term) => {
    return term.replaceAll("-", "");
  });
}
