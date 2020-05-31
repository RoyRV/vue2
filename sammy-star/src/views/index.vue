<template>
    <div v-if="courses" class="content-container">
        <div v-for="course in courses" :key="course.CourseId" class="section content-title-group"
            style="padding-bottom: 0px;">
            <h2 class="title">{{course.Title}}</h2>
            <div class="columns">
                <div class="column is-4" v-if="course.themes">
                    <ul style="display: flex;">
                        <li style="padding: 10px;" v-for="theme in course.themes" :key="theme.ThemeId">
                            <div class="card" style="margin-bottom:0;">
                                <div class="card-content">
                                    <div class="content">
                                        <div :key="theme.ThemeTitle" class="name">
                                            {{ theme.ThemeTitle}}
                                        </div>
                                    </div>
                                </div>
                                <footer class="card-footer">
                                    <button class="link card-footer-item" @click="selectTheme(theme.ThemeId)">
                                        <i class="fas fa-check"></i>
                                        <span>Select</span>
                                    </button>
                                </footer>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    export default {
        name: 'Index',
        data() {
            return {
                courses: [
                    {
                        CourseId: 1, Title: "Matemática",
                        themes: [
                            { ThemeId: 1, ThemeTitle: "Sumas" },
                            { ThemeId: 2, ThemeTitle: "Resta" },
                            { ThemeId: 3, ThemeTitle: "Multiplicación" },
                            { ThemeId: 4, ThemeTitle: "División" }
                        ]
                    },
                    { CourseId: 2, Title: "Aritmetica" },
                    { CourseId: 3, Title: "Algebra" },
                    { CourseId: 4, Title: "Trigonometria" },
                    { CourseId: 5, Title: "Geometria" },
                    { CourseIdId: 6, Title: "Fisica" },
                ],
            }
        },
        methods: {
            selectTheme(themeId) {
                console.log("themeId", themeId)
            }
        }

    }

</script>