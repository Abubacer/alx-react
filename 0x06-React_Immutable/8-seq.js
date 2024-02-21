import { Seq } from 'immutable';

export default function printBestStudents(object) {
  const objectSeq = Seq(object);
  const filteredObject = objectSeq.filter((student) => student.score > 70);

  function capitalizedName(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const updatedStudents = filteredObject.map((student) => ({
    ...student,
    firstName: capitalizedName(student.firstName),
    lastName: capitalizedName(student.lastName)
  }));

  console.log(updatedStudents.toJS());
}
