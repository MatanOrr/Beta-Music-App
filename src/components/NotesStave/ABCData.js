// eslint-disable-next-line import/no-anonymous-default-export
let current_scale = "DMin";
let current_v1_key = "D";
let current_v2_key = "D,";

// eslint-disable-next-line import/no-anonymous-default-export
export default `
X: 1
M: 1/4
L: 1/4
K: ${current_scale}
%%staves {V1 V2 V3 V4}
V: V1 clef=treble
V: V2 clef=bass
[V: V1] ${current_v1_key}|]
[V: V2] ${current_v2_key}|]`;
