   if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
    else sH.set(s[rt], 1);
    if (compareMaps(sH, tH)) answer++;
    sH.set(s[lt], sH.get(s[lt] - 1));
    if (sH.get(s[lt] === 0)) sH.delete(s[lt]);
    lt++;