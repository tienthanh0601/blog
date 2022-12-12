import './style.scss';
import { TodoList } from '../todo-list/TodoList';

export function Layout() {
    return (
        <div className="layout">
            <TodoList/>
        </div>
    );
}

