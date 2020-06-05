<template>
    <div v-if="courses" class="content-container">
        <div v-for="course in courses" :key="course.CourseId" class="section content-title-group"
            @click="selectTheme(course.CourseId)" style="padding-bottom: 0px;">
            <h2 class="title">{{course.Title}}</h2>
            <img :src="'/assets/'+course.Icon" width="40px" style="margin: 0px 0px 10px 10px;" />
        </div>
    </div>
</template>
<script>
    import { courseService } from '../services';

    export default {
        name: 'Index',
        data() {
            return {
                courses: [],
            }
        },
        created() {
            this.courses = courseService.getCourses();
        },
        methods: {
            selectTheme(courseId) {
                this.$router.push({ name: 'course-detail', params: { id: courseId } })
            }
        }

    }

</script>