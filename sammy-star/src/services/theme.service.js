const themes = [
    { CourseId: 1, ThemeId: 1, ThemeTitle: 'Sumas' },
    { CourseId: 1, ThemeId: 2, ThemeTitle: 'Resta' },
    { CourseId: 1, ThemeId: 3, ThemeTitle: 'Multiplicación' },
    { CourseId: 1, ThemeId: 4, ThemeTitle: 'División' },
];

const getThemesByCourseId = function (courseId) {
    return themes.filter(x => x.CourseId == courseId);
};

export const themeService = {
    getThemesByCourseId,
};