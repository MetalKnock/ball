import { Todo } from '../../model/todoTypes';
import styles from './TodoItem.module.scss';

interface TodoItemProps {
  className?: string;
  todo: Todo;
}

export default function TodoItem({ className = '', todo }: TodoItemProps) {
  const { title } = todo;
  return <div className={`${styles.todoItem} ${className}`}>{title}</div>;
}
