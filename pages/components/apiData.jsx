//Url Home
export async function fetchHome() {
  const res = await fetch("https://komi.katowproject.app/api/komikindo/home");
  const data = await res.json();
  return data;
}

//Url Daftar Komik
export async function fetchDaftar(page = 1) {
  const res = await fetch(
    "https://komi.katowproject.app/api/komikindo/daftar-komik/page/" + page
  );
  const data = await res.json();
  return data;
}

//Url Search
export async function fetchSearch(query, page = 1) {
  const res = await fetch(
    `https://komi.katowproject.app/api/komikindo/search/${query}/?page=${page}`
  );
  const data = await res.json();
  return data;
}

//Url Detail Komik
export async function fetchDetail(endpoint) {
  const res = await fetch(
    "https://komi.katowproject.app/api/komikindo/komik/" + endpoint
  );
  const data = await res.json();
  return data;
}

//Url Chapter Detail Komik
export async function fetchBaca(chapter) {
  const res = await fetch(
    "https://komi.katowproject.app/api/komikindo/chapter/" + chapter
  );
  const data = await res.json();
  return data;
}
