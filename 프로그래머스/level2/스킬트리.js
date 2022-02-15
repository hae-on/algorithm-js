function solution(skill, skill_trees) {
  let splitSkill = skill.split("");
  let str = 0;
  let answer = 0;
  for (let i = 0; i < skill_trees.length; i++) {
    str = skill_trees[i]
      .split("")
      .filter((x) => splitSkill.includes(x))
      .join("");
    if (str === skill.substring(0, str.length)) {
      answer++;
    }
  }
  return answer;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]));
