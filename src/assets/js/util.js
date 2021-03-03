export function getTopNavHeight() {
  return parseFloat(
    window
      .getComputedStyle(document.querySelector("#Nav"), null)
      .getPropertyValue("height")
  );
}
