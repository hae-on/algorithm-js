function solution(new_id) {
  new_id = new_id
    .toLowerCase()
    .replace(/[^a-z0-9\.\-\_]/gi, "")
    .replace(/\.+/g, ".")
    .replace(/^\.+|\.+$/g, "");

  if (new_id === "") new_id = "a";
  if (new_id.length >= 16) {
    new_id = new_id.slice(0, 15).replace(/\.$/, "");
  }
  if (new_id.length <= 2) {
    new_id = new_id.padEnd(3, new_id[new_id.length - 1]);
  }

  return new_id;
}

console.log(solution("...!@BaT#*..y.abcdefghijklm"));
