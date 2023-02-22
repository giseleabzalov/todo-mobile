// import { useEffect } from "react";
// import { ScrollView, Text, TouchableOpacity } from "react-native";
// import TaskCard from "./TaskCard.js";
// import { styles } from '../../styles';

// export default function TaskList({ tasks, setTasks }) {
//     // fetch tasklist in useEffect (run only once)
//     useEffect(() => {
//         fetch('https://todo-c9-api-ga.web.app/tasks')
//         .then(res => res.json())
//         .then(setTasks)
//         .catch(console.error);
// }, []); // when component is born (first mounts)

//     const toggleDone = (task) => {
//         //is task done?
//         const done = !!!task.done //true, false, undefined

//         //we need to send a patch request to 'tasks/${tasks.taskId}'
//         // in the body we need to send { done }
//         fetch(`https://todo-c9-api-ga.web.app/tasks/${task.taskId}`, {
//             method: 'PATCH',
//             headers: {'Content-Type': 'application/json'},
//             body: JSON.stringify({ done }),
//         })
//         .then(res => res.json())
//         .then(setTasks)
//         .catch(console.error)
// }
// // return ScrollView with tasklist mapped to TaskCard
//     return (
//     <ScrollView style={styles.scrollView}>
//         {!tasks 
//             ? ( <Text>Loading...</Text> ) 
//             : ( tasks.map( (element) => (
//                 <TouchableOpacity
//                     onPress={ () => toggleDone(element)}
//                     key={element.taskId}>
//                     <TaskCard data={element} setTasks={setTasks} />
//                 </TouchableOpacity>
//             ))
//         )}
//         </ScrollView>
//         )}