class LocalStorageService {
  constructor() {
    this.db = typeof window !== "undefined" ? window.localStorage : null;
  }

  get(key) {
    const bookmarks = this.db.getItem("bookmarks")
      ? JSON.parse(this.db.getItem("bookmarks"))
      : [];
    const bookmark = bookmarks.find((bookmark) => bookmark.url.includes(key));
    return bookmark;
  }

  remove(key) {
    const bookmarks = this.db.getItem("bookmarks") ? JSON.parse(this.db.getItem("bookmarks")) : [];
    const newBookmarks = bookmarks.filter((bookmark) => !bookmark.url.includes(key));

    return this.db.setItem("bookmarks", JSON.stringify(newBookmarks));
  }

  set(value) {
    const bookmarks = this.db.getItem("bookmarks")
      ? JSON.parse(this.db.getItem("bookmarks"))
      : [];
    bookmarks.push(value);
    return this.db.setItem("bookmarks", JSON.stringify(bookmarks));
  }

  update(key, value) {
    return this.db.setItem(key, value);
  }

  get_all() {
    const bookmarks = this.db.getItem("bookmarks")
      ? JSON.parse(this.db.getItem("bookmarks"))
      : [];
    return bookmarks;
  }
}

export default LocalStorageService;
