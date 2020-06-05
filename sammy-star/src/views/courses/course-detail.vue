<template>
    <div class="content-container column is-10">
        <div class="md-layout">
            <!-- <div>Course Detail : {{id}}</div> -->
        </div>
        <div class="md-layout">
            <div v-for="theme in themes" :key="theme.ThemeId" class="md-layout-item column is-6">
                <div class="card" style="margin-bottom:0;min-height: 173px;">
                    <div class="card-content">
                        <div class="content" style="text-align: center;line-height: 26pt">
                            <div :key="theme.ThemeTitle" class="name">
                                {{ theme.ThemeTitle}}
                            </div>
                        </div>
                    </div>
                    <footer class="card-footer">
                        <button class="link card-footer-item" @click="selectTheme(theme.redirectTo)">
                            <i class="fas fa-check"></i>
                            <span>Aprender</span>
                            <img :src="'/assets/learn.svg'" width="40px" style="margin: 0px 0px 0px 10px;" />
                        </button>
                    </footer>
                </div>
            </div>
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