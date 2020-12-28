console.log("Задание: 7.1");
class Candidate {
  constructor(cond) {
    for (let key in cond) {
      this[key] = cond[key];
    }
  }
}

const searchCandidatesByPhoneNumber = (phone) => {
  return condidateArr
    .filter((cand) =>
      cand.phone.match(/\d/g).join("").includes(phone.match(/\d/g).join(""))
    )
    .map((cand) => new Candidate(cand));
};
console.log(searchCandidatesByPhoneNumber("43"));
console.log(searchCandidatesByPhoneNumber("+1 (869) 40"));
console.log(searchCandidatesByPhoneNumber("43"));
console.log(searchCandidatesByPhoneNumber("+1(823) 466-2784"));

console.log("Задание: 7.2");
const getCandidateById = (id) => {
  let candid = condidateArr
    .filter((cand) => cand._id == id)
    .map((cand) => {
      cand.registered = cand.registered
        .slice(0, 10)
        .split("-")
        .reverse()
        .join("/");
      return cand;
    });
  return candid[0];
};
console.log(getCandidateById("5e216bc9a6059760578aefa4"));

console.log("Задание: 7.3");
const sortCandidatesArr = (sortBy) => {
  if (!sortBy) {
    return [...condidateArr];
  } else if (sortBy == "asc") {
    return [...condidateArr].sort(
      (min, max) =>
        min.balance.match(/\d/g).join("") - max.balance.match(/\d/g).join("")
    );
  } else if (sortBy == "desc") {
    return [...condidateArr].sort(
      (min, max) =>
        min.balance.match(/\d/g).join("") - max.balance.match(/\d/g).join("")
    );
  } else {
    return "Wrong parameter";
  }
};

console.log(sortCandidatesArr());
console.log(sortCandidatesArr("asc"));
console.log(sortCandidatesArr("desc"));
console.log(sortCandidatesArr("qwe"));

console.log("Задание: 7.4");
const getEyeColorMap = () => {
  return condidateArr.reduce((eyeMap, cand, candIndex) => {
    const { eyeColor } = cand;
    if (eyeColor in eyeMap) {
      eyeMap[eyeColor].push(new Candidate(condidateArr[candIndex]));
    } else {
      eyeMap[eyeColor] = [];
      eyeMap[eyeColor].push(new Candidate(condidateArr[candIndex]));
    }
    return eyeMap;
  }, {});
};

console.log(getEyeColorMap());
