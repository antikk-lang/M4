<script setup>
import CardSeasons from '../components/CardSeasons.vue';
import { onMounted, ref } from 'vue';

let cards = ref([
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJPDuyZSEL5Zwg88Y-And5n-8aNGEF0Pe-ig&s",
        title:"Bakemonogatari ",
        desc:"Bakemonogatari (化物語) — это получившая широкое признание японская франшиза, сочетающая в себе сверхъестественную тайну, глубокое психологическое исследование характеров, уникальную игру слов и авангардную визуальную составляющую.",
    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-EqRSOWma8cXhrg2o91GAb407AzTE6zihGQ&s",
        title:"Nisemonogatari",
        desc:"Nisemonogatari  (偽物語) — прямое продолжение Bakemonogatari  и вторая часть серии лайт-новелл и аниме-франшизы «Моногатари». Название, написанное Нисио Исином, переводится как «Fake Story» или «Impostor Story», в котором основное внимание уделяется философским темам аутентичности и обмана.",
    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT5Nv7dku_A_UUysxwYdjsJVT4lnxd81Gzjw&s",
        title:"Nekomonogatari (Kuro)",
        desc:"Nekomonogatari (Kuro) (猫物語 黒), что в переводе означает «Cat Story: Black», — критический приквел серии «Моногатари», написанный Нисио Исином. Он служит мостом между оригинальными фильмами (Kizumonogatari) и отправной точкой основного сериала.",
    },
        {
        img:"https://i.redd.it/what-your-thoughts-and-opinions-on-kizumonogatari-anime-and-v0-yslhriyiv1df1.jpg?width=2001&format=pjpg&auto=webp&s=6262b51359aebd8a9123649bfd41bf717dc551e3",
        title:"Трилогия Kizumonogatari",
        desc:"Трилогия фильмов «Kizumonogatari» (傷物語 / Истории ран) — это самый масштабный, зрелищный и кинематографичный элемент франшизы Monogatari, созданный студией Shaft под руководством режиссеров Тацуи Оиси и Акиюки Синбо. Написанная Нисио Исином, эта история является официальным приквелом ко всей серии. Она рассказывает о событиях Весенних каникул (март–апрель), когда обычный старшеклассник Коёми Арараги впервые столкнулся со сверхъестественным и превратился в вампира.",
    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8D6tEZJMmN8umG0l6MBRDUeKv2c06MyM46A&s",
        title:"Koyomimonogatari",
        desc:"Koyomimonogatari (暦物語), что переводится как «История Коёми», — это уникальный эпизодический выпуск финального сезона серии «Моногатари», написанный Нисио Исином. Он представляет собой ретроспективу в календарной тематике, заполняющую скрытые пробелы во временной линии франшизы, прежде чем преподнести масштабный сюжетный поворот, который напрямую запускает события второго сезона «Оваримоногатари».",
    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9VgQKUzh0yOzUDbOIEGXElVXj2sabyrlLtg&s",
        title:"Monogatari Series Second Season",
        desc:"«Monogatari Series Second Season» (〈物語〉シリーズ セカンドシーズン) широко считается вершиной сюжетной линии франшизы Нисио Исина. В отличие от предыдущих частей, которые были сосредоточены на одной книге, эта масштабная адаптация включает в себя шесть лайт-новелл, сплетая сложную, взаимосвязанную сеть сюжетных линий персонажей, где главная героиня Коёми Арараги часто отсутствует, заставляя героинь самостоятельно решать свои сверхъестественные проблемы.",
    },
    {
        img:"https://m.media-amazon.com/images/S/pv-target-images/53138111a2d05a7b550cb1f727de7e9d9c46e4a24fb30174183cb15177c24201.jpg",
        title:"Hanamonogatari",
        desc:"Hanamonogatari (花物語), что переводится как «История цветов», — ключевая часть второго сезона серии «Моногатари», написанного Нисио Исином. Она представляет собой значительный структурный сдвиг во франшизе, позволяя заглянуть в будущее персонажей после окончания средней школы.",
    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBDWk4SpOj6w8mLUPJHM7I5sDie3tllHwj9g&s",
        title:"Tsukimonogatari",
        desc:"Tsukimonogatari  (憑物語), что переводится как «История одержимости», является официальной вступительной частью финального сезона серии «Моногатари», написанного Нисио Исином. В центре сюжета — серьёзные долгосрочные последствия неоднократного использования Коёми Арараги вампирских сил.",
    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQj6ru1T3O4RipMqiC_ID2WLZAu-vT0qSgUg&s",
        title:"Owarimonogatari",
        desc:"Owarimonogatari (終物語), что переводится как «Конец истории», — это масштабная, многосерийная центральная часть финального сезона серии «Моногатари», написанная Нисио Исином. Она служит кульминацией школьного пути Коёми Арараги, систематически завершая все загадки, сожаления и истоки франшизы.",
    },
    
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrLRiZhxnw2vY1c4shnCO407OWHVFj_qQCbA&s",
        title:"Owarimonogatari II",
        desc:"«Owarimonogatari Season 2» (終物語 下) — это кинематографическая кульминация школьной жизни Коёми Арараги и кульминация повествования в финальном сезоне серии «Monogatari», написанном Нисио Исином. В нём полностью разрешается главная загадка франшизы: личность манипулятивного Оуги Осино и судьба человечности Арараги.",
    },
    {
        img:"https://m.media-amazon.com/images/M/MV5BZjcwYWFhY2YtM2Q4Mi00MzYyLWEyOWUtODk4ZDIwMjU5ODA2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        title:"Zoku-Owarimonogatari",
        desc:"Zoku Owarimonogatari (続・終物語), что переводится как «Конец истории: Продолжение», является официальным эпилогом и заключительной книгой финального сезона серии Monogatari, написанной Нисио Исином. Она служит своего рода психологической декомпрессионной камерой, соединяющей школьную жизнь Коёми Арараги и его предстоящую учебу в колледже.",
    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi4N0LvuaAmWWZ307IgKrsFOTqD02dXu7urQ&s",
        title:"Monogatari Series: Off & Monster Season",
        desc:"«Monogatari Series: Off & Monster Season» — долгожданное анимационное возрождение франшизы Нисио Исина, первый блок эпизодов которого вышел в июле 2024 года. Созданный студией Shaft и срежиссированный Мидори Ёсидзавой, этот сериал является прямым продолжением вселенной после окончания средней школы Коёми Арараги и разделён на две отдельные фазы лайт-новелл: побочные истории «Off Season» и загадки студенческой эпохи «Monster Season».",
    },

    {
        img:"https://preview.redd.it/colour-difference-between-the-dvd-and-bluray-release-of-v0-98cbq4eblq9g1.jpeg?width=640&crop=smart&auto=webp&s=559e6dad3c475f60019ce2c43e230ebe3bd6733a",
        title:"Релиз на DVD и Blu-ray",
        desc:"Выпуск трилогии Kizumonogatari на физических носителях (DVD и Blu-ray) проходил в несколько этапов, включая оригинальный релиз фильмов и выход недавнего полнометражного переиздания.",
    },
]);
</script>

<template>
    <section>
        <CardSeasons v-for="(card,i) in cards" :key="i" :card="card"/>
    </section>
</template>

<style scoped>
section{
    display: grid;
    gap:40px;
}
</style>