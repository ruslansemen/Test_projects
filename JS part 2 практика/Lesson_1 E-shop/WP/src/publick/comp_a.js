// let b = 6;
// let c = 4;
function first(n, m) {
  return n - m;
}

function seccond(j, k) {
  return j - k;
}

export default function resalt(o, p, q, a) {
  let rs = first(o, p) - seccond(q, a);
  console.log(rs);
  return rs;
}

//resalt(6, 2, 2, 1);

//3
