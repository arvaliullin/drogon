### Вопросы по React и TypeScript:

**1. Компоненты и пропсы:**

   * Как создавать функциональные и классовые компоненты в React?
   * Как передавать пропсы (свойства) в компоненты, и почему это важно для работы с данными в React?
   * Каким образом можно использовать деструктуризацию пропсов для улучшения читаемости кода?

**2. Сужение типов:**

   * В чем заключается концепция "сужения типов" в контексте React и TypeScript?
   * Как использовать условные типы для более точного определения типов данных внутри компонентов React?
   * Как избежать ошибок сужения типов и обеспечить безопасность типов в процессе разработки React-приложений?

**3. Типы на каждый день:**

   * Как создавать пользовательские типы данных для обеспечения ясности и понятности кода в повседневной разработке React-приложений?
   * Как использовать enum и type union для удобного представления различных состояний в приложении? 

### Компоненты и пропсы

#### Как создавать функциональные и классовые компоненты в React?

**Функциональные компоненты**:

Функциональные компоненты — это более простой способ создания компонентов. Они принимают `props` и возвращают JSX.

```jsx
function Welcome(props) {
  return <h1>Привет, {props.name}!</h1>;
}
```

**Классовые компоненты**:

Классовые компоненты более мощные за счет возможности использовать методы жизненного цикла и `state`.

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Привет, {this.props.name}!</h1>;
  }
}
```

#### Как передавать пропсы в компоненты, и почему это важно для работы с данными в React?

Пропсы позволяют передавать данные от родительских компонентов к дочерним. Они делают компоненты более динамичными и переиспользуемыми.

```jsx
function App() {
  return <Welcome name="Алексей" />;
}
```

Использование пропсов важно для поддержания единой структуры данных во всем приложении. Это позволяет компоновать страницы и интерфейсы из небольших, переиспользуемых кусочков.

#### Каким образом можно использовать деструктуризацию пропсов для улучшения читаемости кода?

Деструктуризация позволяет сразу извлечь значения из `props`, что делает код чище и понятнее.

```jsx
function Welcome({ name }) {
  return <h1>Привет, {name}!</h1>;
}
```

### Сужения типов

#### В чем заключается концепция "сужения типов" в контексте React и TypeScript?

Сужение типов относится к процессу уточнения типа переменной в определенном контексте. Это позволяет TypeScript предоставить более точную поддержку типов, например, внутри условных операторов.

#### Как использовать условные типы для более точного определения типов данных внутри компонентов React?

Условные типы позволяют создавать более сложные типы данных, зависящие от определенного условия.

```typescript
type ResponseType<T> = T extends 'success' ? SuccessResponse : ErrorResponse;

interface SuccessResponse {
  data: string;
}

interface ErrorResponse {
  error: string;
}

function handleResponse<T extends 'success' | 'error'>(type: T): ResponseType<T> {
  if (type === 'success') {
    return { data: 'Данные загружены' } as ResponseType<T>;
  } else {
    return { error: 'Ошибка загрузки' } as ResponseType<T>;
  }
}
```

#### Как избежать ошибок сужения типов и обеспечить безопасность типов в процессе разработки React-приложений?

1. **Используйте строгую типизацию** в TypeScript.
2. **Пишите тесты** для проверки поведения компонентов.
3. **Явно указывайте типы** для всех объектов и функций.
4. **Используйте Type Guards** (Проверка типа).

### Типы на каждый день

#### Как создавать пользовательские типы данных для обеспечения ясности и понятности кода в повседневной разработке React-приложений?

Создание интерфейсов и типов помогает определять структуры данных четко и понятно.

```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

const user: User = {
  id: 1,
  name: "Алексей",
  email: "alexey@example.com"
};
```

#### Как использовать enum и type union для удобного представления различных состояний в приложении?

**Enum** позволяет создавать набор именованных констант, что упрощает работу с состоянием.

```typescript
enum Status {
  Loading,
  Success,
  Error
}

type State = {
  status: Status;
  data?: string;
  error?: string;
};

const exampleState: State = {
  status: Status.Loading
};
```

**Union Types** позволяют описывать переменные, способные принимать значения нескольких возможных типов.

```typescript
type Notification = {
  message: string;
  type: 'success' | 'error' | 'info';
};

const notifyUser = (notification: Notification) => {
  console.log(`${notification.type}: ${notification.message}`);
};
```
