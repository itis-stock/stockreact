/**
 *
 * @param course
 * @param semestr
 * @param subject
 * @param teacher
 * @returns
 */
export default function joinTeachers(
  course: number,
  semestr: number,
  subject: string,
  teacher: string,
) {
  return course + '-' + semestr + '-' + subject + '-' + teacher;
  // <course>_<semestr>_<subject>_<teacher>
}
