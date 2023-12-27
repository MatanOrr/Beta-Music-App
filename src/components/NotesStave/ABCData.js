// eslint-disable-next-line import/no-anonymous-default-export
const nicholas_smith = `
X: 1
C: Nicholas Smith
M: 4/4
L: 1/8
Q:1/4=88
%%staves {V1 V2 (V3 V4)}
V: V1 clef=treble
V: V2 clef=treble
V: V3 clef=bass
V: V4 clef=bass
[V: V1] (d3 _B =B_A =A2 | _A2 _B=B G2) (cB | d8)        |]
[V: V2] E8-             | E8               | E8         |]
[V: V3] G,8             | _B,8             | G,_B, ^F,6 |]
[V: V4] _B,,8           | _D,8             | _B,,8      |]
`;

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
