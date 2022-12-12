import './style.scss';
import { TodoItem } from './components/todo-item/TodoItem';

const todoList = [
    {
        order: 1,
        img: 'https://plus.unsplash.com/premium_photo-1668361451587-b7a740479b28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Zmxvd2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        title: 'There are many variations of passages of Lorem Ipsum available',
        author:'Normal',
        context:'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,',
        opacity: 1,
        comment:58,
        view:3.4,
        day:'10 Sep'
    },
    {
        order: 2,
        img: 'https://images.unsplash.com/photo-1588368390570-6b70134ec8c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y3I3fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        title: 'There are many variations of passages of Lorem Ipsum available',
        author:'Normal',
        context:'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,',
        opacity: 0.8,
        comment:58,
        view:3.4,
        day:'10 Sep'
    }
    ,
    {
        order: 3,
        img: 'https://images.unsplash.com/photo-1545511445-0f0ad0b9f399?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y3I3fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        title: 'There are many variations of passages of Lorem Ipsum available',
        author:'Normal',
        context:'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,',
        opacity: 0.6,
        comment:58,
        view:3.4,
        day:'10 Sep'
    }
    ,{
        order: 4,
        img: 'https://images.unsplash.com/photo-1657061681321-a233ba9942a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNyN3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        title: 'There are many variations of passages of Lorem Ipsum available',
        author:'Normal',
        context:'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,',
        opacity: 0.4,
        comment:58,
        view:3.4,
        day:'10 Sep'
    }
    ,
]
export function TodoList() {
    return(
        <div className='todo-list'>
            {todoList.map((item, index) => (
                <TodoItem title={item.title} 
                    order={item.order}
                    img={item.img}
                    context={item.context}
                    author={item.author}
                    opacity={item.opacity}
                    comment={item.comment}
                    view={item.view}
                    day={item.day}
                />
            ))}
        </div>
    )
}