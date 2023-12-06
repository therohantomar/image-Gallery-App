export function handleTextChange(e, setQueryText) {
  setQueryText(e.target.value);
}

export function handleSearch(text, dispatch, textChange) {
  dispatch(textChange(text));
}
