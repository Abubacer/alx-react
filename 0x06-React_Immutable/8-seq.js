import { Seq } from 'immutable';

export default function printBestStudents(grades) {
  const objectSeq = Seq(grades);
  const bestStudends = objectSeq.filter(student => student.score >= 70);
  bestStudends.forEach(student => {
    const firstName = student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1);
    const lastName = student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1);
    console.log(`{
      "${student.key}": { score: ${student.score},
      firstName: "${firstName}", lastName: "${lastName}" } }`);
  });
}
