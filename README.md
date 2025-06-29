# 📝 Resume Editor

Интерактивный конструктор резюме с возможностью динамического редактирования, перестановки блоков и экспорта в PDF.

🚀 [Открыть демо →](https://resume-editor-ecru.vercel.app/)

## ✨ Возможности

- Добавление и удаление блоков резюме: образование, опыт, навыки и др.
- Drag-and-drop сортировка секций
- Реальное превью справа, обновляющееся при изменении данных
- Экспорт резюме в PDF
- Сохранение данных в LocalStorage

## 🛠️ Технологии

- **React** + **TypeScript**
- **Zustand** — управление состоянием
- **TailwindCSS** — стилизация
- **html2canvas** + **jsPDF** — экспорт в PDF
- **React DnD** — drag-and-drop перестановка блоков
- **Vercel** — хостинг

## 📦 Установка

```bash
git clone https://github.com/your-username/resume-editor.git
cd resume-editor
npm install
npm run dev
````

## 📁 Структура проекта

```
src/
├── components/
│   ├── atoms/        # Базовые UI элементы (Button, Text и др.)
│   ├── organisms/    # Составные блоки UI
│   ├── widgets/      # Превью секции
│   ├── pages/        # Основные страницы
├── store/            # Zustand store
├── types/            # Типизация
```
