// import { View, Text, Button } from 'react-native';
// import { styles } from '../../styles';

// export default function TaskCard ({ data, setTasks }) {
//     const { task, done, taskId } = data;
//     const handleDelete = () => {
//         fetch(`https://todo-c9-api-ga.web.app/tasks/${taskId}`, {
//             method: 'DELETE',
//             headers: {'Content-Type': 'application/json'},
//         })
//         .then(res => res.json())
//         .then(setTasks)
//         .catch(console.error);
//     }
//     return (
//             <View style={styles.taskCardContainer}>
//                 <Text style={done ? styles.textColorDone : styles.textColor}>• {task}</Text>
//                 <Button 
//                     title='Delete'
//                     color='#202020'
//                     accessibilityLabel='Delete'
//                     style={handleDelete} 
//                 />
//             </View>
//     );
// }

