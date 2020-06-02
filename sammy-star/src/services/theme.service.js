const themes = [
    { CourseId: 1, ThemeId: 1, ThemeTitle: 'Sumas', redirectTo: 'addition' },
    { CourseId: 1, ThemeId: 2, ThemeTitle: 'Resta', redirectTo: 'substraction' },
    { CourseId: 1, ThemeId: 3, ThemeTitle: 'Multiplicación', redirectTo: 'multiplication' },
    { CourseId: 1, ThemeId: 4, ThemeTitle: 'División', redirectTo: 'division' },
];

const getThemesByCourseId = function (courseId) {
    return themes.filter(x => x.CourseId == courseId);
};

export const themeService = {
    getThemesByCourseId,
};
