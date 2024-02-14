const form = document.querySelector('.inputs');
const input = document.getElementById('task-input');
const list = document.getElementById('task-list');

let tasks = [];

function addTask(task) {
    tasks.push(task);
    updateList();
}

function updateList() {
    list.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.style.display = 'flex'; // Устанавливаем стиль flex для элемента списка, чтобы можно было легко управлять расположением элементов внутри него

        // Создаем элемент input для галочки
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed; // Устанавливаем состояние галочки в зависимости от свойства completed задачи
        checkbox.addEventListener('change', () => { // Добавляем слушатель события изменения состояния галочки
            tasks[index].completed = checkbox.checked; // Обновляем состояние задачи в массиве tasks при изменении галочки
            if (checkbox.checked) {
                label.style.textDecoration = 'line-through'; // Зачеркиваем текст, если галочка отмечена
            } else {
                label.style.textDecoration = 'none'; // Убираем зачеркивание текста, если галочка не отмечена
            }
        });

        // Добавляем текст задачи после галочки с отступом
        const label = document.createElement('label');
        label.textContent = task.text;
        label.style.marginLeft = '50px'; // Добавляем отступ слева для текста

        // Увеличиваем размер галочки
        checkbox.style.transform = 'scale(2.3)'; // Масштабируем галочку в 1.5 раза

        // Создаем элемент img для изображения (фотографии)
        const deleteImage = document.createElement('img');
        deleteImage.src = 'red-x.jpg'; // Устанавливаем путь к изображению
        deleteImage.alt = 'Delete'; // Устанавливаем альтернативный текст для изображения
        deleteImage.style.cursor = 'pointer'; // Добавляем стиль cursor:pointer для указания, что изображение является ссылкой
        deleteImage.width = 32; // Ширина изображения
        deleteImage.height = 32; // Высота изображения

        deleteImage.addEventListener('click', (event) => {
            event.preventDefault(); // Отменяем действие по умолчанию для изображения
            tasks.splice(index, 1); // Удаляем задачу из массива tasks
            updateList(); // Обновляем список после удаления задачи
        });

        // Добавляем галочку, текст задачи и изображение удаления в элемент списка
        li.appendChild(checkbox);
        li.appendChild(label);
        li.appendChild(deleteImage);

        li.dataset.index = index;

        // Добавляем стили для изображения удаления
        deleteImage.style.marginLeft = 'auto'; // Помещаем изображение удаления в самый правый конец элемента списка

        list.appendChild(li);
    });
}

function toggleTaskCompletion(event) {
    const index = event.target.dataset.index;
    tasks[index].completed = !tasks[index].completed;
    updateList();
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (input.value.trim()) {
        addTask({ text: input.value.trim(), completed: false });
        input.value = '';
    }
});
