<template>
    <div>

    <div class="grid">
        
        <div class="card" :class="{focus:project.isFocus}" ref="projectList"
            v-for="(project, index) in projects" 
            :key="index" :style="{backgroundColor: project.color}" 
            @click="setFocus(project, index)">
             <h4>{{project.name}}</h4>
             <div>
                <div class="image"> <img src="/no_image.jpg" /></div>
                <div class="description" :class="{focus:project.textAppear}">
                    {{project.description}}
                </div>
             </div>
        </div>
        
    </div>

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data(){
        return {
            projects: [
                {id:1, color:"#3498db", isFocus: false, textAppear: false, name: "Project 1", description:"Nam tincidunt libero eget enim bibendum, sed tincidunt libero vehicula. In hac habitasse platea dictumst. Phasellus vitae dui eros. Mauris tincidunt rhoncus justo, in sollicitudin risus semper id. Quisque scelerisque elit sit amet magna porta, nec lobortis neque ornare. Sed ante velit, imperdiet tincidunt porta at, finibus vitae turpis. Vestibulum quis sollicitudin leo, a fringilla dui. Suspendisse pretium dolor eu odio tempus euismod."},
                {id:2, color:"#d35400", isFocus: false, textAppear: false, name: "Project 2", description:"Nam tincidunt libero eget enim bibendum, sed tincidunt libero vehicula. In hac habitasse platea dictumst. Phasellus vitae dui eros. Mauris tincidunt rhoncus justo, in sollicitudin risus semper id. Quisque scelerisque elit sit amet magna porta, nec lobortis neque ornare. Sed ante velit, imperdiet tincidunt porta at, finibus vitae turpis. Vestibulum quis sollicitudin leo, a fringilla dui. Suspendisse pretium dolor eu odio tempus euismod."},
                {id:3, color:"#7f8c8d", isFocus: false, textAppear: false, name: "Project 3", description:"Nam tincidunt libero eget enim bibendum, sed tincidunt libero vehicula. In hac habitasse platea dictumst. Phasellus vitae dui eros. Mauris tincidunt rhoncus justo, in sollicitudin risus semper id. Quisque scelerisque elit sit amet magna porta, nec lobortis neque ornare. Sed ante velit, imperdiet tincidunt porta at, finibus vitae turpis. Vestibulum quis sollicitudin leo, a fringilla dui. Suspendisse pretium dolor eu odio tempus euismod."},
                {id:4, color:"#1abc9c", isFocus: false, textAppear: false, name: "Project 4", description:"Nam tincidunt libero eget enim bibendum, sed tincidunt libero vehicula. In hac habitasse platea dictumst. Phasellus vitae dui eros. Mauris tincidunt rhoncus justo, in sollicitudin risus semper id. Quisque scelerisque elit sit amet magna porta, nec lobortis neque ornare. Sed ante velit, imperdiet tincidunt porta at, finibus vitae turpis. Vestibulum quis sollicitudin leo, a fringilla dui. Suspendisse pretium dolor eu odio tempus euismod."},
                {id:5, color:"#f1c40f", isFocus: false, textAppear: false, name: "Project 5", description:"Nam tincidunt libero eget enim bibendum, sed tincidunt libero vehicula. In hac habitasse platea dictumst. Phasellus vitae dui eros. Mauris tincidunt rhoncus justo, in sollicitudin risus semper id. Quisque scelerisque elit sit amet magna porta, nec lobortis neque ornare. Sed ante velit, imperdiet tincidunt porta at, finibus vitae turpis. Vestibulum quis sollicitudin leo, a fringilla dui. Suspendisse pretium dolor eu odio tempus euismod."},
                {id:6, color:"#e74c3c", isFocus: false, textAppear: false, name: "Project 6", description:"Nam tincidunt libero eget enim bibendum, sed tincidunt libero vehicula. In hac habitasse platea dictumst. Phasellus vitae dui eros. Mauris tincidunt rhoncus justo, in sollicitudin risus semper id. Quisque scelerisque elit sit amet magna porta, nec lobortis neque ornare. Sed ante velit, imperdiet tincidunt porta at, finibus vitae turpis. Vestibulum quis sollicitudin leo, a fringilla dui. Suspendisse pretium dolor eu odio tempus euismod."},
                {id:7, color:"#34495e", isFocus: false, textAppear: false, name: "Project 7", description:"Nam tincidunt libero eget enim bibendum, sed tincidunt libero vehicula. In hac habitasse platea dictumst. Phasellus vitae dui eros. Mauris tincidunt rhoncus justo, in sollicitudin risus semper id. Quisque scelerisque elit sit amet magna porta, nec lobortis neque ornare. Sed ante velit, imperdiet tincidunt porta at, finibus vitae turpis. Vestibulum quis sollicitudin leo, a fringilla dui. Suspendisse pretium dolor eu odio tempus euismod."},
                {id:8, color:"#2ecc71", isFocus: false, textAppear: false, name: "Project 8", description:"Nam tincidunt libero eget enim bibendum, sed tincidunt libero vehicula. In hac habitasse platea dictumst. Phasellus vitae dui eros. Mauris tincidunt rhoncus justo, in sollicitudin risus semper id. Quisque scelerisque elit sit amet magna porta, nec lobortis neque ornare. Sed ante velit, imperdiet tincidunt porta at, finibus vitae turpis. Vestibulum quis sollicitudin leo, a fringilla dui. Suspendisse pretium dolor eu odio tempus euismod."},
                {id:9, color:"#8e44ad", isFocus: false, textAppear: false, name: "Project 9", description:"Nam tincidunt libero eget enim bibendum, sed tincidunt libero vehicula. In hac habitasse platea dictumst. Phasellus vitae dui eros. Mauris tincidunt rhoncus justo, in sollicitudin risus semper id. Quisque scelerisque elit sit amet magna porta, nec lobortis neque ornare. Sed ante velit, imperdiet tincidunt porta at, finibus vitae turpis. Vestibulum quis sollicitudin leo, a fringilla dui. Suspendisse pretium dolor eu odio tempus euismod."}
            ]
        };
    },
    methods: {
        setFocus(targetProject, index) {
            if(!targetProject.isFocus){
                for (let index = 0; index < this.projects.length; index++) {
                    const project = this.projects[index];
                    project.isFocus = false;
                    project.textAppear = false;
                }
                targetProject.isFocus = true;

                setTimeout(() => {
                    targetProject.textAppear = true;
                    setTimeout(() => {
                        this.$refs.projectList[index]?.scrollIntoView({
                            behavior: 'smooth', block: "center", 
                        });
                    }, 1);
                }, 250)
            } else {
                for (let index = 0; index < this.projects.length; index++) {
                    const project = this.projects[index];
                    project.textAppear = false;
                    project.isFocus = false;
                }
            }
        }
    }
})
</script>

<style scoped>

.grid{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 75vw;
    margin: auto; 
}

.grid .card {
    width: 30%;
    margin: 1%;
    color:white;
    text-align: center;
    max-height: 100%;
    transition: 0.5s ease-in-out width, max-height 0.5s ease-in-out;
    border-radius: 3px;
}

.grid .card.focus {
    width: 100%;
    max-height: 100%;
}

.grid .card .description{
    animation: appearAnim 0.25s ease-in-out reverse;
    margin: 5px;
    max-height: fit-content;
    text-overflow: ellipsis;
    opacity: 0;
    display: none;
}
.grid .card .description.focus{
    animation: appearAnim 0.5s ease-in-out;
    max-height: 100%;
    opacity: 1;
    display: block;
}

.grid .card .image{
    animation: appearAnim 0.5s ease-in-out;
}

.grid .card .image img{
    max-width: calc(100% - 10px);
    margin: 5px;
    border-radius: 3px;
    user-select: none;
}

@keyframes appearAnim {
    0%{
        opacity: 0;
    }
    50%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}

</style>