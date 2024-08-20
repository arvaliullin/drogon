import pandas as pd

def main():
    # Создание DataFrame непосредственно в скрипте
    data = {
        'name': ['Alice', 'Bob', 'Charlie', 'David', 'Eva'],
        'age': [30, 25, 35, 40, 22],
        'city': ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix']
    }

    df = pd.DataFrame(data)

    # Вывод первых пяти строк DataFrame
    print("Первая выборка из данных:")
    print(df.head())

    # Основная информация о DataFrame
    print("\nИнформация о DataFrame:")
    print(df.info())

    # Статистические данные
    print("\nСтатистика данных:")
    print(df.describe())

    # Фильтрация данных
    # Найдём всех людей старше 30 лет
    filtered_df = df[df['age'] > 30]
    print("\nЛюди старше 30 лет:")
    print(filtered_df)

    # Группировка данных по городу и подсчёт средней возрастной категории
    grouped_df = df.groupby('city')['age'].mean().reset_index()
    print("\nСредний возраст по городам:")
    print(grouped_df)

    # Добавление новой колонки
    df['age_in_5_years'] = df['age'] + 5
    print("\nDataFrame с новой колонкой 'age_in_5_years':")
    print(df)

    # Сортировка данных по возрасту
    sorted_df = df.sort_values(by='age', ascending=True)
    print("\nDataFrame отсортированный по возрасту:")
    print(sorted_df)

if __name__ == '__main__':
    main()
