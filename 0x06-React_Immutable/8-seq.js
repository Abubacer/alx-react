import { Seq } from 'immutable';

export default function printBestStudents(object) {
  const objectSeq = Seq(object);
  const filteredObject = objectSeq.filter((student) => student.score > 70);

  const getStudent = filteredObject.toJS();

  function capitalizedName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  Object.keys(getStudent).map((key) => {
    getStudent[key].firstName = capitalizedName(getStudent[key].firstName);
    getStudent[key].lastName = capitalizedName(getStudent[key].lastName);
    return getStudent[key];
  });

  console.log(getStudent);
}
