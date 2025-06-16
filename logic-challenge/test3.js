/**
 * Direction:
 * Remove key that have null or undefined value
 *
 * Expected Result:
 * [
 *   { session_name: 'first test', classes: [{ students: [{ student_name: 'budi' }] }] },
 *   { classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
 * ]
 */
const data = [
  {
    session_name: 'first test',
    classes: [{ class_name: undefined, students: [{ student_name: 'budi' }] }],
  },
  {
    session_name: null,
    classes: [
      { class_name: 'second class', students: [{ student_name: 'adi' }] },
    ],
  },
];

function result(data) {
  const result = [];
  const classesArr = [];
  const studentsArr = [];

  const newData = data.map((obj) =>
    Object.fromEntries(
      Object.entries(obj).filter(
        ([key, value]) => value !== null && value !== undefined,
      ),
    ),
  );

  for (const sessionObj of data) {
    for (const classObj of sessionObj.classes) {
      const newStudents = classObj.students.map((studentObj) =>
        Object.fromEntries(
          Object.entries(studentObj).filter(
            ([key, value]) => value !== null && value !== undefined,
          ),
        ),
      );

      studentsArr.push(newStudents);
    }

    const newClasses = sessionObj.classes.map((classObj) =>
      Object.fromEntries(
        Object.entries(classObj).filter(
          ([key, value]) => value !== null && value !== undefined,
        ),
      ),
    );

    classesArr.push(newClasses);
  }

  for (let i = 0; i < newData.length; i++) {
    const tempObj = {
      ...newData[i],
      classes: [...classesArr[i]],
    };

    result.push(tempObj);
  }

  return result;
}

console.log(result(data));
