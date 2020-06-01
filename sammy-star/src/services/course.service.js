const courses = [
    { CourseId: 1, Title: "Matemática" },
    { CourseId: 2, Title: "Aritmetica" },
    { CourseId: 3, Title: "Algebra" },
    { CourseId: 4, Title: "Trigonometria" },
    { CourseId: 5, Title: "Geometria" },
    { CourseIdId: 6, Title: "Fisica" },
];

const getCourses = function () {
    return courses;
};

export const courseService = {
    getCourses,
}