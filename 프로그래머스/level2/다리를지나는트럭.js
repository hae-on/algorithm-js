function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let bridge = [];
  let bridge_weight = 0;

  for (let i = 0; i < bridge_length; i++) {
    bridge.push(0);
  }

  let now_truck = truck_weights.shift();

  bridge.unshift(now_truck);
  bridge.pop();

  bridge_weight += now_truck;

  while (bridge_weight) {
    bridge_weight -= bridge.pop();
    now_truck = truck_weights.shift();

    if (now_truck + bridge_weight <= weight) {
      bridge.unshift(now_truck);
      bridge_weight += now_truck;
    } else {
      bridge.unshift(0);
      truck_weights.unshift(now_truck);
    }
    answer++;
  }
  return answer;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
