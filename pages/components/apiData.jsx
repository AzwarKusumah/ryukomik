export async function fetchHome() {
  const res = await fetch("https://komi.katowproject.app/api/komikindo/home");
  const data = await res.json();
  return data;
}

export async function fetchDaftar(page) {
  const res = await fetch(
    "https://komi.katowproject.app/api/komikindo/daftar-komik/page/" + page
  );
  const data = await res.json();
  return data;
}

export async function fetchSearch() {
  const res = await fetch("https://komi.katowproject.app/api/komikindo/home");
  const data = await res.json();
  return data;
}
