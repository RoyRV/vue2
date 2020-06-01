<template>
    <div class="content-container">
        <div>Course Detail : {{id}}</div>
        <div class="columns">
            <div class="column is-4" v-if="themes">
                <ul style="display: flex;">
                    <li style="padding: 10px;" v-for="theme in themes" :key="theme.ThemeId">
                        <div class="card" style="margin-bottom:0;">
                            <div class="card-content">
                                <div class="content">
                                    <div :key="theme.ThemeTitle" class="name">
                                        {{ theme.ThemeTitle}}
                                    </div>
                                </div>
                            </div>
                            <footer class="card-footer">
                                <button class="link card-footer-item" @click="selectTheme(theme.redirectTo)">
                                    <i class="fas fa-check"></i>
                                    <span>Learn</span>
                                </button>
                            </footer>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    import { themeService } from '../../services';
    export default {
        name: 'CourseDetail',
        props: {
            id: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                themes: [],
            }
        },
        created() {
            this.themes = themeService.getThemesByCourseId(this.id);
        },
        methods: {
            selectTheme(redirectTo) {
                this.$router.push({ name: redirectTo })
            }
        }
    }
</script>