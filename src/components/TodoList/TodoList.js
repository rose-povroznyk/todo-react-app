import React from 'react';
import './TodoList.css';

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [
        {
          id: 1,
          text: 'Спробувати оновити npm, але зіткнутися зі столітнім процесом.',
        },
        {
          id: 2,
          text: 'Відкрити 20 табів Stack Overflow і все одно не знайти відповідь.',
        },
        {
          id: 3,
          text: 'Переконати себе, що CSS - це просто, доки не почнеш вирішувати задачі з абсолютним позиціонуванням.',
        },
        {
          id: 4,
          text: 'Знайти спосіб оновити всі пакети у package.json без неочікуваних побічних ефектів.',
        },
        {
          id: 5,
          text: 'Вирішити головоломку: "Чому мої стилі не працюють?!".',
        },
        {
          id: 6,
          text: 'Зрозуміти, що код не працює через одне з вирішених завдань, яке було "покращено" під час вечірнього програмування.',
        },
        {
          id: 7,
          text: 'Створити власний фреймворк, але зрозуміти, що він не вирішує ніяких проблем, крім створення нових.',
        },
        {
          id: 8,
          text: 'Створити додаток, який автоматично генерує технічне завдання для себе.',
        },
        {
          id: 9,
          text: 'Зрозуміти, чому додаток працює на локальному компі, але не на сервері.',
        },
        {
          id: 10,
          text: 'Зрозуміти, що мозок продовжує програмувати, навіть уві сні.',
        },
      ],
    };
  }

  createList() {
    const { tasks } = this.state;
    return tasks.map((task) => (
      <li className='listItem' key={task.id}>
        {task.text}{' '}
        <button onClick={() => this.deleteLi(task.id)}>&#9747;</button>
      </li>
    ));
  }

  deleteLi(id) {
    const { tasks } = this.state;
    const updatedTasks = tasks.filter((task) => task.id !== id);
    this.setState({
      tasks: updatedTasks,
    });
  }

  render() {
    return <ul className='todoList'>{this.createList()}</ul>;
  }
}

export default TodoList;
