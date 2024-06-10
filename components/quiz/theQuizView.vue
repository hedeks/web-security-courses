<script setup lang="ts">

type question = {
    id: number,
    question: string,
    answers: string[],
    title: string
}

interface QuizJSON {
    course_id: number,
    title: String,
    questions: question[]
}

const props = defineProps<{
    quizJSON: QuizJSON
}>()

const currentQuestion = ref(0);

const currentValue = ref("");
const quiz: Ref<HTMLElement | undefined> = ref();

const nextQuestion = () => {
    if (currentQuestion.value < props.quizJSON.questions.length - 1) {
        currentQuestion.value++;
    }
}

const lastQuestion = () => {
    if (currentQuestion.value > 0) {
        currentQuestion.value--;
    }
}

type QuestionModel = Record<string, {answer?:string}>

const questionsModelArray = ref(props.quizJSON.questions.reduce((acc: QuestionModel, curr: question) => {
    acc[String(curr.id)] = {answer: ""};
    return acc;
}, {} as QuestionModel));


</script>


<template>
    <div class="w-full h-full select-none relative justify-between p-11 overflow-y-scroll overflow-x-hidden bg-gray-50 dark:bg-black flex flex-col items-center p-2"
        ref="quiz">
        <div
            class="flex justify-center items-center max-w-full px-2 font-semibold rounded-full h-fit dark:bg-white bg-black text-white dark:text-black">
            {{ (currentQuestion + 1) + "/" + quizJSON.questions.length }}
        </div>
        <div class="question top-1/3 lg:w-3/4 absolute lg:h-1/3 flex-col gap-5 items-center justify-center transition-all ease-in-out duration-500"
            v-for="question in props.quizJSON.questions" :id="String(question.id)" :key="question.id"
            :class="[{ 'active': currentQuestion === question.id }, { 'inactive': currentQuestion !== question.id }]">
            <h3 class="text-center">{{ question.id + 1 + ". " + question.question }}</h3>
            <div class="answers flex flex-col w-fit mx-auto gap-2 items-start justify-start">
                <URadio color="gray" v-for="(answer, index) in question.answers" :key="index" @click="index" v-model="questionsModelArray[question.id].answer"
                    :value="question.question + index"
                    class="p-1 w-fit hover:bg-gray-200 dark:hover:bg-zinc-500 rounded transition-all ease-in-out duration-500">
                    <template #label>
                        <span class="text-lg line">{{
                            answer }}</span>
                    </template>
                </URadio>
            </div>
        </div>
        <div class="flex flex-wrap justify-center items-center w-full gap-2">
            <UButton v-if="currentQuestion > 0" icon="i-heroicons-arrow-left" color="black"
                class="mt-5 dark:shadow-darkShadow max-w-1/2" variant="solid" label="Предыдущий вопрос"
                @click="lastQuestion" />
            <UButton v-if="currentQuestion + 1 === quizJSON.questions.length" icon="i-heroicons-arrow-up-circle"
                trailing color="black" class="mt-5 dark:shadow-darkShadow max-w-1/2" variant="solid"
                label="Подвести итоги" @click="nextQuestion" />
            <UButton v-else icon="i-heroicons-arrow-right" trailing color="black"
                class="mt-5 dark:shadow-darkShadow max-w-1/2" variant="solid" label="Следующий вопрос"
                @click="nextQuestion" />
        </div>
    </div>
</template>


<style scoped>
.line {
    line-height: 1;
}

.active {
    opacity: 1;
    transform: translateY(0) scale(1);
}

.inactive {
    opacity: 0;
    pointer-events: none;
    transform: translateY(-100px) scale(1.25);
    @apply blur-sm;
}
</style>