import React from "react";

export async function fetchHome() {
  const res = await fetch("https://komi.katowproject.app/api/komikindo/home");
  const data = await res.json();
  return data;
}

export async function fetchGenre() {
  const res = await fetch("https://komi.katowproject.app/api/komikindo/genres");
  const data = await res.json();
  return data;
}

export async function fetchSearch() {
  const res = await fetch("https://komi.katowproject.app/api/komikindo/home");
  const data = await res.json();
  return data;
}
