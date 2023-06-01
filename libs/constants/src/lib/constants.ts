// export function constants(): string {
//   return 'constants';
// }
export const demoPatients = Array.from({ length: 25 }, (_, i) => {
  return {
    id: i,
    name: `John Doe ${i}`,
    age: 18 + Math.floor(Math.random() * 20),
  };
});
