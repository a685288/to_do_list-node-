// export const show = () => {
//   console.log('export default ');
// };

// const show = () => {
//   console.log('fun2');
// };
// export default show;

const A = () => {
  console.log("A")
}

module.exports = {
  A : A,
  B : () => {
      console.log("B")
  },
  C : "TEST"
}
// import file (名字可自訂)
