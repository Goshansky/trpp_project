
    let k = 0;

    const videoData = {
    1: {
    title: "Медитация для спокойствия",
    duration: "5 мин",
    src: "https://www.youtube.com/embed/F0p2dl_XpMc?si=cDU0iOKLfNe38FlN",
    pp: "Выполняя данную медитацию, мы восстанавливаем энергетический ресурс нашего тела и ума. Успокаиваем центральную нервную систему. Настраиваем себя на определенный лад."
},
    2: {
    title: "Медитация для спокойствия",
    duration: "10 мин",
    src: "https://www.youtube.com/embed/JlAm9aSLIeI?si=XY0Lwf0DrXlbSofs",
    pp: "Эта медитация прекрасно подойдёт для окончания вашего дня. Если хотите ощутить полное расслабление - рекомендую принять положение лёжа."
},
    3: {
    title: "Медитация для спокойствия",
    duration: "15 мин",
    src: "https://www.youtube.com/embed/0jGh_v8Z90c?si=N1vqyknaQV5Ded_e",
    pp: "Медитация \"Обретение внутреннего спокойствия и гармонии\". Сейчас из-за непростой ситуации многие люди испытывают беспокойство и нервозность. Эта медитация поможет восстановить ваш внутренний эмоциональный баланс, наполнит расслаблением и настроит на позитивный лад."
},

    4: {
    title: "Медитация для удовлетворения",
    duration: "5 мин",
    src: "https://www.youtube.com/embed/0m2mvuLjcgg?si=8ClL9UcORGYWqPi6",
    pp: "Мантра создает настроение, запускает поток эмоций, очищает внутренний мир и внешнее пространство. Она\n" +
    "                развивает подлинную душевную красоту и открывает сердце для любви."
},
    5: {
    title: "Медитация для удовлетворения",
    duration: "10 мин",
    src: "https://www.youtube.com/embed/qX2-3O1sTQI?si=RA-Hd905sTbtXxhV",
    pp: "Садись удобно, надевай наушники и закрывай глаза, приглашаю тебя в путешествие по твоему внутреннему миру\n" +
    "                вместе со мной."
},
    6: {
    title: "Медитация для удовлетворения",
    duration: "15 мин",
    src: "https://www.youtube.com/embed/4E4nzYMd77g?si=dXACTD2P4r-YGiEo",
    pp: "Трансовое наведение оргазмического состояния.\n" +
    "                Оргазм под гипнозом, это необычный опыт который стоит проделать несколько раз. С каждым разом, глубина\n" +
    "                погружения будет усиливаться вместе с ощущениями.\n" +
    "                Погружение в гипноз, это навык который стоит практиковать. Вместе с этим навыком растёт самоконтроль и\n" +
    "                эмоциональная стабильность, стоит этим пользоваться."
},

    7: {
    title: "Медитация на концентрацию",
    duration: "5 мин",
    src: "https://www.youtube.com/embed/WLQ3M3Alq3I?si=d4ERwOtzGNQ2Tm9Q",
    pp: "Медитация начинается с Концентрации — умения удерживать свое внимание без отвлечений.\n" +
    "                – фокусировке на ощущении от дыхания."
},
    8: {
    title: "Медитация на концентрацию",
    duration: "10 мин",
    src: "https://www.youtube.com/embed/fzNZHRV0KvQ?si=_9n2UgyUdYC8Y-VS",
    pp: "Этот прикладной метод, как самостоятельная система, позволяет получать приток жизненной силы в центр Воли\n" +
    "                и во все центры, приумножить её на клеточном уровне через энергизацию всех тел."
},
    9: {
    title: "Медитация на концентрацию",
    duration: "15 мин",
    src: "https://www.youtube.com/embed/3RYGa94Mygg?si=B3c9wQg_CDhyFyPc",
    pp: "Предлагаю вам 15-ти минутную медиацию для улучшения работы внимания.\n" +
    "                Попросите чтобы ваши родные вас не беспокоили пока вы будете медитировать, переведите телефон в\n" +
    "                авиарежим."
},

    10: {
    title: "Медитация для радости",
    duration: "5 мин",
    src: "https://www.youtube.com/embed/uIT1CM4iqp4?si=Y_E2NvAhnI4moiLC",
    pp: "Наполнение радостью и счастьем. Медитация Радость от Татьяны Мараховской"
},
    11: {
    title: "Медитация для радости",
    duration: "10 мин",
    src: "https://www.youtube.com/embed/0m2mvuLjcgg?si=8ClL9UcORGYWqPi6",
    pp: "Мантра создает настроение, запускает поток эмоций, очищает внутренний мир и внешнее пространство. Она\n" +
    "                развивает подлинную душевную красоту и открывает сердце для любви."
},
    12: {
    title: "Медитация для радости",
    duration: "15 мин",
    src: "https://www.youtube.com/embed/-YWdIC55T-E?si=ZoK9KOPCykCv3lkd",
    pp: "Когда мы делаем после радости посвящение нашей цели (вторая часть кофе медитации), мы направляем эту\n" +
    "                энергию на конкретную цель, на определенный результат посредством посвящения."
},

    13: {
    title: "Медитация для любви",
    duration: "5 мин",
    src: "https://www.youtube.com/embed/edR8bnvF_wk?si=pcNh5a-pSPox72So",
    pp: "это первая медитация, которую я самостоятельно создала. и она сделана для тебя. даже если ты не\n" +
    "                медитируешь регулярно, просмотром/прослушиванием этого видео ты сделаешь огромный вклад в себя. люблю.\n" +
    "                спасибо за поддержку, ибо я очень боялась выставлять видео такого формата"
},
    14: {
    title: "Медитация для любви",
    duration: "10 мин",
    src: "https://www.youtube.com/embed/edR8bnvF_wk?si=pcNh5a-pSPox72So",
    pp: "это первая медитация, которую я самостоятельно создала. и она сделана для тебя. даже если ты не\n" +
    "                медитируешь регулярно, просмотром/прослушиванием этого видео ты сделаешь огромный вклад в себя. люблю.\n" +
    "                спасибо за поддержку, ибо я очень боялась выставлять видео такого формата"
},
    15: {
    title: "Медитация для любви",
    duration: "15 мин",
    src: "https://www.youtube.com/embed/qX2-3O1sTQI?si=RA-Hd905sTbtXxhV",
    pp: "Садись удобно, надевай наушники и закрывай глаза, приглашаю тебя в путешествие по твоему внутреннему миру\n" +
    "                вместе со мной."
},

    16: {
    title: "Медитация для уважения к себе",
    duration: "5 мин",
    src: "https://www.youtube.com/embed/uIT1CM4iqp4?si=Y_E2NvAhnI4moiLC",
    pp: "Наполнение радостью и счастьем. Медитация Радость от Татьяны Мараховской"
},
    17: {
    title: "Медитация для уважения к себе",
    duration: "10 мин",
    src: "https://www.youtube.com/embed/edR8bnvF_wk?si=pcNh5a-pSPox72So",
    pp: "это первая медитация, которую я самостоятельно создала. и она сделана для тебя. даже если ты не\n" +
    "                медитируешь регулярно, просмотром/прослушиванием этого видео ты сделаешь огромный вклад в себя. люблю.\n" +
    "                спасибо за поддержку, ибо я очень боялась выставлять видео такого формата"
},
    18: {
    title: "Медитация для уважения к себе",
    duration: "15 мин",
    src: "https://www.youtube.com/embed/qX2-3O1sTQI?si=RA-Hd905sTbtXxhV",
    pp: "Садись удобно, надевай наушники и закрывай глаза, приглашаю тебя в путешествие по твоему внутреннему миру\n" +
    "                вместе со мной."
},

    19: {
    title: "Медитация для гармонии",
    duration: "5 мин",
    src: "https://www.youtube.com/embed/eSzUNyWh0zg?si=FW37k19CKP-GX1mo",
    pp: "В этом видео я расскажу о том, как научиться медитировать.\n" +
    "                Многие думают, что медитация - это что-то сложное и непонятное,\n" +
    "                но на самом деле это очень просто! И я расскажу о простой технике медитации,\n" +
    "                которую можно освоить буквально за 5 минут!"
},
    20: {
    title: "Медитация для гармонии",
    duration: "10 мин",
    src: "https://www.youtube.com/embed/JlAm9aSLIeI?si=XY0Lwf0DrXlbSofs",
    pp: "Эта медитация прекрасно подойдёт для окончания вашего дня. Если хотите ощутить полное расслабление -\n" +
    "                рекомендую принять положение лёжа."
},
    21: {
    title: "Медитация для гармонии",
    duration: "15 мин",
    src: "https://www.youtube.com/embed/9XxNp4dqLD4?si=Y2chu3s7VH9_gSBA",
    pp: "15 минут, чтобы прийти к состоянию гармонии с собой и миром вокруг и установить связь с неиссякаемым\n" +
    "                источником энергии"
},
};
    // JavaScript для управления активными кнопками
    const buttons = document.querySelectorAll('.menu-buttons button');

    buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

    function setDuration(duration) {
    // Устанавливаем выбранную длительность
    k = duration;
}

    function findMeditation() {
    // Получаем значения выбранных параметров
    const selectedOption = document.getElementById('meditation-options').value;
    const selectedDuration = k;

    const selectedMeditationDiv = document.getElementById('selected-meditation');
    const selectedVideo = videoData[(selectedOption - 1) * 3 + (selectedDuration / 5)];
    console.log(selectedOption)
    console.log(selectedDuration)
    console.log(selectedVideo.title)
    // Отображаем выбранное видео
    selectedMeditationDiv.innerHTML = `
                <h2>${selectedVideo.title} | ${selectedVideo.duration}</h2>
                <iframe width="560" height="315" src="${selectedVideo.src}"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
                <p>${selectedVideo.pp}</p>
            `;
    selectedMeditationDiv.style.display = 'block';
}
