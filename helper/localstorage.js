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
    return this.db.removeItem(key);
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
}

export default LocalStorageService;
