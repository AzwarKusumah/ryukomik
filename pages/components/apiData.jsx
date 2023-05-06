export async function fetchHome() {
  const res = await fetch("https://komi.katowproject.app/api/komikindo/home");
  const data = await res.json();
  return data;
}

export async function fetchDaftar(page = 1) {
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

export async function fetchDetail(endpoint) {
  const res = await fetch(
    "https://komi.katowproject.app/api/komikindo/komik/" + endpoint
  );
  const data = await res.json();
  return data;
}
