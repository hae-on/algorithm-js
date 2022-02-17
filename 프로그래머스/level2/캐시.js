function solution(cacheSize, cities) {
  let time = 0;
  let cache = [];

  for (let i = 0; i < cities.length; i++) {
    cities[i] = cities[i].toLowerCase();

    const idx = cache.indexOf(cities[i]);

    // cache miss
    if (idx === -1) {
      time += 5;
      //   cache hit
    } else {
      time += 1;
      cache.splice(idx, 1);
    }
    cache.push(cities[i]);
    if (cache.length > cacheSize) cache.shift();
    console.log(cache);
  }

  return time;
}

console.log(
  solution(3, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "Jeju",
    "Pangyo",
    "Seoul",
    "Jeju",
    "Pangyo",
    "Seoul",
  ])
);
