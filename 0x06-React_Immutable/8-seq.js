import { Seq } from 'immutable';

export default function printBestStudents(object) {
  const objectSeq = Seq(object);
  const filteredObject = objectSeq.filter((student) => student.score > 70);
  filteredObject.forEach(student => {
    const firstName = student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1);
    const lastName = student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1);
    console.log(`{
      "${student.key}": { score: ${student.score},
      firstName: "${firstName}", lastName: "${lastName}" } }`);
  });
}
